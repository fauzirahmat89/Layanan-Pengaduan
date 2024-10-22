import React, { useState } from 'react';

function AdminAspirasi() {
  const [aspirasi, setAspirasi] = useState([
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
  ]);

  const handleStatusChange = (id_aspirasi, newStatus) => {
    const updatedAspirasi = aspirasi.map(item => {
      if (item.id_aspirasi === id_aspirasi) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setAspirasi(updatedAspirasi);
    // Implementasi API untuk update ke server dapat ditambahkan di sini
    console.log('Data updated:', { id_aspirasi, newStatus });
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-xl font-bold text-gray-700 mb-6">Daftar Aspirasi</h1>
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
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {aspirasi.map((item) => (
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
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-32">
                  <select
                    className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    value={item.status}
                    onChange={e => handleStatusChange(item.id_aspirasi, e.target.value)}
                  >
                    <option value="Diterima">Diterima</option>
                    <option value="Ditinjau">Ditinjau</option>
                    <option value="Ditolak">Ditolak</option>
                  </select>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    onClick={() => handleStatusChange(item.id_aspirasi, item.status)}
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

export default AdminAspirasi;
