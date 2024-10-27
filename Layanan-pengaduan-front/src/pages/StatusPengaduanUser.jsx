import React, { useState, useEffect } from 'react';

function StatusPengaduanUser({ userId }) {
  const [pengaduanData, setPengaduanData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi untuk mengambil data pengaduan dari API
    const fetchPengaduanData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/pengaduan/${userId}`);
        
        if (!response.ok) {
          throw new Error('Gagal mengambil data pengaduan');
        }

        const data = await response.json();
        setPengaduanData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPengaduanData();
  }, [userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (pengaduanData.length === 0) {
    return <div>Tidak ada data pengaduan.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto mt-10">
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
            {pengaduanData.map((item) => (
              <tr key={item.id_pengaduan}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.id}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.judul_laporan}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {Date(item.tanggal)}
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
