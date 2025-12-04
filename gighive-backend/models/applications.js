const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  gig: { type: mongoose.Schema.Types.ObjectId, ref: 'gig', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, default: 0 },
  experience: { type: String },
  appliedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'shortlisted', 'hired', 'declined'], default: 'pending' }

});

module.exports = mongoose.model('Application', applicationSchema);
