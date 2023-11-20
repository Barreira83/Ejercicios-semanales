-- 1. Obtener por orden alfabético los nombres de los empleados cuya extensión telefónica es 250 o 750.

SELECT nomem, extel FROM empleados WHERE extel IN(250, 750)
ORDER BY nomem;

-- 2. Obtener por orden alfabético los nombres de los empleados que trabajan en el mismo departamento que PILAR o DOROTEA.

SELECT nomem, extel FROM empleados WHERE numde = ANY 
	(SELECT numde FROM empleados WHERE nomem IN ("PILAR", "DOROTEA"))
    ORDER BY nomem;

-- 3. Obtener por orden alfabético los nombres de los departamentos cuyo director es el mismo que el del 
-- departamento: DIRECC.COMERCIAL o el del departamento: PERSONAL
-- Las columas se deben llamar: 'Nombres Departamentos' y 'Identificador de su director'

SELECT 
	nomde AS 'Nombres Departamentos', 
    direc AS 'Identificador de su director' 
    FROM departamentos WHERE direc =  ANY
	(SELECT direc FROM departamentos WHERE nomde IN("DIRECC.COMERCIAL", "PERSONAL"))
   ORDER BY nomde;


