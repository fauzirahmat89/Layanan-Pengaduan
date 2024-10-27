const { addPengaduan, getPengaduanByUserId, getAllPengaduan, updateStatusPengaduan} = require('../models/pengaduanModel');

// Controller untuk menambahkan pengaduan baru
exports.createPengaduan = (req, res) => {
    const { id_user, judul_laporan, isi, tanggal, lokasi, instansi, kategori } = req.body;

    // Validasi setiap field satu per satu dan berikan pesan yang jelas jika kosong
    if (!id_user) {
        return res.status(400).json({ error: 'Field id_user harus diisi.' });
    }
    if (!judul_laporan) {
        return res.status(400).json({ error: 'Field judul_laporan harus diisi.' });
    }
    if (!isi) {
        return res.status(400).json({ error: 'Field isi harus diisi.' });
    }
    if (!tanggal) {
        return res.status(400).json({ error: 'Field tanggal harus diisi.' });
    }
    if (!lokasi) {
        return res.status(400).json({ error: 'Field lokasi harus diisi.' });
    }
    if (!instansi) {
        return res.status(400).json({ error: 'Field instansi harus diisi.' });
    }
    if (!kategori) {
        return res.status(400).json({ error: 'Field kategori harus diisi.' });
    }

    // Memanggil fungsi untuk menambahkan pengaduan
    addPengaduan(id_user, judul_laporan, isi, tanggal, lokasi, instansi, kategori, (error) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(201).json({ message: 'Pengaduan berhasil ditambahkan.' });
    });
};

// Controller untuk mendapatkan pengaduan berdasarkan id_user
exports.getPengaduanByUserId = (req, res) => {
    const { id_user } = req.params;

    if (!id_user) {
        return res.status(400).send('ID pengaduan harus disertakan.');
    }

    // Memanggil fungsi untuk mendapatkan aspirasi berdasarkan id_user
    getPengaduanByUserId(id_user, (error, results) => {
        if (error) {
            return res.status(500).send('Gagal mengambil data pengaduan.');
        }
        if (results.length === 0) {
            return res.status(404).send('Tidak ada pengaduan yang ditemukan untuk pengguna ini.');
        }

        res.status(200).json(results); // Kembalikan data pengaduan dalam bentuk JSON
    });
};

// Controller untuk admin melihat semua pengaduan
exports.getAllPengaduan = (req, res) => {
    // Panggil fungsi untuk mendapatkan semua pengaduan
    getAllPengaduan((error, results) => {
        if (error) {
            return res.status(500).send('Gagal mengambil data pengaduan.');
        }
        res.status(200).json(results);  // Kembalikan data pengaduan dalam bentuk JSON
    });
};

// Controller untuk memperbarui status pengaduan menggunakan ID dari body
exports.updateStatus = (req, res) => {
    const { id, status } = req.body;  // Mengambil ID dan status dari body request

    // Validasi sederhana
    if (!id || !status) {
        return res.status(400).send('ID dan status harus disertakan.');
    }

    // Memanggil model untuk memperbarui status pengaduan
    updateStatusPengaduan(id, status, (error, results) => {
        if (error) {
            return res.status(500).send('Kesalahan server saat memperbarui status.');
        }
        if (!results) {
            return res.status(404).send('Pengaduan tidak ditemukan.');
        }

        res.status(200).send('Status pengaduan berhasil diperbarui.');
    });
};