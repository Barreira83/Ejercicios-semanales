-- 1. Hallar el salario medio, mínimo y máximo de los empleados de la empresa.
SELECT FORMAT(AVG(salar), 2), MIN(salar), MAX(salar) FROM empleados;

-- 2. Obtener por orden alfabético los salarios y nombres de los empleados tales que su salario más un 40% supera al máximo salario.
SELECT nomem, salar FROM empleados 
	WHERE (salar*1.4) > (SELECT MAX(salar) FROM empleados)
	ORDER BY salar;
-- 3. Hallar el nombre y la edad en años cumplidos del empleado más viejo del departamento 110. 
SELECT nomem, YEAR(CURRENT_DATE())- YEAR(fecna) AS Edad FROM empleados 
WHERE numde=110 AND 
YEAR(fecna)=(SELECT MIN(YEAR(fecna)) FROM empleados WHERE numde=110);

-- chatGPT se equivoca!!!! pERO CORRIXESE E XA VAI
SELECT nomem, YEAR(CURDATE()) - YEAR(fecna) AS Edad FROM empleados 
WHERE numde = 110 ORDER BY fecna LIMIT 1;

-- 4. Hallar el número de empleados del departamento 112, cuántas comisiones distintas hay en ese departamento y la suma de las comisiones.
SELECT COUNT(numem), COUNT(DISTINCT comis), SUM(comis) FROM empleados WHERE numde=112;
