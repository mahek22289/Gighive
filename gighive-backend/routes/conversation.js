const express = require('express');
const router = express.Router();
const Message = require('../models/message'); // if needed
const User = require('../models/user'); // if needed

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: 'Missing userId' });
    }

    // Example: fetch messages where user is either sender or receiver
    const messages = await Message.find({
      $or: [{ senderId: userId }, { receiverId: userId }]
    }).sort({ timestamp: 1 });

    // Example: fetch participant info (adjust as needed)
    const participant = await User.findById(userId).select('name avatar university online');

    if (!participant) {
      return res.status(404).json({ error: 'Participant not found' });
    }

    res.json({ participant, messages });
  } catch (err) {
    console.error('❌ Error in /api/conversations/:userId:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
