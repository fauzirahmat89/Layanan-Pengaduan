const express = require('express');
const router = express.Router();
const aspirasiController = require('../controllers/aspirasiController');

// Route untuk menambahkan pengaduan baru
router.post('/aspirasi', aspirasiController.createAspirasi);
router.get('/aspirasi/:id_user', aspirasiController.getAspirasiByUserId);
router.get('/aspirasi', aspirasiController.getAllAspirasi);
router.put('/aspirasi/status', aspirasiController.updateStatus);

module.exports = router;