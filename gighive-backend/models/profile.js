const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  // Student-specific fields
  university: { type: String },
  major: { type: String },
  skills: [String],
  credits: { type: Number, default: 0 },
  // Employer-specific fields
  companyName: { type: String },
  industry: { type: String },
  companyDescription: { type: String },
});

module.exports = mongoose.model('profile', profileSchema);