-- 1. Hallar cuántos empleados hay en cada departamento.
SELECT COUNT(numem), numde FROM empleados GROUP BY (numde);

-- 2. Hallar para cada departamento el salario medio, el mínimo y el máximo.
     -- NUMDE Salario medio Salario mínimo Salario máximo
SELECT FORMAT(AVG(salar), 2) AS "Salario", MIN(salar), MAX(salar), numde FROM empleados GROUP BY (numde);

-- 3. Hallar el salario medio y la edad media en años para cada grupo de empleados con igual comisión. 
-- Nota: La edad dependerá de la fecha en la que realicemos la consulta.

SELECT 
FORMAT(AVG(salar), 2) AS "Salario",
FORMAT(AVG( YEAR(CURRENT_DATE()) - YEAR(fecna)),0) AS "Edad", 
comis 
FROM empleados GROUP BY comis;

-- 4. Repite la consulta anterior expresando la edad en años cumplidos. (Aunque en este caso se obtiene lo mismo, 
-- la edad media podría variar de una consulta a otra dependiendo del momento en el que se realice la consulta).


-- 5. Hallar el salario medio y la edad media en años cumplidos para cada grupo de empleados del mismo departamento y con igual comisión.
SELECT 
FORMAT(AVG(salar), 2) AS "Salario",
FORMAT(AVG( YEAR(CURRENT_DATE()) - YEAR(fecna)),0) AS "Edad media", 
comis, numde
FROM empleados GROUP BY numde, comis;

-- chatGPT saca asi la edad 
-- AVG(DATEDIFF(CURDATE(), fecha_nacimiento)/365) as edad_media


-- 6. Para los departamentos en los que hay algún empleado cuyo salario sea mayor que 2.500 € al mes, 
-- hallar el número de empleados y la suma de sus salarios.
SELECT numde, COUNT(numem), SUM(salar) FROM empleados WHERE salar>2500
GROUP BY numde;

-- Preguntar se esta ben