const express = require('express');
const router = express.Router();
const pengaduanController = require('../controllers/pengaduanController');

// Route untuk menambahkan pengaduan baru
router.post('/pengaduan', pengaduanController.createPengaduan);
router.get('/pengaduan/:id_user', pengaduanController.getPengaduanByUserId);
router.get('/pengaduan', pengaduanController.getAllPengaduan);
router.put('/pengaduan/status', pengaduanController.updateStatus);

module.exports = router;