const nodemailer = require('nodemailer');

// This function will be responsible for sending the OTP email.
const sendOTPEmail = async (email, otp) => {
  try {
    // 1. Create a Transporter
    // The configuration should come from your .env file for security.
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // For Gmail: 'smtp.gmail.com'
      port: process.env.EMAIL_PORT, // For Gmail with secure:true: 465, with secure:false: 587
      secure: process.env.EMAIL_PORT == 465, // Use true for port 465, false for other ports like 587
      auth: {
        user: process.env.EMAIL_USER, // Your email address from .env
        pass: process.env.EMAIL_PASS, // Your email's App Password from .env
      },
    });

    // 2. Define the email options with a more robust template
    const mailOptions = {
      from: `"GigHive" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your GigHive One-Time Password (OTP)',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0d6efd;">GigHive Account Verification</h2>
          <p>Hello,</p>
          <p>Please use the following One-Time Password (OTP) to complete your login. This code is valid for 10 minutes.</p>
          <p style="background: #f0f0f0; padding: 10px 15px; border-radius: 5px; font-size: 24px; font-weight: bold; letter-spacing: 2px; text-align: center;">
            ${otp}
          </p>
          <p>If you did not request this OTP, please ignore this email or contact our support if you have any concerns.</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 0.9em; color: #777;">Best regards,<br>The GigHive Team</p>
        </div>
      `,
    };

    // 3. Send the email and log the result
    console.log(`Attempting to send OTP email to: ${email}...`);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully! Message ID:', info.messageId);

  } catch (error) {
    // --- THIS IS THE MOST IMPORTANT PART ---
    // This will log the EXACT error from the mail server to your terminal.
    console.error('--- MAILER ERROR ---');
    console.error('Failed to send OTP email. Please check your .env file and App Password.');
    console.error('Full Error:', error); // Log the full error object
  }
};

module.exports = { sendOTPEmail };

