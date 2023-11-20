-- 1. Obtener los nombres de los centros de trabajo si hay alguno que esté en la calle ATOCHA.

SELECT nomce FROM centros WHERE dirce LIKE "%ATOCHA%";

-- 2. Obtener los nombres y el salario de los empleados del departamento 100 si en él hay alguno que gane más de 1300 €.

SELECT nomem, salar FROM empleados WHERE numde=100 AND salar > 1300;


-- 3. Obtener los nombres y el salario de los empleados del departamento 100 si en él hay alguno que gane más de 2750 €.

SELECT nomem, salar FROM empleados WHERE numde=100 AND salar > 2750;

-- 4. Obtener los nombres y el salario de los empleados del departamento 100 si en él hay alguno que gane más de 3000 €.
SELECT nomem, salar FROM empleados WHERE numde=100 AND salar > 3000;