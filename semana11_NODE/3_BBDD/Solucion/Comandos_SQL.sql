        
         drop database bootcamp3;
        
        CREATE DATABASE IF NOT EXISTS bootcamp3;
        USE bootcamp3;
        
        CREATE TABLE IF NOT EXISTS students (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            firstName VARCHAR(50) NOT NULL,
            lastName VARCHAR(100) NOT NULL,
            birthday DATETIME NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP);
         



        CREATE TABLE IF NOT EXISTS addresses (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            street VARCHAR(255) NOT NULL,
            postalCode VARCHAR(10) NOT NULL,        
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            studentId INT UNSIGNED,
            FOREIGN KEY(studentId) REFERENCES students(id)   
            );
   
