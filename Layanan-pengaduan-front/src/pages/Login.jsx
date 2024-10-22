import React, { useState } from 'react';

function Login() {
  const [loginType, setLoginType] = useState('user'); // 'user' atau 'admin'

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const nama = formData.get('nama');
    const password = formData.get('password');
    console.log('Login Attempt:', { nama, password, type: loginType });
    // Implementasi API untuk login
  };

  const renderUserLoginForm = () => (
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
          Nama
        </label>
        <input
          type="text"
          name="nama"
          id="nama"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukkan nomor Anda"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log in
        </button>
      </div>
    </form>
  );

  const renderAdminLoginForm = () => (
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
          Nama
        </label>
        <input
          type="text"
          name="nama"
          id="nama-admin"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukkan nama Anda"
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
          id="password-admin"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukkan password Anda"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log in
        </button>
      </div>
    </form>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center w-3/5">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-4">
          <button
            onClick={() => setLoginType('user')}
            className={`text-lg ${loginType === 'user' ? 'text-blue-700 font-bold' : 'text-gray-500'}`}
          >
            User
          </button>
          <button
            onClick={() => setLoginType('admin')}
            className={`text-lg ml-4 ${loginType === 'admin' ? 'text-blue-700 font-bold' : 'text-gray-500'}`}
          >
            Admin
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-6">{loginType === 'user' ? 'User Login' : 'Admin Login'}</h1>
        {loginType === 'user' ? renderUserLoginForm() : renderAdminLoginForm()}
      </div>
    </div>
  );
}

export default Login;

