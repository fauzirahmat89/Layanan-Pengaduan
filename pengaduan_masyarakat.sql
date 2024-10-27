-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:5222
-- Generation Time: Oct 27, 2024 at 11:27 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pengaduan_masyarakat`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `aspirasi`
--

CREATE TABLE `aspirasi` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `judul_aspirasi` varchar(255) NOT NULL,
  `isi` text NOT NULL,
  `tanggal` date NOT NULL,
  `asal` text NOT NULL,
  `instansi` varchar(255) NOT NULL,
  `kategori` enum('Perhubungan','Agama','Kesehatan','Ekonomi') NOT NULL,
  `status` enum('Belum Diproses','Sedang Diproses','Berhasil','Gagal') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aspirasi`
--

INSERT INTO `aspirasi` (`id`, `id_user`, `judul_aspirasi`, `isi`, `tanggal`, `asal`, `instansi`, `kategori`, `status`) VALUES
(1, 1, 'Laporan3 jalan rusak', 'Jalan di desa X rusak parah dan membutuhkan perbaikan segera.', '2023-10-15', 'Desa X', 'Pekerjaan Umum', 'Perhubungan', 'Belum Diproses'),
(2, 1, 'Laporan3 jalan rusak', 'Jalan di desa X rusak parah dan membutuhkan perbaikan segera.', '2023-10-15', 'Desa X', 'Pekerjaan Umum', 'Perhubungan', 'Belum Diproses'),
(3, 16, 'dasdsadsa', 'dsadsadad', '2024-10-27', 'dasdasda', 'dsadsadsa', 'Perhubungan', 'Belum Diproses'),
(4, 16, 'dasdsadsa', 'dsadsadad', '2024-10-27', 'dasdasda', 'dsadsadsa', 'Kesehatan', 'Belum Diproses');

-- --------------------------------------------------------

--
-- Table structure for table `pengaduan`
--

CREATE TABLE `pengaduan` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `judul_laporan` varchar(255) NOT NULL,
  `isi` text NOT NULL,
  `tanggal` date NOT NULL,
  `lokasi` text NOT NULL,
  `instansi` varchar(255) NOT NULL,
  `kategori` enum('Perhubungan','Agama','Kesehatan','Ekonomi') NOT NULL,
  `status` enum('Belum Diproses','Sedang Diproses','Berhasil','Gagal') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pengaduan`
--

INSERT INTO `pengaduan` (`id`, `id_user`, `judul_laporan`, `isi`, `tanggal`, `lokasi`, `instansi`, `kategori`, `status`) VALUES
(8, 1, 'dsadsa', 'dsadsadsa', '2024-10-27', 'dasdsad', 'dasdsadsa', 'Perhubungan', 'Belum Diproses');

-- --------------------------------------------------------

--
-- Table structure for table `petugas`
--

CREATE TABLE `petugas` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `status_aspirasi`
--

CREATE TABLE `status_aspirasi` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_aspirasi` int(11) NOT NULL,
  `status` enum('Berhasil','Sedang Diproses','Gagal') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `status_pengaduan`
--

CREATE TABLE `status_pengaduan` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_pengaduan` int(11) NOT NULL,
  `status` enum('Berhasil','Sedang Diproses','Gagal') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `nomor` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `nama`, `nomor`) VALUES
(1, 'Example User', 12345678),
(14, 'fauzirrr', 123456789),
(15, 'fauzirrr21', 123456789),
(16, 'uzi', 585215542),
(17, 'darma', 8159999);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `aspirasi`
--
ALTER TABLE `aspirasi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `pengaduan`
--
ALTER TABLE `pengaduan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `petugas`
--
ALTER TABLE `petugas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status_aspirasi`
--
ALTER TABLE `status_aspirasi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_aspirasi` (`id_aspirasi`);

--
-- Indexes for table `status_pengaduan`
--
ALTER TABLE `status_pengaduan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_pengaduan` (`id_pengaduan`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `aspirasi`
--
ALTER TABLE `aspirasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pengaduan`
--
ALTER TABLE `pengaduan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `petugas`
--
ALTER TABLE `petugas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `status_aspirasi`
--
ALTER TABLE `status_aspirasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `status_pengaduan`
--
ALTER TABLE `status_pengaduan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aspirasi`
--
ALTER TABLE `aspirasi`
  ADD CONSTRAINT `aspirasi_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pengaduan`
--
ALTER TABLE `pengaduan`
  ADD CONSTRAINT `pengaduan_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `status_aspirasi`
--
ALTER TABLE `status_aspirasi`
  ADD CONSTRAINT `status_aspirasi_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `status_aspirasi_ibfk_2` FOREIGN KEY (`id_aspirasi`) REFERENCES `aspirasi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `status_pengaduan`
--
ALTER TABLE `status_pengaduan`
  ADD CONSTRAINT `status_pengaduan_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `status_pengaduan_ibfk_3` FOREIGN KEY (`id_pengaduan`) REFERENCES `pengaduan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
