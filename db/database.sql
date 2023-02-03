DROP DATABASE IF EXISTS companydb;
CREATE DATABASE companydb CHARSET utf8mb4;
USE companydb;

CREATE TABLE eployee(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL
);


INSERT INTO employee VALUES
    (1, 'Pepe', 0)
    (2, 'Juan', 1000)
    (3, 'Joan', 2000)
    (4, 'Alejandro', 1200)
    (5, 'Andres', 2400)