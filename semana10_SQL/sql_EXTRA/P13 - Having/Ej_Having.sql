-- 1. Hallar el número de empleados que usan la misma extensión telefónica. Solamente se desea mostrar aquellos grupos que tienen más de 1 empleado.
SELECT COUNT(numem), extel FROM empleados 
	GROUP BY extel HAVING COUNT(numem)>1;

-- 2. Para cada centro, hallar los presupuestos medios de los departamentos.
SELECT numce, AVG(presu) FROM departamentos GROUP BY numce HAVING AVG(presu);

-- 3. Para cada centro, hallar los presupuestos medios de los departamentos clasificados según estén dirigidos en propiedad o en funciones.
SELECT numce, tidir FROM departamentos 
	GROUP BY numce HAVING AVG(presu);
    
    -- NN SEI, SERIA UN GRUPO DENTRO DOUTRO GRUPO

-- 4. Para los departamentos cuyo salario medio supera al de la empresa, hallar cuántas extensiones telefónicas tienen.
SELECT numde, COUNT(extel) FROM empleados
GROUP BY extel 
HAVING AVG(salar) > (SELECT AVG(salar) FROM empleados);


-- 5. Hallar el máximo valor de la suma de los salarios de los departamentos.