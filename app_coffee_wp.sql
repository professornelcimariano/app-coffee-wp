-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23/08/2024 às 22:36
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `app_coffee_wp`
--
CREATE DATABASE IF NOT EXISTS `app_coffee_wp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `app_coffee_wp`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `frameworks`
--

CREATE TABLE `frameworks` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `frameworks`
--

INSERT INTO `frameworks` (`id`, `name`, `description`, `image`) VALUES
(1, 'Django', 'Django é um framework Python de alto nível para desenvolvimento web, conhecido por seu design robusto e orientado à segurança. Ele segue o padrão Model-View-Template (MVT) e vem com diversas funcionalidades prontas para uso, como administração, autenticaç', 'django.webp'),
(2, 'React ', 'React é uma biblioteca JavaScript para a construção de interfaces de usuário, desenvolvida pelo Facebook. Embora tecnicamente seja uma biblioteca, é amplamente considerado um framework devido à sua vasta comunidade e ecossistema. Ele permite a criação de ', 'react.webp'),
(3, 'Laravel', 'Laravel é um framework PHP que adota o padrão Model-View-Controller (MVC). Ele é conhecido por sua sintaxe expressiva e elegante, que visa facilitar o desenvolvimento de aplicações web complexas. Laravel oferece uma ampla gama de funcionalidades, como rot', 'laravel.webp'),
(4, 'Ruby ', 'Ruby on Rails, ou simplesmente Rails, é um framework de desenvolvimento web escrito em Ruby. Ele segue o padrão Model-View-Controller (MVC) e é conhecido por sua filosofia de \"convenção sobre configuração\", que facilita a vida dos desenvolvedores, permiti', 'ruby.webp'),
(5, 'Spring Boot', 'Spring Boot é uma extensão do framework Spring, que visa simplificar o desenvolvimento de aplicativos Java, especialmente serviços RESTful. Ele oferece uma configuração mínima e permite a criação de aplicativos independentes, facilitando o desenvolvimento', 'spring.webp');

-- --------------------------------------------------------

--
-- Estrutura para tabela `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `languages`
--

INSERT INTO `languages` (`id`, `name`, `description`) VALUES
(1, 'Javascript', 'JavaScript foi desenvolvido por Brendan Eich em 1995 enquanto trabalhava na Netscape.'),
(2, 'Python', 'Python foi criado por Guido van Rossum e seu desenvolvimento começou no final da década de 1980, com a primeira versão lançada em 1991.');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `frameworks`
--
ALTER TABLE `frameworks`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `frameworks`
--
ALTER TABLE `frameworks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
