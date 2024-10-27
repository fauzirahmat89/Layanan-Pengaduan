const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { addUser, findUserByNamaAndNomor, getUserIdByNamaAndNomor  } = require('../models/userModel');

exports.login = async (req, res) => {
    const { nama, nomor } = req.body;

    findUserByNamaAndNomor(nama, nomor, (error, user) => {
        if (error) {
            return res.status(500).send('Kesalahan server saat mencari pengguna');
        }
        if (!user) {
            return res.status(401).send('Pengguna tidak ditemukan atau nomor salah');
        }

        // Membuat token jika login sukses
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login berhasil', token });
    });
};

exports.register = async (req, res) => {
    const { nama, nomor } = req.body;

    findUserByNamaAndNomor(nama, nomor, async (error, user) => {
        if (error) {
            console.error('Database error:', error);
            return res.status(500).send('Server error');
        }
        if (user) {
            return res.status(409).send('User already exists');
        }

        addUser(nama, nomor, (error, userId) => {
            if (error) {
                console.error('Error adding user:', error);
                return res.status(500).send('Failed to register user');
            }
            res.status(201).send({ userId, message: 'User registered successfully' });
        });
    });
};

// Fungsi untuk menangani permintaan POST ID berdasarkan nama dan nomor
exports.getUserId = async (req, res) => {
    const { nama, nomor } = req.body; // Ambil nama dan nomor dari body JSON

    // Periksa apakah nama dan nomor sudah disertakan
    if (!nama || !nomor) {
        return res.status(400).send('Nama dan nomor harus disertakan');
    }

    // Cari ID pengguna berdasarkan nama dan nomor
    getUserIdByNamaAndNomor(nama, nomor, (error, userId) => {
        if (error) {
            return res.status(500).send('Kesalahan server');
        }
        if (!userId) {
            return res.status(404).send('Pengguna tidak ditemukan');
        }

        res.json({ userId });
    });
};