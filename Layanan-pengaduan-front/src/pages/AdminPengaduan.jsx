import React, { useState } from 'react';

function AdminPengaduan() {
  const [pengaduan, setPengaduan] = useState([
    {
      id: 1,
      id_user: 101,
      id_pengaduan: 201,
      status: 'Berhasil',
      judul: 'Pengaduan Jalan Rusak',
      tanggal: '2023-10-20',
      lokasi: 'Jalan Merdeka',
      instansi: 'Dinas Perhubungan',
      kategori: 'Perhubungan',
      isi: 'Jalan utama menuju pusat kota sangat rusak dan banyak lubang, sangat membahayakan bagi pengendara terutama di malam hari.'
    },
    {
      id: 2,
      id_user: 102,
      id_pengaduan: 202,
      status: 'Sedang Diproses',
      judul: 'Pelayanan Kesehatan',
      tanggal: '2023-10-21',
      lokasi: 'Klinik Sehat',
      instansi: 'Dinas Kesehatan',
      kategori: 'Kesehatan',
      isi: 'Waktu tunggu pelayanan kesehatan di Klinik Sehat sangat lama, memerlukan efisiensi agar tidak membuang waktu pasien.'
    }
  ]);

  // Fungsi untuk mengupdate status pengaduan
  const handleUpdate = (id_pengaduan, newStatus) => {
    const updatedPengaduan = pengaduan.map(item => {
      if (item.id_pengaduan === id_pengaduan) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setPengaduan(updatedPengaduan);
    // Tempat untuk menambahkan logic pengiriman data ke server
    console.log('Data updated:', { id_pengaduan, newStatus });
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-xl font-bold text-gray-700 mb-6">Daftar Pengaduan</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                ID Pengaduan
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Judul
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Lokasi
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Instansi
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Kategori
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Isi Pengaduan
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {pengaduan.map((item) => (
              <tr key={item.id_pengaduan}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.id_pengaduan}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.judul}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.tanggal}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.lokasi}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.instansi}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.kategori}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.isi}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-48">
                  <select
                    className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    value={item.status}
                    onChange={e => handleUpdate(item.id_pengaduan, e.target.value)}
                  >
                    <option value="Berhasil">Berhasil</option>
                    <option value="Sedang Diproses">Sedang Diproses</option>
                    <option value="Gagal">Gagal</option>
                  </select>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    onClick={() => handleUpdate(item.id_pengaduan, item.status)}
                    className="text-white bg-blue-500 hover:bg-blue-700 font-medium py-1 px-3 rounded"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPengaduan;
