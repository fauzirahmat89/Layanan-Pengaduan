const { pool } = require('../database');
const bcrypt = require('bcryptjs');

const findUserByNamaAndNomor = (nama, nomor, callback) => {
    pool.query(
        'SELECT * FROM user WHERE nama = ? AND nomor = ?',
        [nama, nomor],
        function(error, results) {
            if (error) {
                return callback(error, null);
            }
            if (results.length > 0) {
                return callback(null, results[0]);
            } else {
                return callback(null, null);
            }
        }
    );
};

const addUser = (nama, nomor, callback) => {
    pool.query(
        'INSERT INTO user (nama, nomor) VALUES (?, ?)',
        [nama, nomor],  // Simpan nomor secara langsung
        function(error, results) {
            if (error) {
                return callback(error);
            }
            return callback(null, results.insertId);
        }
    );
};

// Fungsi untuk mencari ID pengguna berdasarkan nama dan nomor
const getUserIdByNamaAndNomor = (nama, nomor, callback) => {
    pool.query(
        'SELECT id FROM user WHERE nama = ? AND nomor = ?',
        [nama, nomor],
        function(error, results) {
            if (error) {
                return callback(error, null);
            }
            if (results.length > 0) {
                return callback(null, results[0].id);  // Mengembalikan ID pengguna
            } else {
                return callback(null, null);  // Pengguna tidak ditemukan
            }
        }
    );
};

module.exports = {
    findUserByNamaAndNomor,
    addUser,
    getUserIdByNamaAndNomor
};