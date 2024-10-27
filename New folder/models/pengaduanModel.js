const { pool } = require('../database');

// Fungsi untuk menambahkan pengaduan baru
const addPengaduan = (id_user, judul_laporan, isi, tanggal, lokasi, instansi, kategori, callback) => {
    pool.query(
        'INSERT INTO pengaduan (id_user, judul_laporan, isi, tanggal, lokasi, instansi, kategori) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [id_user, judul_laporan, isi, tanggal, lokasi, instansi, kategori],
        function(error, results) {
            if (error) {
                return callback(error);
            }
            return callback(null, results.insertId);
        }
    );
};

// Fungsi untuk mendapatkan pengaduan berdasarkan id_user
const getPengaduanByUserId = (id_user, callback) => {
    pool.query(
        'SELECT * FROM pengaduan WHERE id_user = ?',
        [id_user],
        function(error, results) {
            if (error) {
                return callback(error);
            }
            return callback(null, results); // Kembalikan semua pengaduan yang ditemukan
        }
    );
};

// Fungsi untuk mengambil semua pengaduan
const getAllPengaduan = (callback) => {
    pool.query(
        'SELECT * FROM pengaduan',
        function(error, results) {
            if (error) {
                return callback(error);
            }
            return callback(null, results);  // Mengembalikan semua pengaduan yang ditemukan
        }
    );
};

// Fungsi untuk memperbarui status pengaduan berdasarkan ID pengaduan
const updateStatusPengaduan = (id, status, callback) => {
    pool.query(
        'UPDATE pengaduan SET status = ? WHERE id = ?',
        [status, id],
        function(error, results) {
            if (error) {
                return callback(error);
            }
            if (results.affectedRows === 0) {
                return callback(null, null);  // Tidak ada pengaduan yang ditemukan
            }
            return callback(null, results);  // Mengembalikan hasil pembaruan
        }
    );
};

module.exports = {
    addPengaduan,
    getPengaduanByUserId,
    getAllPengaduan,
    updateStatusPengaduan
};