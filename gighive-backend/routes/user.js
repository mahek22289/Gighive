const express = require('express');
const router = express.Router();
const { register, login , verifyOtp} = require('../controllers/user');

router.post('/register', register);
router.post('/login', login); // We will modify this for OTP later
router.post('/verify-otp', verifyOtp); 
module.exports = router;