
const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/user.js');
const { getCurrentProfile, createOrUpdateProfile } = require('../controllers/profile.js');

// Defines the routes
router.get('/me', auth, getCurrentProfile);
router.post('/', auth, createOrUpdateProfile);
// You can add router.get('/') to get all profiles later

module.exports = router;
