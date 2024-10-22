import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Gallery from '../pages/Gallery'
import StatusPengaduanUser from '../pages/StatusPengaduanUser'
import StatusAspirasiUser from '../pages/StatusAspirasiUser'
import AdminPengaduan from '../pages/AdminPengaduan'
import AdminAspirasi from '../pages/AdminAspirasi'
import Login from '../pages/Login'
const Router = () => {
  const userId = 101;
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="StatusPengaduanUser" element={<StatusPengaduanUser userId={userId}/>} />
      <Route path="StatusAspirasiUser" element={<StatusAspirasiUser userId={userId}/>} />
      <Route path="AdminPengaduan" element={<AdminPengaduan/>} />
      <Route path="AdminAspirasi" element={<AdminAspirasi/>} />
    </Routes>
  )
}

export default Router
