import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import StatusPengaduanUser from '../pages/StatusPengaduanUser';
import StatusAspirasiUser from '../pages/StatusAspirasiUser';
import AdminPengaduan from '../pages/AdminPengaduan';
import AdminAspirasi from '../pages/AdminAspirasi';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // State untuk mengecek apakah user adalah admin
  const [userId, setUserId] = useState(null); // State untuk menyimpan userId
  const [isLoading, setIsLoading] = useState(true); // State untuk loading indicator

  // Simulasi autentikasi, gunakan localStorage atau cookie untuk menyimpan status login
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const adminToken = localStorage.getItem('adminToken'); // Cek apakah ada adminToken
    if (token) {
      setIsAuthenticated(true);
    } else if (adminToken) {
      setIsAuthenticated(true);
      setIsAdmin(true); // Jika ada adminToken, set isAdmin menjadi true
    } else {
      setIsAuthenticated(false);
      setIsAdmin(false);
    }

    // Ambil nama dan nomor dari localStorage hanya jika user biasa
    if (token) {
      const nama = localStorage.getItem('userNama');
      const nomor = localStorage.getItem('userNomor');

      if (nama && nomor) {
        // Kirim permintaan POST untuk mendapatkan userId
        const fetchUserId = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/auth/getUserId', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ nama, nomor }),
            });

            const data = await response.json();
            if (!response.ok) {
              throw new Error(data.message || 'Gagal mendapatkan User ID');
            }

            setUserId(data.userId); // Simpan userId di state
          } catch (error) {
            console.error('Error fetching User ID:', error);
          } finally {
            setIsLoading(false); // Set loading selesai
          }
        };

        fetchUserId();
      } else {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  // Jika masih loading, tampilkan indikator loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Lindungi halaman home dengan ProtectedRoute */}
      <Route
        path="/"
        element={<ProtectedRoute isAuthenticated={isAuthenticated} element={Home} />}
      />

      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />

      {/* Protected routes for authenticated users */}
      {userId && (
        <>
          <Route
            path="StatusPengaduanUser"
            element={<ProtectedRoute isAuthenticated={isAuthenticated} element={() => <StatusPengaduanUser userId={userId} />} />}
          />
          <Route
            path="StatusAspirasiUser"
            element={<ProtectedRoute isAuthenticated={isAuthenticated} element={() => <StatusAspirasiUser userId={userId} />} />}
          />
        </>
      )}

      {/* Protected routes for admin */}
      {isAdmin && (
        <>
          <Route
            path="AdminPengaduan"
            element={<ProtectedRoute isAuthenticated={isAuthenticated} element={AdminPengaduan} />}
          />
          <Route
            path="AdminAspirasi"
            element={<ProtectedRoute isAuthenticated={isAuthenticated} element={AdminAspirasi} />}
          />
        </>
      )}
    </Routes>
  );
};

export default Router;
