import React, { useState, useEffect } from 'react';

function StatusAspirasiUser({ userId }) {
  const [aspirasiData, setAspirasiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi untuk mengambil data aspirasi dari API
    const fetchAspirasiData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/aspirasi/${userId}`);
        
        if (!response.ok) {
          throw new Error('Gagal mengambil data aspirasi');
        }

        const data = await response.json();
        setAspirasiData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAspirasiData();
  }, [userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (aspirasiData.length === 0) {
    return <div>Tidak ada data aspirasi.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 ">
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
            {aspirasiData.map((item) => (
              <tr key={item.id_aspirasi}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.id}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {item.judul_aspirasi}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {Date(item.tanggal)}
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

