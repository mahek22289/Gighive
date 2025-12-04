const User = require('../models/user');
const Profile = require('../models/profile');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator');
const { sendOTPEmail } = require('../config/mailer');

exports.register = async (req, res) => {
  const { name, email, password, role, userType } = req.body;
  const finalRole = role || userType;

  try {
    console.log('--- Starting Registration Process ---');
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      password: hashedPassword,
      role: finalRole,
      otpVerified: false,
    });

    await user.save();
    await new Profile({ user: user.id }).save();

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    const io = req.app.get('io');
    io.emit('newUserRegistered', {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error('--- REGISTRATION ERROR ---');
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const io = req.app.get('io');

    if (user.otpVerified) {
      const payload = {
        user: {
          id: user.id,
          role: user.role,
        },
      };

      io.emit('userLoggedIn', {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      });

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
        });
      });
    } else {
      const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });

      user.otp = otp;
      user.otpExpires = Date.now() + 10 * 60 * 1000;
      await user.save();

      await sendOTPEmail(user.email, otp);
      res.json({ success: true, msg: 'OTP sent successfully!' });
    }
  } catch (err) {
    console.error('--- LOGIN ERROR ---');
    res.status(500).send('Server error');
  }
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({
      email,
      otp,
      otpExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid OTP or OTP has expired.' });
    }

    user.otp = null;
    user.otpExpires = null;
    user.otpVerified = true;
    await user.save();

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    const io = req.app.get('io');
    io.emit('otpVerified', {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
      if (err) {
        return res.status(500).json({ msg: 'Token generation failed' });
      }

      res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    });
  } catch (err) {
    console.error('--- OTP VERIFY ERROR ---');
    res.status(500).send('Server. Please try signing up again first, then attempt to log in.');
  }
};
