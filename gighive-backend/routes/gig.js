const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const { auth, verifyEmployer, verifyAdmin, verifyRole } = require('../middleware/user.js');
const {
  createGig,
  getAllGigs,
  getGigById,
  verifyGig,
  rejectGig,
  getAllGigsAdmin,
  applyToGig
} = require('../controllers/gig.js');
const { uploadVideo } = require('../services/storageService.js');
const Gig = require('../models/gig.js');
const gigController = require('../controllers/gig');

// -----------------------------
// 📦 Multer setup (temporary video storage)
// -----------------------------
const upload = multer({
  dest: 'temp/',
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max
});

// -----------------------------
// 🧑‍💼 Employer: Fetch Applications for Their Gigs
// -----------------------------
router.get('/applications', auth, verifyEmployer, async (req, res) => {
  try {
    const gigs = await Gig.find({ employer: req.user.id })
      .populate('applications.student', 'name university major year rating completedGigs')
      .select('title applications');

    const formatted = gigs.flatMap((gig) =>
      gig.applications.map((app) => ({
        gigTitle: gig.title,
        appliedDate: app.appliedAt,
        proposal: app.message,
        status: app.status || 'pending',
        applicant: {
          _id: app.student._id,
          name: app.student.name,
          university: app.student.university,
          major: app.student.major,
          year: app.student.year,
          rating: app.student.rating || 0,
          completedGigs: app.student.completedGigs || 0,
          avatar: app.student.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase(),
        },
      }))
    );

    res.json(formatted);
  } catch (err) {
    console.error('❌ Error fetching applications:', err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

// -----------------------------
// ✅ Update Application Status (Hire / Shortlist / Decline)
// -----------------------------
router.put('/update-status', auth, verifyEmployer, async (req, res) => {
  const { gigTitle, studentId, status } = req.body;

  if (!gigTitle || !studentId || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const gig = await Gig.findOne({ employer: req.user.id, title: gigTitle });

    if (!gig) {
      return res.status(404).json({ error: 'Gig not found' });
    }

    const application = gig.applications.find(
      (app) => app.student.toString() === studentId
    );

    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    application.status = status;
    await gig.save();

    res.status(200).json({ message: 'Status updated successfully' });
  } catch (err) {
    console.error('❌ Error updating status:', err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

// -----------------------------
// 🧑‍💼 Create Gig (Employer)
// -----------------------------
router.post('/', auth, verifyEmployer, createGig);

// -----------------------------
// 🌍 Public Gig Listings
// -----------------------------
router.get('/', getAllGigs);

// -----------------------------
// 🧑‍💼 Admin Moderation
// -----------------------------
router.put('/:id/verify', auth, verifyAdmin, verifyGig);
router.put('/:id/reject', auth, verifyAdmin, rejectGig);
router.get('/all', auth, verifyAdmin, getAllGigsAdmin);
router.put('/update-status', auth, verifyEmployer, gigController.updateApplicationStatus);

// -----------------------------
// 🎥 Gig Reel Upload (Employer)
// -----------------------------
router.post(
  '/upload-reel',
  auth,
  verifyEmployer,
  upload.single('gigReel'),
  async (req, res) => {
    try {
      const result = await uploadVideo(req.file.path);
      fs.unlinkSync(req.file.path); // Clean up temp file
      res.json({ url: result.secure_url });
    } catch (err) {
      console.error('Gig reel upload failed:', err);
      res.status(500).json({ error: 'Upload failed' });
    }
  }
);

// -----------------------------
// 🎓 Student Gig Application
// -----------------------------
router.post('/:id/apply', auth, verifyRole('student'), applyToGig);

// -----------------------------
// 🔍 Get Gig by ID (keep last!)
// -----------------------------
router.get('/:id', getGigById);

module.exports = router;
