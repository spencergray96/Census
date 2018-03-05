CREATE DATABASE dtmc;

use dtmc;

-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 05, 2018 at 09:28 AM
-- Server version: 5.6.28
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `dtmc`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `pKey` int(50) NOT NULL,
  `fKey` int(50) NOT NULL,
  `solution` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`pKey`, `fKey`, `solution`) VALUES
(1, 1, 'Vancouver'),
(2, 1, 'North Vancouver'),
(3, 1, 'West Vancouver'),
(4, 1, 'Ladner'),
(5, 2, 'Red'),
(6, 2, 'Yellow'),
(7, 2, 'Blue'),
(8, 2, 'Green');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `pKey` int(50) NOT NULL,
  `surveyName` varchar(500) NOT NULL,
  `surveyDesc` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`pKey`, `surveyName`, `surveyDesc`) VALUES
(1, 'What\'s Your Favourite City?', 'Help us figure this out'),
(2, 'What\'s Your Favourite Colour?', 'You\'re doing your nation a service by helping contribute data to this very important survey! You\'re doing your nation a service by helping contribute data to this very important survey! You\'re doing your nation a service by helping contribute data to this very important survey! You\'re doing your nation a service by helping contribute data to this very important survey!');

-- --------------------------------------------------------

--
-- Table structure for table `responses`
--

CREATE TABLE `responses` (
  `pKey` int(50) NOT NULL,
  `email` int(50) NOT NULL,
  `question` int(50) NOT NULL,
  `choice` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `responses`
--

INSERT INTO `responses` (`pKey`, `email`, `question`, `choice`) VALUES
(1, 1, 1, 3),
(2, 1, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `pKey` int(50) NOT NULL,
  `email` varchar(500) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`pKey`, `email`) VALUES
(1, 'jamesSmells@farts.ca'),
(2, 'raymondSucks@vacuums.me'),
(3, 'dov@cucumbers.eat'),
(4, 'spencer@gray.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`pKey`),
  ADD KEY `fKey` (`fKey`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`pKey`);

--
-- Indexes for table `responses`
--
ALTER TABLE `responses`
  ADD PRIMARY KEY (`pKey`),
  ADD KEY `email` (`email`),
  ADD KEY `question` (`question`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`pKey`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `pKey` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `pKey` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `responses`
--
ALTER TABLE `responses`
  MODIFY `pKey` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `pKey` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`fKey`) REFERENCES `questions` (`pKey`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `responses`
--
ALTER TABLE `responses`
  ADD CONSTRAINT `responses_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`pKey`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `responses_ibfk_2` FOREIGN KEY (`question`) REFERENCES `questions` (`pKey`) ON DELETE CASCADE ON UPDATE CASCADE;

