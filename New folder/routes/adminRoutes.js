const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route untuk login admin
router.post('/login', adminController.loginAdmin);

module.exports = router;
