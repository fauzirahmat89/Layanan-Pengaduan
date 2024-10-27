const jwt = require('jsonwebtoken');
const { getAdminByUsername } = require('../models/adminModel');

// Controller untuk login admin tanpa hashing password
exports.loginAdmin = (req, res) => {
    const { username, password } = req.body;

    // Validasi input
    if (!username || !password) {
        return res.status(400).send('Username dan password harus diisi.');
    }

    // Mencari admin berdasarkan username
    getAdminByUsername(username, (error, admin) => {
        if (error) {
            return res.status(500).send('Kesalahan server.');
        }
        if (!admin) {
            return res.status(401).send('Username atau password salah.');
        }

        // Membandingkan password plain-text
        if (password !== admin.password) {
            return res.status(401).send('Username atau password salah.');
        }

        // Jika login berhasil, buat token JWT
        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        // Mengembalikan token ke client
        res.status(200).json({ message: 'Login berhasil', token });
    });
};

