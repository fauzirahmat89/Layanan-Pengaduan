const { pool } = require('../database');

// Fungsi untuk mendapatkan admin berdasarkan username
const getAdminByUsername = (username, callback) => {
    pool.query(
        'SELECT * FROM admin WHERE username = ?',
        [username],
        function(error, results) {
            if (error) {
                return callback(error);
            }
            return callback(null, results[0]);  // Mengembalikan admin jika ditemukan
        }
    );
};

module.exports = {
    getAdminByUsername
};

