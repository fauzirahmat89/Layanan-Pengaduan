const { pool } = require('../database');

// Fungsi untuk menambahkan pengaduan baru
const addAspirasi = (id_user, judul_aspirasi, isi, tanggal, asal, instansi, kategori, callback) => {
    pool.query(
        'INSERT INTO aspirasi (id_user, judul_aspirasi, isi, tanggal, asal, instansi, kategori) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [id_user, judul_aspirasi, isi, tanggal, asal, instansi, kategori],
        function(error, results) {
            if (error) {
                return callback(error);
            }
            return callback(null, results.insertId);
        }
    );
};

// Fungsi untuk mendapatkan aspirasi berdasarkan id_user
const getAspirasiByUserId = (id_user, callback) => {
    pool.query(
        'SELECT * FROM aspirasi WHERE id_user = ?',
        [id_user],
        function(error, results) {
            if (error) {
                return callback(error);
            }
            return callback(null, results); // Kembalikan semua aspirasi yang ditemukan
        }
    );
};

// Fungsi untuk mengambil semua aspirasi
const getAllAspirasi = (callback) => {
    pool.query(
        'SELECT * FROM aspirasi',
        function(error, results) {
            if (error) {
                return callback(error);
            }
            return callback(null, results);  // Kembalikan semua aspirasi yang ditemukan
        }
    );
};

// Fungsi untuk memperbarui status aspirasi berdasarkan ID aspirasi
const updateStatusAspirasi = (id, status, callback) => {
    pool.query(
        'UPDATE aspirasi SET status = ? WHERE id = ?',
        [status, id],
        function(error, results) {
            if (error) {
                return callback(error);
            }
            if (results.affectedRows === 0) {
                return callback(null, null);  // Tidak ada aspirasi yang ditemukan
            }
            return callback(null, results);  // Mengembalikan hasil pembaruan
        }
    );
};

module.exports = {
    addAspirasi,
    getAspirasiByUserId,
    getAllAspirasi,
    updateStatusAspirasi
};