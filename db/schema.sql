-- This deletes a old version of the database and replaces it with a fresh one --
DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;
-- This sets the database to the one we're using in the program --
USE employees_db;
-- These create tables for each of the respective data sets --
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);