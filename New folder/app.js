const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(express.json()); // Middleware untuk parse JSON
app.use(cors());
// Import routes
const authRoutes = require('./routes/authRoutes');
const pengaduanRoutes = require('./routes/pengaduanRoutes');
const aspirasiRoutes = require('./routes/aspirasiRoutes')
const adminRoutes = require('./routes/adminRoutes');

// Rute middleware
app.use('/api/auth', authRoutes);
app.use('/api', pengaduanRoutes);
app.use('/api', aspirasiRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});