import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReportForm() {
  const [reportType, setReportType] = useState('pengaduan'); // Default adalah pengaduan
  const [judul_laporan, setJudul_laporan] = useState(''); // Untuk pengaduan
  const [judul_aspirasi, setJudul_aspirasi] = useState(''); // Untuk aspirasi
  const [isi, setIsi] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [lokasi, setLokasi] = useState(''); // Untuk pengaduan
  const [asal, setAsal] = useState(''); // Untuk aspirasi
  const [instansi, setInstansi] = useState('');
  const [kategori, setKategori] = useState('Perhubungan');

  const handleTypeChange = (event) => {
    setReportType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Data user untuk cek userId
    const nama = localStorage.getItem('userNama');
    const nomor = localStorage.getItem('userNomor');

    if (!nama || !nomor) {
      toast.error('Nama atau Nomor tidak ditemukan di localStorage.');
      return;
    }

    try {
      // Kirim permintaan POST untuk mendapatkan userId
      const userIdResponse = await fetch('http://localhost:3000/api/auth/getUserId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, nomor }),
      });

      const userIdData = await userIdResponse.json();
      if (!userIdResponse.ok) {
        throw new Error(userIdData.message || 'Gagal mendapatkan User ID');
      }

      const id_user = userIdData.userId;

      let reportData;
      let apiUrl;

      if (reportType === 'pengaduan') {
        // Data untuk pengaduan
        reportData = {
          id_user,
          judul_laporan,
          isi,
          tanggal,
          lokasi,
          instansi,
          kategori,
        };
        apiUrl = 'http://localhost:3000/api/pengaduan'; // API untuk pengaduan
      } else if (reportType === 'aspirasi') {
        // Data untuk aspirasi
        reportData = {
          id_user,
          judul_aspirasi,
          isi,
          tanggal,
          asal,
          instansi,
          kategori,
        };
        apiUrl = 'http://localhost:3000/api/aspirasi'; // API untuk aspirasi
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reportData),
      });

      const responseData = await response.json();
      if (response.ok) {
        toast.success(reportType === 'pengaduan' ? 'Pengaduan berhasil dikirim!' : 'Aspirasi berhasil dikirim!');
      } else {
        throw new Error(responseData.message || 'Gagal mengirim laporan');
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-xl">
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <h1 className="text-xl font-bold mb-4">{reportType === 'pengaduan' ? 'Form Pengaduan' : 'Form Aspirasi'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Jenis Laporan:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={reportType}
            onChange={handleTypeChange}>
            <option value="pengaduan">Pengaduan</option>
            <option value="aspirasi">Aspirasi</option>
          </select>
        </div>

        {reportType === 'pengaduan' ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Judul Pengaduan:
              </label>
              <input
                type="text"
                value={judul_laporan}
                onChange={(e) => setJudul_laporan(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Lokasi:
              </label>
              <input
                type="text"
                value={lokasi}
                onChange={(e) => setLokasi(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Judul Aspirasi:
              </label>
              <input
                type="text"
                value={judul_aspirasi}
                onChange={(e) => setJudul_aspirasi(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Asal:
              </label>
              <input
                type="text"
                value={asal}
                onChange={(e) => setAsal(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Isi:
          </label>
          <textarea
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            className="h-48 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tanggal:
          </label>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Instansi:
          </label>
          <input
            type="text"
            value={instansi}
            onChange={(e) => setInstansi(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Kategori:
          </label>
          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
            <option value="Perhubungan">Perhubungan</option>
            <option value="Agama">Agama</option>
            <option value="Kesehatan">Kesehatan</option>
            <option value="Ekonomi">Ekonomi</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReportForm;
