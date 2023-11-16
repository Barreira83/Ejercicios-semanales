-- Creamos la bbdd 
CREATE DATABASE IF NOT EXISTS championship;

-- Seleccionamos la bbdd
USE championship;

-- Borramos la tabla-------------------------------------------------------------
DROP TABLE IF EXISTS teams;
-- Vamos a crear 1 la tabla de equipos
CREATE TABLE IF NOT EXISTS teams(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL UNIQUE,
    sponsor VARCHAR(30),
    colorA VARCHAR(30),
    colorB VARCHAR(30),
    category ENUM("sub-18", "senior") NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
    
-- Borramos la tabla---------------------------------------------------------------
DROP TABLE IF EXISTS players;
-- Vamos a crear 1 la tabla de jugadores
CREATE TABLE IF NOT EXISTS players(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    teamId INT UNSIGNED NOT NULL,
		   FOREIGN KEY (teamId) REFERENCES teams (id),
    firstName VARCHAR(30) NOT NULL,
	lastName VARCHAR(30) NOT NULL,
    birthDate DATETIME NOT NULL,
	address VARCHAR(100),
    phone VARCHAR(20),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP    
 
);
    
-- Borramos la tabla----------------------------------------------------------------
DROP TABLE IF EXISTS matches;
-- Vamos a crear 1 la tabla de partidos
CREATE TABLE IF NOT EXISTS matches(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	field VARCHAR(30) NOT NULL,
    result CHAR(5) DEFAULT "0-0",
    incidence TEXT,
    referee VARCHAR(30) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Vamos a crear una tabla intermedia que relaciona Partidos con Equipos
-- Borramos la tabla----------------------------------------------------------------
DROP TABLE IF EXISTS teamMatches;
-- Vamos a crear 1 la tabla de partidos
CREATE TABLE IF NOT EXISTS teamMatches(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    localTeamId INT UNSIGNED NOT NULL,
		FOREIGN KEY (localTeamId) REFERENCES teams (id),
	visitingTeamId INT UNSIGNED NOT NULL,
		FOREIGN KEY (visitingTeamId) REFERENCES teams (id),
	matchId INT UNSIGNED NOT NULL,
		FOREIGN KEY (matchId) REFERENCES matches (id),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
    
    
-- Insertamos dos equipos
INSERT INTO teams(name, colorA, colorB, category) VALUES 
				("equipoA", "Azul", "Blanca", "sub-18"),
                ("equipoB", "Roja", "Amarilla", "sub-18");

-- Insertamos 4 jugadores
TRUNCATE players;
INSERT INTO players(firstName, lastName, birthDate, teamId) VALUES 
				("Sara", "Rodriguez", "2009-10-21", 1),
                ("Pablo", "Gonzalez", "2008-05-01", 1),
                ("Lucia", "Perez", "2008-11-21", 2),
                ("David", "Barreira", "2009-12-20", 2);
              
-- Insertamos un partido
INSERT INTO matches(field, referee) VALUES
					("Mestalla", "Pedrerol");
                    
-- Organizamos un enfrentamiento entre el equipoA y el B
INSERT INTO teamMatches (localTeamId, visitingTeamId, matchId) VALUES
						(1, 2, 1);
                        
-- Modica el resultado del partido a 1-2
UPDATE matches SET result= "1-2" WHERE id=1;

-- Eliminamos apellido en la tabla jugadores
ALTER TABLE players DROP lastName;

-- Cambia el campo name a nombre en la tabla jugadores
ALTER TABLE players RENAME COLUMN firstName TO nombre;

-- Modificamos el nombre y telefono de jugador 2
UPDATE players SET nombre="Rodolfo", phone= "654567876" WHERE id=2;

-- Eliminamos un jugador de cada equipo
DELETE FROM players WHERE id=1 OR id=3;