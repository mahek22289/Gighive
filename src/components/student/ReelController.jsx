const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth'); // Assuming you have auth middleware
const { uploadReel, getReels } = require('../controllers/reelController');

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// @route   POST api/reels/upload
// @desc    Upload a new reel
// @access  Private
router.post('/upload', [auth, upload.single('media')], uploadReel);

// @route   GET api/reels/feed
// @desc    Get all reels for the feed
// @access  Public (or add 'auth' middleware for private)
router.get('/feed', getReels);

module.exports = router;
