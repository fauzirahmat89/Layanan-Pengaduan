import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function AdminPengaduan() {
  const [pengaduan, setPengaduan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState({}); // Menyimpan status yang dipilih

  // Fetch data pengaduan dari API
  useEffect(() => {
    const fetchPengaduan = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/pengaduan');
        if (!response.ok) {
          throw new Error('Gagal mengambil data pengaduan');
        }
        const data = await response.json();
        setPengaduan(data); // Set pengaduan dari API ke state
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPengaduan();
  }, []);

  // Fungsi untuk mengupdate status pengaduan
  const handleUpdate = async (id) => {
    const newStatus = selectedStatus[id]; // Mengambil status yang dipilih dari state
    if (!newStatus) {
      toast.error('Silakan pilih status baru sebelum update.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/pengaduan/status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id, status: newStatus }),
      });

      const result = await response.json();

      if (response.ok) {
        // Update pengaduan state setelah berhasil di-update di server
        const updatedPengaduan = pengaduan.map(item => {
          if (item.id === id) {
            return { ...item, status: newStatus };
          }
          return item;
        });
        setPengaduan(updatedPengaduan); // Perbarui state lokal
        toast.success('Status berhasil diupdate!');
      } else {
        throw new Error(result.message || 'Gagal memperbarui status');
      }
    } catch (error) {
      console.error('Update error:', error);
      toast.error('Gagal memperbarui status!');
    }
  };

  // Fungsi untuk menangani perubahan di dropdown
  const handleStatusChange = (id, newStatus) => {
    setSelectedStatus(prevStatus => ({
      ...prevStatus,
      [id]: newStatus, // Simpan status yang baru dipilih untuk pengaduan dengan ID tertentu
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
              <tr key={item.id}>
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
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-48">
                  <select
                    className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    value={selectedStatus[item.id] || item.status} // Jika tidak ada status yang dipilih, gunakan status dari database
                    onChange={e => handleStatusChange(item.id, e.target.value)} // Mengubah status di state lokal
                  >
                    <option value="Berhasil">Berhasil</option>
                    <option value="Belum Diproses">Belum Diproses</option>
                    <option value="Sedang Diproses">Sedang Diproses</option>
                    <option value="Gagal">Gagal</option>
                  </select>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    onClick={() => handleUpdate(item.id)} // Mengirim status yang dipilih ketika tombol ditekan
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




