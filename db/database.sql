DROP DATABASE IF EXISTS companydb;
CREATE DATABASE companydb CHARSET utf8mb4;
USE companydb;

CREATE TABLE eployee(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL
);