const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.post('/send', async (req, res) => {
  const { senderId, receiverId, content } = req.body;

  if (!senderId || !receiverId || !content?.trim()) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const savedMessage = await Message.create({ senderId, receiverId, content });
    res.status(201).json(savedMessage);
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ error: 'Failed to save message' });
  }
});


module.exports = router;
