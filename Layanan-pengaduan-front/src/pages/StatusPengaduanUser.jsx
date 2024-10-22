import React from 'react';

function StatusPengaduanUser({ userId }) {
  const pengaduanData = [
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
  ];

  const filteredData = pengaduanData.filter(p => p.id_user === userId);
  console.log('Filtered Data:', filteredData); // Log untuk debugging

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-xl font-bold text-gray-700 mb-6">Status Pengaduan Anda</h1>
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
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
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
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className={`py-1 px-3 rounded-full text-xs font-semibold ${item.status === 'Berhasil' ? 'bg-green-100 text-green-800' : item.status === 'Sedang Diproses' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StatusPengaduanUser;
