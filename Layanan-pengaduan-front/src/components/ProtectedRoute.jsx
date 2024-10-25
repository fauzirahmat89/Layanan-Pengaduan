import React from 'react';
import { Navigate } from 'react-router-dom'; // Gunakan Navigate untuk redirect

const ProtectedRoute = ({ element: Component, isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    <Component {...rest} /> // Render komponen yang dilindungi jika sudah login
  ) : (
    <Navigate to="/login" /> // Redirect ke halaman login jika belum login
  );
};

export default ProtectedRoute;
