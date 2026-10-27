CREATE DATABASE IF NOT EXISTS db_retrogames;

USE db_retrogames;

CREATE TABLE IF NOT EXISTS jogos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150) NOT NULL,
    plataforma VARCHAR(100) NOT NULL,
    desenvolvedora VARCHAR(150) NOT NULL,
    imagem_url TEXT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO jogos
(titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES
(
    'Super Mario World',
    'Super Nintendo',
    'Nintendo',
    'https://placehold.co/400x300/201c1a/ffffff?text=Super+Mario+World',
    49.90
),
(
    'Sonic the Hedgehog',
    'Mega Drive',
    'Sega',
    'https://placehold.co/400x300/201c1a/ffffff?text=Sonic',
    39.90
),
(
    'Street Fighter II',
    'Super Nintendo',
    'Capcom',
    'https://placehold.co/400x300/201c1a/ffffff?text=Street+Fighter+II',
    59.90
);
