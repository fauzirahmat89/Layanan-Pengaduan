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

module.exports = {
    addPengaduan
};