-- 1. Para cada departamento con presupuesto inferior a 35.000 €, hallar le nombre del Centro donde está ubicado y el 
-- máximo salario de sus empleados (si dicho máximo excede de 1.500 €). Clasificar alfabéticamente por nombre de departamento.

SELECT c.nomce, d.nomde, MAX(e.salar) FROM centros c 
	INNER JOIN departamentos d ON d.numce = c.numce
	INNER JOIN empleados e ON e.numde = d.numde
    WHERE d.presu < 35 
    GROUP BY (d.numde) HAVING MAX(e.salar)>1500
    ORDER BY d.nomde;
    
-- 2. Hallar por orden alfabético los nombres de los departamentos que dependen de los que tienen un presupuesto inferior a 30.000 €.
-- También queremos conocer el nombre del departamento del que dependen y su presupuesto.
SELECT d1.nomde, d2.depde, d1.presu FROM departamentos d1
LEFT JOIN  departamentos d2 ON d1.numde =  d2.numde
WHERE d2.presu > 30;

-- Hacemos un Join consigo misma, para seleccionar solo departamentos padre con presu > 30

-- 3. Obtener los nombres y los salarios medios de los departamentos cuyo salario medio supera al salario medio de la empresa.

SELECT FORMAT(AVG(e.salar), 2), d.nomde FROM empleados e
	INNER JOIN departamentos d ON d.numde = e.numde
	GROUP BY (e.numde) 
    HAVING AVG(e.salar) > (SELECT AVG(salar) FROM empleados);
    

-- 4. Para los departamentos cuyo director lo sea en funciones, hallar el número de empleados y la suma de sus salarios, comisiones y número de hijos.

SELECT d.nomde, COUNT(e.numem), SUM(e.salar), SUM(e.comis), SUM(e.numhi) FROM empleados e 
	INNER JOIN departamentos d ON d.numde = e.numde
	WHERE d.tidir="F"
    GROUP BY (d.numde) ;
    
-- 5. Para los departamentos cuyo presupuesto anual supera los 35.000 €, hallar cuantos empleados hay por cada extensión telefónica.

SELECT e.extel, COUNT(e.numem) FROM empleados e
INNER JOIN departamentos d ON e.numde = d.numde
WHERE d.presu > 35
GROUP BY (e.extel);

-- 6. Hallar por orden alfabético los nombres de los empleados y su número de hijos para aquellos que son directores en funciones.

SELECT e.nomem, e.numhi FROM empleados e
	INNER JOIN departamentos d ON d.numde = e.numde
    WHERE d.tidir="F"
    ORDER BY e.nomem;

-- 7. Hallar si hay algún departamento (suponemos que sería de reciente creación) que aún no tenga empleados asignados ni director en propiedad.

SELECT d.nomde, COUNT(e.numem) AS "Numero de empleados"  FROM departamentos d
	left JOIN empleados e ON e.numde = d.numde
    WHERE d.tidir="P"
    GROUP BY d.numde HAVING COUNT(e.numem)=0;


-- 8. Añadir un nuevo departamento de nombre NUEVO y con director en funciones.
SELECT nomde FROM departamentos;
INSERT INTO departamentos (numde, nomde, tidir) 
	VALUES					(140, "NUEVO", "F");

-- 9. Añadir un nuevo empleado de nombre NORBERTO y sin departamento asignado. Inventar el resto de datos.
INSERT INTO empleados (numem, nomem, numde, extel, fecna, fecin, salar, comis, numhi)
	VALUES			(511, "NORBERTO", NULL, 222,"1983-05-02", "2008-05-05", 40000, 50, 5);

-- 10. Muestra los departamentos que no tienen empleados.
SELECT d.nomde, COUNT(e.numem) AS "Numero de empleados"  FROM departamentos d
	left JOIN empleados e ON e.numde = d.numde
    GROUP BY d.numde HAVING COUNT(e.numem)=0;

-- 11. Muestra los nombres de departamentos que no tienen empleados haciendo uso la combinación externa LEFT JOIN. Muestra una
-- segunda columna con los nombres de empleados para asegurarnos que realmente esta a NULL.
SELECT d.nomde
  FROM departamentos d
	left JOIN empleados e ON e.numde = d.numde
    GROUP BY d.numde HAVING COUNT(e.numem)=0;

-- SE NN AI EMPLEADOS QUE VOU MOSTRAR!!!! NON ENTENDO NADA O SEGUINTE TAMPOUCO----------------------------------------------------------

-- 12. Muestra los nombres de departamentos que no tienen empleados haciendo uso la combinación externa RIGHT JOIN. 
-- Muestra una segunda columna con los nombres de empleados para asegurarnos que realmente esta a NULL.
SELECT d.nomde  FROM empleados e 
	 RIGHT JOIN departamentos d ON e.numde = d.numde
     GROUP BY d.numde HAVING COUNT(e.numem)=0;
    
-- 13. Muestra los nombres de empleados que no tienen departamento haciendo uso la combinación externa LEFT JOIN. Muestra una 
-- segunda columna con los nombres de departamentos para asegurarnos que realmente esta a NULL.

SELECT e.nomem, e.numde FROM empleados e
	LEFT JOIN departamentos d ON e.numde = d.numde
    WHERE e.numde IS NULL;

-- 14. Muestra los nombres de empleados que no tienen departamento haciendo uso la combinación externa RIGHT JOIN. 
-- Muestra una segunda columna con los nombres de empleados para asegurarnos que realmente esta a NULL.

SELECT e.nomem, e.numde FROM  departamentos d
	RIGHT JOIN empleados e ON e.numde = d.numde
    WHERE e.numde IS NULL;

-- 16. Muestra los empleados y sus respectivos departamentos haciendo uso de la combinación interna INNER JOIN. 
-- ¿Aparecen el departamento NUEVO y el empleado NORBERTO?¿Por qué?

SELECT e.nomem, d.nomde FROM  departamentos d
	INNER JOIN empleados e ON e.numde = d.numde;

-- 17. Realiza la misma consulta anterior donde se cumpla la condición que NUMDE está a NULL. ¿Aparece algún resultado?¿Por qué?

SELECT e.nomem, d.nomde FROM  departamentos d
	INNER JOIN empleados e ON e.numde = d.numde
	WHERE e.numde IS NULL;
    

-- 18. Muestra los empleados y sus respectivos departamentos haciendo uso de la combinación interna NATURAL JOIN.

SELECT e.nomem, d.nomde FROM  departamentos d
	NATURAL JOIN empleados e;    
    
-- 19. Muestra la combinación de las 3 tablas CENTROS, DEPARTAMENTOS y EMPLEADOS haciendo uso de NATURAL JOIN.

SELECT * FROM departamentos
	NATURAL JOIN centros
    NATURAL JOIN empleados;

-- 20. Borra los registros dados de alta para el departamento NUEVO y el empleado introducida en el apartado anterior.

DELETE FROM empleados WHERE  numem=511;
DELETE FROM departamentos WHERE  numde=140;