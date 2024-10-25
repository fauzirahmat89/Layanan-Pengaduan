const { addPengaduan } = require('../models/pengaduanModel');

// Controller untuk menambahkan pengaduan baru
exports.createPengaduan = (req, res) => {
    const { id_user, judul_laporan, isi, tanggal, lokasi, instansi, kategori } = req.body;

    // Validasi sederhana
    if (!id_user || !judul_laporan || !isi || !tanggal || !lokasi || !instansi || !kategori) {
        return res.status(400).send('Semua field harus diisi.');
    }

    // Memanggil fungsi untuk menambahkan pengaduan
    addPengaduan(id_user, judul_laporan, isi, tanggal, lokasi, instansi, kategori, (error, id) => {
        if (error) {
            return res.status(500).send('Gagal menyimpan pengaduan.');
        }
        res.status(201).json({ message: 'Pengaduan berhasil ditambahkan.', id });
    });
};