import React from 'react';

function StatusAspirasiUser({ userId }) {
  // Data dummy untuk status aspirasi khusus user yang login
  const aspirasiData = [
    {
      id: 1,
      id_user: 101,
      id_aspirasi: 301,
      status: 'Diterima',
      judul: 'Perbaikan Fasilitas Umum',
      tanggal: '2023-10-22',
      asal: 'Komunitas Taman',
      instansi: 'Pemerintah Kota',
      kategori: 'Ekonomi',
      isi: 'Usulan untuk penambahan fasilitas umum di area Taman Kota untuk meningkatkan kenyamanan dan keamanan pengunjung.'
    },
    {
      id: 2,
      id_user: 102,
      id_aspirasi: 302,
      status: 'Ditinjau',
      judul: 'Edukasi Recycling',
      tanggal: '2023-10-23',
      asal: 'Sekolah Dasar Pakuwon',
      instansi: 'Dinas Pendidikan',
      kategori: 'Pendidikan',
      isi: 'Mengusulkan program edukasi recycling bagi siswa sekolah dasar untuk meningkatkan kesadaran lingkungan sejak dini.'
    }
  ];

  const filteredData = aspirasiData.filter(a => a.id_user === userId);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-xl font-bold text-gray-700 mb-6">Status Aspirasi Anda</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                ID Aspirasi
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Judul
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Asal
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Instansi
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Kategori
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Isi Aspirasi
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id_aspirasi}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.id_aspirasi}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.judul}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.tanggal}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.asal}
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
                  <span className={`py-1 px-3 rounded-full text-xs font-semibold ${item.status === 'Diterima' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
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

export default StatusAspirasiUser;
