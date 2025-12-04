const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { auth, verifyEmployer } = require('../middleware/user'); // ✅ import middleware

// Protect all dashboard routes with auth
router.get('/stats', auth, verifyEmployer, dashboardController.getStats);
router.get('/gigs/active', auth, verifyEmployer, dashboardController.getActiveGigs);
router.get('/applications/recent', auth, verifyEmployer, dashboardController.getRecentApplications);
router.get('/analytics', auth, verifyEmployer, dashboardController.getAnalytics);

module.exports = router;
