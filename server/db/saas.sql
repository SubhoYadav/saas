-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 172.17.0.1
-- Generation Time: Nov 02, 2023 at 04:04 PM
-- Server version: 8.0.32
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `saas`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `user_name` varchar(128) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_mobile` varchar(10) NOT NULL,
  `user_password` varchar(128) NOT NULL,
  `user_role` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ROLE_USER',
  `src` varchar(125) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'SIGNUP' COMMENT 'Stores the method by which user has arrieved to the application',
  `user_profile_img` varchar(255) DEFAULT NULL,
  `socket_event` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_id`, `user_name`, `user_email`, `user_mobile`, `user_password`, `user_role`, `src`, `user_profile_img`, `socket_event`, `deleted`, `created_on`, `modified_on`) VALUES
(1, 'user1', 'Subho Yadav', 'subhoyadav79@gmail.com', '9007259485', 'subho@gide', 'ROLE_DEVELOPER', '', '/avatar.png', 'CHAT_SUBHO', 0, '2023-10-15 06:41:23', '2023-10-15 06:41:43'),
(18, 'USERc0456f0e146942f3b9dae9cd8104d011', 'Amit Bansal', 'abansal@gmail.com', '6289041619', 'subho@gide', 'ROLE_USER', 'SIGNUP', '/avatar2.png', 'CHAT_AMIT', 0, '2023-10-16 15:43:46', '2023-10-16 15:43:46'),
(19, 'USERfe6f315e39464937af2af2b97212bc0e', 'Biplaw Bansal', 'bbansal@gmail.com', '6289041617', 'subho@gide', 'ROLE_USER', 'SIGNUP', '/avatar3.png', 'CHAT_BIPLAW', 0, '2023-10-16 15:44:24', '2023-10-16 15:44:24'),
(20, 'USER72a2ba43243c47f0a5c7eaf350d22b5f', 'Manish Malhotra', 'abansal@gmail.com', '6289041619', 'subho@gide', 'ROLE_USER', 'SIGNUP', '/avatar4.png', 'CHAT_MANISH', 0, '2023-10-16 15:48:04', '2023-10-16 15:48:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
