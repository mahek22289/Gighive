const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db.js');

// Cloud-agnostic media uploader setup
const { setUploader } = require('./services/mediaUploader');
const cloudinaryUploader = require('./services/storageService');
setUploader(cloudinaryUploader);

// Load env vars
dotenv.config();

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Parse JSON and urlencoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allowed origins
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5001'];

// Enable CORS
// Express CORS
app.use(cors({
  origin: "http://localhost:3000",   // ✅ match frontend
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

// Socket.IO CORS
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // ✅ same as above
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});


// ✅ Attach io to app
app.set('io', io);

// ✅ Validate socket handshake
io.use((socket, next) => {
  const { userId } = socket.handshake.auth;
  if (!userId) {
    console.warn("⚠️ No userId provided — using socket.id as fallback:", socket.id);
    socket.userId = socket.id;
  } else {
    socket.userId = userId;
  }
  socket.join(socket.userId); // join room
  next();
});


// Socket.IO events
io.on('connection', (socket) => {
  console.log(`✅ User connected: ${socket.id} (userId: ${socket.userId})`);

  socket.on('send_message', (data) => {
    console.log('📩 Message received:', data);
    io.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// API Routes
app.use('/api/gigs', require('./routes/gig.js'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/profile', require('./routes/profile.js'));
app.use('/api/user', require('./routes/user.js'));

// Start server
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));

// Connect to MongoDB
connectDB()
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection failed:', err));
