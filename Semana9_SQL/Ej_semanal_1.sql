/*
Confecciona una base de datos a partir del siguiente análisis de requisitos:
Se quiere diseñar una BBDD para almacenar todos los datos de un campeonato de fútbol sala que se organiza este año en la ciudad. 
Aquellos que quieran participar deberán formar un equipo: nombre*, patrocinador, color de la 1ª camiseta*, color de la 2ª camiseta* y categoría* (sub-18 o senior).

De cada partido almacenaremos: el resultado*, qué equipos jugaron*, el campo*, el arbitro* y las incidencias 
(en caso de que no ocurran incidencias no se anotará nada). Además, los participantes deberán rellenar una ficha de suscripción con algunos 
datos personales: nombre*, apellidos*, edad*, dirección y teléfono.

Los elementos marcados con asterisco en el análisis de requisitos son obligatorios. Recuerda agregar las claves primarias, claves foráneas y 
campos de auditoría necesarios. Asegúrate también de borrar las tablas antes de crearlas (siempre en el orden inverso al cual han sido creadas).

Una vez hayas creado la base de datos con todas sus tablas:

Inserta dos equipos en la misma categoría.

Inserta cuatro usuarios: relaciona a dos usuarios con el primer equipo y los otros dos con el segundo.

Inserta un partido.

Haz que el primer y el segundo equipo se enfrenten en el partido que has creado.

Modifica el partido para añadir como resultado final 1-2.

Eliminamos el atributo apellido de la tabla de participantes.

Modifica el nombre de la columna teléfono en la tabla de participantes.

Modifica el nombre y el teléfono del jugador con id 2.

Elimina a un jugador de cada equipo.
*/


CREATE DATABASE IF NOT EXISTS championship;
USE championship;

CREATE TABLE IF NOT EXISTS equipos(
idEquipo INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
patrocinador VARCHAR(50),
colorPrimeraCamiseta VARCHAR(50) NOT NULL,
colorSegundaCamiseta VARCHAR(50) NOT NULL,
categoria VARCHAR(50) NOT NULL,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

SET SQL_SAFE_UPDATES=0;
CREATE TABLE IF NOT EXISTS partidos(
	idPartido INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	resultado VARCHAR(50) NOT NULL,
	campo VARCHAR(100) NOT NULL,
	arbitro VARCHAR(50) NOT NULL,
	incidencias TEXT(300),
	createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);



ALTER TABLE partidos ADD equipoA INT NOT NULL;
ALTER TABLE partidos ADD equipoB INT NOT NULL;
ALTER TABLE partidos ADD FOREIGN KEY (equipoA) REFERENCES equipos (idEquipo);
ALTER TABLE partidos ADD FOREIGN KEY (equipoB) REFERENCES equipos (idEquipo);

CREATE TABLE IF NOT EXISTS ficha(
	idFicha INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL,
	apellidos VARCHAR(100) NOT NULL,
	edad INT NOT NULL,
	dirección VARCHAR(100),
	teléfono INT
);

ALTER TABLE ficha ADD equipoId INT NOT NULL;
ALTER TABLE ficha ADD FOREIGN KEY (equipo) REFERENCES equipos (idEquipo);


SET SQL_SAFE_UPDATES=1;

-- Inserta 2 equipos en la misma categoria
INSERT INTO equipos (nombre, patrocinador, colorPrimeraCamiseta, colorSegundaCamiseta, categoria) VALUES 
	('burela', 'pescanova', 'azul', 'blanca', 'sub-18'),
	('silva', 'repsol', 'roja', 'verde', 'sub-18');
    
-- Inserta cuatro usuarios: relaciona a dos usuarios con el primer equipo y los otros dos con el segundo.
INSERT INTO ficha (nombre, apellidos, edad, dirección, teléfono, equipoId) VALUES
	('David', 'Barreira', '40','Horreo, 14', '620701484', 1),
    ('Carlos', 'Jerpe', '33','Birloque, 56', '666333999', 1),
    ('Pablo', 'Seijas', '46', 'Cangas,25', '780654123',2),
    ('Daniel', 'Latorre', '42','Padron,33', '654654654', 2);
    
-- Inserta un partido.
INSERT INTO partidos (resultado, campo, arbitro, incidencias, equipoA, equipoB) VALUES
	('2- 2', 'A Marosa', 'Jimenez Losantos', 'Insultos racistas a un blanco', '1', '2');
    
-- Haz que el primer y el segundo equipo se enfrenten en el partido que has creado.

-- Modifica el partido para añadir como resultado final 1-2.
UPDATE partidos SET resultado='1-2' WHERE idPartido=1;

-- Eliminamos el atributo apellido de la tabla de participantes.
ALTER TABLE ficha DROP COLUMN apellidos;

-- Modifica el nombre de la columna teléfono en la tabla de participantes.
ALTER TABLE ficha RENAME COLUMN teléfono TO movil;
    
-- Modifica el nombre y el teléfono del jugador con id 2.
UPDATE ficha SET nombre='Manolo', movil='111111111' WHERE idFicha=2;

-- Elimina a un jugador de cada equipo.
SET SQL_SAFE_UPDATES=0;
DELETE FROM ficha WHERE equipoId=1 LIMIT 1;
DELETE FROM ficha WHERE equipoId=2 LIMIT 1;
