const express = require('express');
const router = express.Router();
const { login, register, getUserId  } = require('../controllers/authController');


router.post('/register', register);
router.post('/login', login);
router.post('/getUserId', getUserId);

module.exports = router;