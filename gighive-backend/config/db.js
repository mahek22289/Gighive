const mongoose = require('mongoose');
const User = require('../models/user'); // Adjust the path if your User model is located elsewhere

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const result = await User.updateMany({}, { $set: { otpVerified: true } });
  console.log(`Updated ${result.modifiedCount} users`);

  console.log('MongoDB Connected...');
};

module.exports = connectDB;