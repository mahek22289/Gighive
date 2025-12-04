// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const auth = require('../middleware/user'); // JWT auth middleware
// const { uploadMedia } = require('../services/mediaUploader');
// const Reel = require('../models/Reel');

// // Use a temp folder for local file buffering before cloud upload
// const upload = multer({ dest: 'temp/' });

// /**
//  * @route   POST /api/reels/upload
//  * @desc    Uploads a new media file as a reel
//  * @access  Private
//  */
// router.post('/upload', [auth, upload.single('media')], async (req, res) => {
//   try {
//     console.log('📥 Incoming upload request');
//     console.log('🧾 Request body:', req.body);
//     console.log('📦 Uploaded file:', req.file);
//     console.log('🔐 Authenticated user:', req.user);

//     const { title } = req.body;
//     if (!req.file) {
//       console.warn('⚠️ No file received in request');
//       return res.status(400).json({ success: false, msg: 'No media file provided' });
//     }

//     const mediaUrl = await uploadMedia(req.file); // ✅ abstracted cloud upload
//     console.log('🌐 Media uploaded to cloud. URL:', mediaUrl);

//     const userId = req.user.id;
//     const newReel = new Reel({
//       title,
//       mediaUrl,
//       uploadedBy: userId,
//       createdAt: new Date(),
//     });

//     await newReel.save();
//     console.log('✅ Reel saved to database:', newReel);

//     res.status(201).json({ success: true, reel: newReel });
//   } catch (err) {
//     console.error('❌ Upload error:', err);
//     res.status(500).json({ success: false, msg: 'Upload failed', error: err.message });
//   }
// });

// /**
//  * @route   GET /api/reels/feed
//  * @desc    Fetches all reels for the main feed
//  * @access  Public
//  */
// router.get('/feed', async (req, res) => {
//   try {
//     console.log('📡 Fetching reels for feed');
//     const reels = await Reel.find().sort({ createdAt: -1 });
//     console.log(`📦 ${reels.length} reels fetched`);
//     res.json({ success: true, reels });
//   } catch (err) {
//     console.error('❌ Fetch error:', err);
//     res.status(500).json({ success: false, msg: 'Failed to fetch reels', error: err.message });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { auth, verifyEmployer } = require('../middleware/user'); // ✅ destructured middleware
const { uploadMedia } = require('../services/mediaUploader');
const Reel = require('../models/Reel');

// Use a temp folder for local file buffering before cloud upload
const upload = multer({ dest: 'temp/', limits: { fileSize: 50 * 1024 * 1024 } }); // 50MB max

/**
 * @route   POST /api/reels/upload
 * @desc    Uploads a new media file as a reel
 * @access  Private (Employer only)
 */
router.post(
  '/upload',
  auth,
  verifyEmployer,
  upload.single('media'),
  async (req, res) => {
    try {
      console.log('📥 Incoming upload request');
      console.log('🧾 Request body:', req.body);
      console.log('📦 Uploaded file:', req.file);
      console.log('🔐 Authenticated user:', req.user);

      const { title } = req.body;
      if (!req.file) {
        console.warn('⚠️ No file received in request');
        return res.status(400).json({ success: false, msg: 'No media file provided' });
      }

      const mediaUrl = await uploadMedia(req.file); // ✅ abstracted cloud upload
      console.log('🌐 Media uploaded to cloud. URL:', mediaUrl);

      const userId = req.user.id;
      const newReel = new Reel({
        title,
        mediaUrl,
        uploadedBy: userId,
        createdAt: new Date(),
      });

      await newReel.save();
      console.log('✅ Reel saved to database:', newReel);

      res.status(201).json({ success: true, reel: newReel });
    } catch (err) {
      console.error('❌ Upload error:', err);
      res.status(500).json({ success: false, msg: 'Upload failed', error: err.message });
    }
  }
);

/**
 * @route   GET /api/reels/feed
 * @desc    Fetches all reels for the main feed
 * @access  Public
 */
router.get('/feed', async (req, res) => {
  try {
    console.log('📡 Fetching reels for feed');
    const reels = await Reel.find().sort({ createdAt: -1 });
    console.log(`📦 ${reels.length} reels fetched`);
    res.json({ success: true, reels });
  } catch (err) {
    console.error('❌ Fetch error:', err);
    res.status(500).json({ success: false, msg: 'Failed to fetch reels', error: err.message });
  }
});

module.exports = router;
