const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(express.json()); // Middleware untuk parse JSON
app.use(cors());
// Import routes
const authRoutes = require('./routes/authRoutes');
const pengaduanRoutes = require('./routes/pengaduanRoutes');

// Rute middleware
app.use('/api/auth', authRoutes);
app.use('/api', pengaduanRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});