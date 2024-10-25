import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [loginType, setLoginType] = useState('user'); // 'user' atau 'admin'
  const [isRegistering, setIsRegistering] = useState(false); // State untuk mengatur apakah sedang login atau registrasi
  const [nama, setNama] = useState('');
  const [nomor, setNomor] = useState('');

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
        // Simpan token di localStorage (pastikan server mengirimkan token di dalam respons)
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userNama', nama);  // Simpan nama di localStorage
        localStorage.setItem('userNomor', nomor); // Simpan nomor di localStorage
  
        // Handle login success
        toast.success('Login berhasil!');
  
        // Redirect ke halaman yang dilindungi, misalnya dashboard
        window.location.href = "/about"; // Ganti dengan route yang sesuai
      } else {
        // Handle errors
        throw new Error(data.message || 'Gagal login');
      }
    } catch (error) {
      toast.error(error.toString());
    }
  };

  const handleUserRegister = async (event) => {
    event.preventDefault();
    const userData = { nama, nomor };
    console.log(nomor);
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
        // Handle registration success
        toast.success('Registrasi berhasil!');
        setIsRegistering(false); // Kembali ke login setelah registrasi berhasil
      } else {
        // Handle errors
        throw new Error(data.message || 'Gagal registrasi');
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
            onClick={() => setIsRegistering(false)}
            className={`text-lg ${!isRegistering ? 'text-blue-700 font-bold' : 'text-gray-500'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsRegistering(true)}
            className={`text-lg ml-4 ${isRegistering ? 'text-blue-700 font-bold' : 'text-gray-500'}`}
          >
            Register
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-6">{isRegistering ? 'User Registrasi' : 'User Login'}</h1>
        {isRegistering ? (
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
        ) : (
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
      </div>
    </div>
  );
}

export default Login;
