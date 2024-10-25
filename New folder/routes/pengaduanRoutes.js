const express = require('express');
const router = express.Router();
const pengaduanController = require('../controllers/pengaduanController');

// Route untuk menambahkan pengaduan baru
router.post('/pengaduan', pengaduanController.createPengaduan);

module.exports = router;