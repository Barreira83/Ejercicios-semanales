-- 1. Crear una vista con todos los empleados del departamento 111 en donde figuren solo el número de empleado, 
-- su nombre, su salario y la comisión. La llamarás VISTA1.

CREATE VIEW VISTA1 AS
SELECT numem, nomem, salar, comis FROM empleados WHERE numde=111;

-- 2. Crear una vista que obtenga el máximo valor de la suma de los salarios de los departamentos. Se llamará VISTA2.
DROP VIEW VISTA2;
CREATE VIEW VISTA2 AS
	SELECT numde, SUM(salar) FROM empleados GROUP BY numde;

-- 3. Utilizar la vista anterior para obtener el departamento con más gasto en salario.
SELECT numde, MAX(SUM(salar)) FROM VISTA2;

SELECT numde, SUM(salar) FROM empleados GROUP BY numde;

-- No lo consigo ----------------------------------------------------------------------------------------------------

    
-- 4. Utilizar la VISTA1 para obtener por orden alfabético los nombres de los empleados del departamento 111 
-- que tienen comisión.
SELECT * FROM VISTA1;

SELECT nomem FROM VISTA1 WHERE comis IS NOT NULL
	ORDER BY nomem ASC;


-- 5. Insertar la siguiente fila en la VISTA1: (999,'RODOLFO',999,999). ¿Qué consecuencias tiene?
INSERT INTO VISTA1 (numem, nomem, salar, comis) 
	VALUES (999,'RODOLFO',999,999);

SELECT * FROM VISTA1; -- CREA UN NUEVO USUARIO, PERO NO SE VE EN LA VISTA, PORQUE NO PERTENECE A DEPART 111
    
-- 6. Borra la fila anterior.
DELETE FROM empleados WHERE numem=999;

-- 7. Crear una VISTA3 en la que aparezcan los centros con sus departamentos.

CREATE VIEW VISTA3 AS
SELECT numde, numce FROM departamentos;

SELECT * FROM VISTA3;

-- 8. Utilizar la VISTA3 para mostrar el nombre de cada centro y el total de los presupuestos de sus departamentos.

9. Insertar la siguiente fila en la VISTA3: 

10. Borra la fila anterior