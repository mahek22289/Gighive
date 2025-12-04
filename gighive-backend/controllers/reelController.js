const Reel = require('../models/Reel');
// 1. Import the abstracted upload service instead of Cloudinary directly
const { uploadMedia } = require('../services/storageService');

/**
 * @desc    Upload a new reel/media file
 * @route   POST /api/reels/upload
 * @access  Private (requires user to be logged in)
 */
exports.uploadReel = async (req, res) => {
  try {
    // Check if a file was provided by the 'multer' middleware
    if (!req.file) {
      return res.status(400).json({ msg: 'No file was uploaded.' });
    }

    // 2. Call the universal storage service to handle the actual upload.
    // This part doesn't know or care if it's Cloudinary or AWS.
    const { mediaUrl, publicId } = await uploadMedia(req.file);

    // 3. Create the new document with the URL returned from the service.
    const newReel = new Reel({
      user: req.user.id, // Assumes your authentication middleware adds the user to the request
      title: req.body.title || 'Untitled Reel',
      mediaUrl, // The URL from Cloudinary (or AWS in the future)
      publicId, // The ID from Cloudinary (or AWS in the future)
    });

    await newReel.save();

    // Send the newly created reel data back to the frontend
    res.status(201).json(newReel);

  } catch (err) {
    console.error('--- UPLOAD CONTROLLER ERROR ---', err);
    res.status(500).send('Server Error');
  }
};

/**
 * @desc    Fetch all reels for the main feed
 * @route   GET /api/reels/feed
 * @access  Public
 */
exports.getReels = async (req, res) => {
  try {
    // This logic remains the same, as it only interacts with the database.
    const reels = await Reel.find({})
      .sort({ createdAt: -1 }) // Sort by newest first
      .populate('user', ['name', 'avatar']); // Fetch the associated user's name and avatar

    res.json(reels);
  } catch (err) {
    console.error('--- GET REELS ERROR ---', err);
    res.status(500).send('Server Error');
  }
};

