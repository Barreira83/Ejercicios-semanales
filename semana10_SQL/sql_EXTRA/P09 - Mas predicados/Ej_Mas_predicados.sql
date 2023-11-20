-- 1. Obtener por orden alfabético los nombres y comisiones de los empleados del departamento 110 si en él hay algún empleado que tenga comisión.

SELECT nomem, comis FROM empleados WHERE numde=110 AND comis IS NOT NULL;

-- 2. Obtener los nombres de los departamentos que no sean ni de DIRECCION ni de SECTORES.
SELECT nomde FROM departamentos WHERE nomde NOT IN ("DIRECCION", "SECTORES");

-- 3 Obtener por orden alfabético los nombres y salarios de los empleados que o bien no tienen hijos y ganan más de 1.500 €, o bien tienen hijos y ganan menos de 1.000 €.

SELECT nomem, salar, numhi FROM empleados 
	WHERE (numhi=0 AND salar > 1500) OR (numhi>0 AND salar < 1000)
    ORDER BY nomem;

-- 4. Hallar por orden de número de empleado el nombre y salario total (salario más comisión) de los empleados cuyo salario total supera al salario mínimo en 1800 € mensuales. 
-- Las columnas se deben llamar 'Número de empleado', 'Nombre', 'Salario total', y el salario se debe mostrar con el simbolo '€'.

SELECT numem AS "Numero de empleado", nomem AS "Nombre", salar+IFNULL(comis,0) AS 'Salario total' FROM empleados
	WHERE 'Salario total' > 1050 +1800
	ORDER BY numem;

SELECT numem AS "Numero de empleado", nomem AS "Nombre", salar+IFNULL(comis,0) AS "Salario total" FROM empleados
	WHERE  salar+IFNULL(comis,0) > 600 +1800
	ORDER BY numem;

-- 5. Obtener, por orden alfabético, los nombres y salarios de los empleados del departamento 111 que tienen comisión si hay alguno de ellos cuya comisión supere al 15% de su salario.

SELECT nomem, salar FROM empleados 
	WHERE numde=111 AND comis > (salar*0.15) 
	ORDER BY nomem;
    
-- 6. Hallar los nombres de departamentos, el tipo de director y su presupuesto, para aquellos departamentos que tienen directores en funciones, o bien en propiedad y 
-- su presupuesto anual excede a 30.000 € o no dependen de ningún otro.

SELECT nomde, direc, presu FROM departamentos
	WHERE tidir="F" OR (tidir="P" AND presu > 30) AND depde IS NULL;

-- 7. Realizamos la misma consulta anterior pero mostrándola del modo siguiente: