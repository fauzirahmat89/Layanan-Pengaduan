import React, { useEffect, useState } from 'react';
import Case from "./Case";
import NavLink from "./NavLink";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // State untuk memeriksa apakah pengguna adalah admin
  const navigate = useNavigate(); // Gunakan useNavigate untuk redirect

  // Periksa token dan status admin untuk menentukan apakah pengguna sudah login
  useEffect(() => {
    const token = localStorage.getItem('authToken') || localStorage.getItem('adminToken'); // Periksa token user atau admin
    const adminStatus = localStorage.getItem('adminToken'); // Periksa apakah admin login
    
    if (token) {
      setIsAuthenticated(true);
      setIsAdmin(!!adminStatus); // Jika ada adminToken, set isAdmin menjadi true
    } else {
      setIsAuthenticated(false);
      setIsAdmin(false); // Set isAdmin menjadi false jika bukan admin
    }
  }, []);

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Hapus token user
    localStorage.removeItem('adminToken'); // Hapus token admin jika ada
    setIsAuthenticated(false); // Ubah status isAuthenticated
    setIsAdmin(false); // Ubah status isAdmin
    navigate('/login'); // Redirect ke halaman login
  };

  return (
    <div className="bg-blue-600 py-2">
      <Case>
        <div className="flex justify-around items-center">
          <div>
            {isAuthenticated ? (
              <Link
                className="mr-2 text-sm font-semibold uppercase text-white"
                to={'/'}
              >
                Layanan Pengaduan
              </Link>
            ) : (
              <Link
                className="mr-2 text-sm font-semibold uppercase text-white"
              >
                Layanan Pengaduan
              </Link>
            )}
          </div>
          <div>
            {/* Jika pengguna adalah admin, tampilkan navigasi admin */}
            {isAuthenticated && isAdmin ? (
              <>
                <NavLink href="/AdminPengaduan">Admin Pengaduan</NavLink>
                <NavLink href="/AdminAspirasi">Admin Aspirasi</NavLink>
                <button
                  onClick={handleLogout}
                  className="inline-flex px-4 py-2 text-blue-300 hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : isAuthenticated ? (
              /* Jika bukan admin (user biasa) */
              <>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/gallery">Gallery</NavLink>
                <NavLink href="/StatusPengaduanUser">Status Pengaduan</NavLink>
                <NavLink href="/StatusAspirasiUser">Status Aspirasi</NavLink>
                <button
                  onClick={handleLogout}
                  className="inline-flex px-4 py-2 text-blue-300 hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink href="/login">Login</NavLink>
            )}
          </div>
        </div>
      </Case>
    </div>
  );
};

export default Navbar;
