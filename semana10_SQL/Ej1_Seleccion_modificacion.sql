-- DROP DATABASE bootcamp;

CREATE DATABASE IF NOT EXISTS bootcamp;
USE bootcamp;

DROP TABLE IF EXISTS addresses, students;

CREATE TABLE students (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    dni CHAR(11) UNIQUE NOT NULL
);

CREATE TABLE addresses (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	country VARCHAR(100),
    zipCode CHAR(5),
    address VARCHAR(200),
    city VARCHAR(100),
    studentId INT UNSIGNED NOT NULL,
    FOREIGN KEY (studentId) REFERENCES students (id)
);

INSERT INTO students (name, lastname, email, phone, dni)
VALUES
    ("Irvin", "Lethem", "ilethem0@google.com.au", "993870144", "279948941-9"),
    ("Kylie", "Mungan", "kmungan1@howstuffworks.com", "497494899", "748551874-7"),
    ("Yul", "Dibbert", "ydibbert2@businesswire.com", "776631050", "215649413-4"),
    ("Tamra", "Mc Gorley", "tmcgorley3@studiopress.com", "921948685", "617064473-7"),
    ("Elmira", "Imbrey", "eimbrey4@cpanel.net", "304168000", "178988896-4");


INSERT INTO addresses (country, zipCode, address, city, studentId)
VALUES
    ("Indonesia", "83297", "98339 Loftsgordon Road", "Babakanbandung", 1),
    ("Philippines", "44455", "74641 Dwight Avenue", "Bilar", 2),
    ("Indonesia", "62965", "9510 Milwaukee Street", "Sumberejo", 3),
    ("Norway", "54756", "8902 Doe Crossing Alley", "Steinkjer", 4),
    ("United States", "51471", "8616 Stephen Hill", "Charleston", 5);

-- Escribe a continuación el código SQL solicitado.
/*
Sin modificar la base de datos que acompaña a este ejercicio:*/

-- Selecciona todos los datos de los estudiantes incluyendo la información de su dirección.
SELECT * FROM students s, addresses a WHERE s.id=a.studentId;

-- Selecciona el nombre, apellidos y email de los estudiantes de Indonesia.
SELECT s.name, s.lastname, s.email  FROM students s
	INNER JOIN addresses a ON a.studentId=s.id
	WHERE a.country="Indonesia";    
    
-- Utiliza ALTER TABLE para añadir a la tabla students la columna edad (age).
ALTER TABLE students ADD COLUMN age INT;
-- Rellena la columna age en todos los usuarios con los valores que tú decidas.
UPDATE students SET age= 22 WHERE id=1;
UPDATE students SET age= 32 WHERE id=2;
UPDATE students SET age= 42 WHERE id=3;
UPDATE students SET age= 52 WHERE id=4;
UPDATE students SET age= 21 WHERE id=5;
    
			
