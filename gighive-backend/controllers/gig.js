const { calculateStats, calculateAnalytics } = require('../services/dashboardService');
const Gig = require('../models/gig.js');

// @desc    Create a gig
// @route   POST /api/gig
// @access  Private (Employers only)
exports.createGig = async (req, res) => {
  try {
    console.log('🎯 createGig triggered by:', req.user);

    const newGig = new Gig({
      ...req.body,
      employer: req.user.id,
    });

    const gig = await newGig.save();

    // Emit real-time event
    const io = req.app.get('io');
    io.emit('gigCreated', gig);

    res.json(gig);
  } catch (err) {
    console.error('❌ Gig creation error:', err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get all gigs
// @route   GET /api/gig
// @access  Public
exports.getAllGigs = async (req, res) => {
  try {
    const gigs = await Gig.find().sort({ createdAt: -1 });
    res.json(gigs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get a single gig by ID
// @route   GET /api/gig/:id
// @access  Public
exports.getGigById = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      return res.status(404).json({ msg: 'Gig not found' });
    }
    res.json(gig);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Verify a gig
// @route   PUT /api/gig/:id/verify
// @access  Admin
exports.verifyGig = async (req, res) => {
  try {
    const gig = await Gig.findByIdAndUpdate(
      req.params.id,
      { verified: true, rejected: false },
      { new: true }
    );

    if (!gig) {
      return res.status(404).json({ msg: 'Gig not found' });
    }

    const io = req.app.get('io');
    io.emit('gigVerified', gig);

    res.json({ success: true, gig });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// @desc    Reject a gig
// @route   PUT /api/gig/:id/reject
// @access  Admin
exports.rejectGig = async (req, res) => {
  try {
    const gig = await Gig.findByIdAndUpdate(
      req.params.id,
      { rejected: true, verified: false },
      { new: true }
    );

    if (!gig) {
      return res.status(404).json({ msg: 'Gig not found' });
    }

    const io = req.app.get('io');
    io.emit('gigRejected', gig);

    res.json({ success: true, gig });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// @desc    Get all gigs (Admin)
// @route   GET /api/gigs/admin
// @access  Admin
exports.getAllGigsAdmin = async (req, res) => {
  try {
    const gigs = await Gig.find().populate('employer', 'name email role');
    res.json(gigs);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// @desc    Apply to a gig
// @route   POST /api/gigs/:id/apply
// @access  Private (Students only)
exports.applyToGig = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      return res.status(404).json({ msg: 'Gig not found' });
    }

    gig.applications = gig.applications || [];

    const alreadyApplied = gig.applications.some(
      (app) => app.student.toString() === req.user.id
    );

    if (alreadyApplied) {
      return res.status(400).json({ msg: 'You have already applied to this gig.' });
    }

    const newApp = {
      student: req.user.id,
      message: req.body.message || '',
      appliedAt: new Date(),
      status: 'pending'
    };

    gig.applications.push(newApp);
    await gig.save();

    const io = req.app.get('io');
    io.emit('newApplication', {
      id: newApp._id || Date.now(),
      gigTitle: gig.title,
      applicantName: req.user.name || 'New Applicant',
      university: req.user.university || 'Unknown',
      message: newApp.message,
      appliedDate: newApp.appliedAt,
      status: newApp.status
    });

    // Emit updated stats and analytics so dashboard updates in real-time
    try {
      const stats = await calculateStats();
      io.emit('statsUpdated', stats);
    } catch (e) {
      console.error('❌ Failed to calculate/emit statsUpdated:', e.message || e);
    }

    try {
      const analytics = await calculateAnalytics();
      io.emit('analyticsUpdated', analytics);
    } catch (e) {
      console.error('❌ Failed to calculate/emit analyticsUpdated:', e.message || e);
    }

    res.json({ msg: 'Application submitted successfully!', application: newApp });
  } catch (err) {
    console.error('❌ Error applying to gig:', err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update status of an application (Hire, Shortlist, Decline)
// @route   PUT /api/gigs/update-status
// @access  Private (Employers only)
exports.updateApplicationStatus = async (req, res) => {
  const { gigTitle, studentId, status } = req.body;
  const employerId = req.user.id;

  try {
    const gig = await Gig.findOne({ title: gigTitle, employer: employerId });
    if (!gig) return res.status(404).json({ error: "Gig not found" });

    const appIndex = gig.applications.findIndex(app =>
      app.student.toString() === studentId
    );

    if (appIndex === -1) {
      return res.status(404).json({ error: "Application not found" });
    }

    gig.applications[appIndex].status = status;
    await gig.save();

    const io = req.app.get('io');
    if (io) {
      io.emit("application_updated", {
        gigTitle: gig.title,
        applicant: gig.applications[appIndex].student,
        status,
        appliedDate: gig.applications[appIndex].appliedAt,
        proposal: gig.applications[appIndex].message
      });
    }

    res.json({ success: true, status });
  } catch (err) {
    console.error("❌ Error updating application status:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
