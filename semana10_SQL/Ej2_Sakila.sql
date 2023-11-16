USE sakila;
-- Actores que contengan una "O" en su nombre y una "A" en su apellido.
SELECT first_name AS "Nombre actor", last_name AS "Apellido" FROM actor 
	WHERE first_name LIKE "%O%" AND last_name LIKE "%A%";

-- Duración media de todas las películas.
SELECT AVG(length) FROM film;

-- Películas con un rating PG y duración de más de 120.
SELECT title AS "Pelicula" FROM film WHERE rating="PG" AND length > 120;

-- Número total de apellidos distintos entre todos los actores.
SELECT distinct last_name FROM actor;

-- Ciudad en la que vive el cliente "Sandra Martin" (utilizando JOIN).
SELECT c.city FROM city c 
	INNER JOIN address a ON a.city_id=c.city_id
    INNER JOIN customer cu ON cu.address_id=a.address_id
	WHERE cu.first_name="Sandra" AND last_name="Martin";