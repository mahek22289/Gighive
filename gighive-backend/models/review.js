const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  gig: { type: mongoose.Schema.Types.ObjectId, ref: 'gig', required: true },
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  reviewee: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('review', reviewSchema);