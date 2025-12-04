const mongoose = require('mongoose');

const ReelSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // This creates a link to the user who uploaded the reel
    required: true,
  },
  title: {
    type: String,
    trim: true,
  },
  mediaUrl: {
    type: String, // This will be the URL provided by Cloudinary
    required: true,
  },
  publicId: {
    type: String, // This is the ID Cloudinary uses to manage the file
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('reel', ReelSchema);

