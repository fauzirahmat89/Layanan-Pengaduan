const { addAspirasi,getAspirasiByUserId, getAllAspirasi, updateStatusAspirasi } = require('../models/aspirasiModel');

// Controller untuk menambahkan pengaduan baru
exports.createAspirasi = (req, res) => {
    const { id_user, judul_aspirasi, isi, tanggal, asal, instansi, kategori } = req.body;

    // Validasi setiap field satu per satu dan berikan pesan yang jelas jika kosong
    if (!id_user) {
        return res.status(400).json({ error: 'Field id_user harus diisi.' });
    }
    if (!judul_aspirasi) {
        return res.status(400).json({ error: 'Field judul_aspirasi harus diisi.' });
    }
    if (!isi) {
        return res.status(400).json({ error: 'Field isi harus diisi.' });
    }
    if (!tanggal) {
        return res.status(400).json({ error: 'Field tanggal harus diisi.' });
    }
    if (!asal) {
        return res.status(400).json({ error: 'Field asal harus diisi.' });
    }
    if (!instansi) {
        return res.status(400).json({ error: 'Field instansi harus diisi.' });
    }
    if (!kategori) {
        return res.status(400).json({ error: 'Field kategori harus diisi.' });
    }

    // Memanggil fungsi untuk menambahkan pengaduan
    addAspirasi(id_user, judul_aspirasi, isi, tanggal, asal, instansi, kategori, (error) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(201).json({ message: 'Aspirasi berhasil ditambahkan.' });
    });
};

// Controller untuk mendapatkan aspirasi berdasarkan id_user
exports.getAspirasiByUserId = (req, res) => {
    const { id_user } = req.params;

    if (!id_user) {
        return res.status(400).send('ID pengguna harus disertakan.');
    }

    // Memanggil fungsi untuk mendapatkan aspirasi berdasarkan id_user
    getAspirasiByUserId(id_user, (error, results) => {
        if (error) {
            return res.status(500).send('Gagal mengambil data aspirasi.');
        }
        if (results.length === 0) {
            return res.status(404).send('Tidak ada aspirasi yang ditemukan untuk pengguna ini.');
        }

        res.status(200).json(results); // Kembalikan data aspirasi dalam bentuk JSON
    });
};

// Controller untuk admin melihat semua aspirasi
exports.getAllAspirasi = (req, res) => {
    // Memanggil fungsi model untuk mendapatkan semua aspirasi
    getAllAspirasi((error, results) => {
        if (error) {
            return res.status(500).send('Gagal mengambil data aspirasi.');
        }
        res.status(200).json(results);  // Kembalikan data aspirasi dalam bentuk JSON
    });
};

// Controller untuk memperbarui status aspirasi menggunakan ID dari body
exports.updateStatus = (req, res) => {
    const { id, status } = req.body;  // Mengambil ID dan status dari body request

    // Validasi sederhana
    if (!id || !status) {
        return res.status(400).send('ID dan status harus disertakan.');
    }

    // Memanggil model untuk memperbarui status aspirasi
    updateStatusAspirasi(id, status, (error, results) => {
        if (error) {
            return res.status(500).send('Kesalahan server saat memperbarui status.');
        }
        if (!results) {
            return res.status(404).send('Aspirasi tidak ditemukan.');
        }

        res.status(200).send('Status aspirasi berhasil diperbarui.');
    });
};