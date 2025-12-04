const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'employer'], required: true },
  avatar: { type: String }, 
  createdAt: { type: Date, default: Date.now },
otp: { type: String },
otpExpires: { type: Date },
otpVerified: {
  type: Boolean,
  default: false,
}

});

module.exports = mongoose.model('user', userSchema);