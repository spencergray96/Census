CREATE DATABASE dtmc;

use dtmc;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `answers` (
  `pKey` int(50) NOT NULL,
  `fKey` int(50) NOT NULL,
  `solution` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `answers` (`pKey`, `fKey`, `solution`) VALUES
(1, 1, 'Vancouver'),
(2, 1, 'North Vancouver'),
(3, 1, 'West Vancouver'),
(4, 1, 'Ladner'),
(5, 2, 'Red'),
(6, 2, 'Yellow'),
(7, 2, 'Blue'),
(8, 2, 'Green');

CREATE TABLE `questions` (
  `pKey` int(50) NOT NULL,
  `question` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `questions` (`pKey`, `question`) VALUES
(1, 'What\'s Your Favourite City?'), (2, 'What\'s Your Favourite Colour?');


CREATE TABLE `responses` (
  `pKey` int(50) NOT NULL,
  `email` int(50) NOT NULL,
  `question` int(50) NOT NULL,
  `choice` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `responses` (`pKey`, `email`, `question`, `choice`) VALUES
(1, 1, 1, 3), (2, 1, 2, 2);

CREATE TABLE `users` (
  `pKey` int(50) NOT NULL,
  `email` varchar(500) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`pKey`, `email`) VALUES
(1, 'jamesSmells@farts.ca'),
(2, 'raymondSucks@vacuums.me');

ALTER TABLE `answers`
  ADD PRIMARY KEY (`pKey`),
  ADD KEY `fKey` (`fKey`);

ALTER TABLE `questions`
  ADD PRIMARY KEY (`pKey`);

ALTER TABLE `responses`
  ADD PRIMARY KEY (`pKey`),
  ADD KEY `email` (`email`),
  ADD KEY `question` (`question`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`pKey`);

ALTER TABLE `answers`
  MODIFY `pKey` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `questions`
  MODIFY `pKey` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `responses`
  MODIFY `pKey` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `users`
  MODIFY `pKey` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`fKey`) REFERENCES `questions` (`pKey`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `responses`
  ADD CONSTRAINT `responses_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`pKey`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `responses_ibfk_2` FOREIGN KEY (`question`) REFERENCES `questions` (`pKey`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;
