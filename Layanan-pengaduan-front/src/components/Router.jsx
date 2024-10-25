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

  // Simulasi autentikasi, gunakan localStorage atau cookie untuk menyimpan status login
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const userId = 101; // Simulasi userId, bisa diambil dari state atau context

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Lindungi halaman home dengan ProtectedRoute */}
      <Route
        path=""
        element={<ProtectedRoute isAuthenticated={isAuthenticated} element={Home} />}
      />
      
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />

      {/* Protected routes for authenticated users */}
      <Route
        path="StatusPengaduanUser"
        element={<ProtectedRoute isAuthenticated={isAuthenticated} element={StatusPengaduanUser} userId={userId} />}
      />
      <Route
        path="StatusAspirasiUser"
        element={<ProtectedRoute isAuthenticated={isAuthenticated} element={StatusAspirasiUser} userId={userId} />}
      />
      <Route
        path="AdminPengaduan"
        element={<ProtectedRoute isAuthenticated={isAuthenticated} element={AdminPengaduan} />}
      />
      <Route
        path="AdminAspirasi"
        element={<ProtectedRoute isAuthenticated={isAuthenticated} element={AdminAspirasi} />}
      />
    </Routes>
  );
};

export default Router;
