import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [loginType, setLoginType] = useState('user'); // 'user', 'admin', atau 'register'
  const [isRegistering, setIsRegistering] = useState(false); // State untuk mengatur apakah sedang login atau registrasi
  const [nama, setNama] = useState('');
  const [nomor, setNomor] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserLogin = async (event) => {
    event.preventDefault();
    const userData = { nama, nomor };

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userNama', nama);  // Simpan nama di localStorage
        localStorage.setItem('userNomor', nomor); // Simpan nomor di localStorage

        toast.success('Login berhasil!');

        // Redirect ke halaman yang dilindungi
        window.location.href = "/about";
      } else {
        throw new Error(data.message || 'Gagal login');
      }
    } catch (error) {
      toast.error(error.toString());
    }
  };

  const handleUserRegister = async (event) => {
    event.preventDefault();
    const userData = { nama, nomor };
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Registrasi berhasil!');
        setIsRegistering(false); // Kembali ke login setelah registrasi berhasil
      } else {
        throw new Error(data.message || 'Gagal registrasi');
      }
    } catch (error) {
      toast.error(error.toString());
    }
  };

  const handleAdminLogin = async (event) => {
    event.preventDefault();
    const adminData = { username, password };

    try {
      const response = await fetch('http://localhost:3000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('adminToken', data.token); // Simpan token admin
        toast.success('Login admin berhasil!');

        // Redirect ke halaman admin
        window.location.href = "/admin/dashboard"; // Ganti dengan route admin
      } else {
        throw new Error(data.message || 'Gagal login admin');
      }
    } catch (error) {
      toast.error(error.toString());
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center w-3/5">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        <div className="mb-4">
          <button
            onClick={() => { setLoginType('user'); setIsRegistering(false); }}
            className={`text-lg ${loginType === 'user' ? 'text-blue-700 font-bold' : 'text-gray-500'}`}
          >
            User Login
          </button>
          <button
            onClick={() => setIsRegistering(true)}
            className={`text-lg ml-4 ${isRegistering ? 'text-blue-700 font-bold' : 'text-gray-500'}`}
          >
            Register
          </button>
          <button
            onClick={() => { setLoginType('admin'); setIsRegistering(false); }}
            className={`text-lg ml-4 ${loginType === 'admin' ? 'text-blue-700 font-bold' : 'text-gray-500'}`}
          >
            Admin Login
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-6">
          {isRegistering ? 'User Registrasi' : (loginType === 'admin' ? 'Admin Login' : 'User Login')}
        </h1>

        {/* Form registrasi user */}
        {isRegistering && (
          <form onSubmit={handleUserRegister}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
                Nama
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nomor">
                Nomor
              </label>
              <input
                type="text"
                name="nomor"
                id="nomor"
                value={nomor}
                onChange={(e) => setNomor(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Masukkan nomor Anda"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </form>
        )}

        {/* Form login user */}
        {!isRegistering && loginType === 'user' && (
          <form onSubmit={handleUserLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
                Nama
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nomor">
                Nomor
              </label>
              <input
                type="text"
                name="nomor"
                id="nomor"
                value={nomor}
                onChange={(e) => setNomor(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Masukkan nomor Anda"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log in
            </button>
          </form>
        )}

        {/* Form login admin */}
        {!isRegistering && loginType === 'admin' && (
          <form onSubmit={handleAdminLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Masukkan username admin"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Masukkan password"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log in
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
