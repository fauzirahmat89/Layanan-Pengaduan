import React, { useEffect, useState } from 'react';
import Case from "./Case";
import NavLink from "./NavLink";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Gunakan useNavigate untuk redirect

  // Periksa token untuk menentukan apakah pengguna sudah login
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Hapus token dari localStorage
    setIsAuthenticated(false); // Ubah status isAuthenticated
    navigate('/login'); // Redirect ke halaman login
  };

  return (
    <div className="bg-blue-600 py-2">
      <Case>
        <div className="flex justify-around items-center">
          <div>
            {isAuthenticated ? (<>
                <Link
                className="mr-2 text-sm font-semibold uppercase text-white"
                to={'/'}
                >
                Layanan Pengaduan
                </Link>
            </>) : (<>
                <Link
                className="mr-2 text-sm font-semibold uppercase text-white"
                >
                Layanan Pengaduan
                </Link>
            </>)}

          </div>
          <div>
            {/* Hanya tampilkan link Home dan lainnya jika pengguna sudah login */}
            {isAuthenticated ? (
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
