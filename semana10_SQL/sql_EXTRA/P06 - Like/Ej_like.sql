-- 1. Obtener por orden alfabético el nombre y el salario de aquellos empleados que comienzan por la letra 'A'.
-- Las columas deben llamarse 'Nombre' y 'Salario', y el salario debe aparecer en '€'.

SELECT nomem AS Nombre, salar AS Salario FROM empleados WHERE nomem LIKE "A%"
ORDER BY nomem;

-- 2. Obtener por orden alfabético los nombres de los empleados que tengan 8 letras.

SELECT nomem AS Nombre FROM empleados WHERE length(nomem)=8
ORDER BY nomem;

-- 3. Obtener por orden alfabético los nombres y el presupuesto de los departamentos que incluyen la palabra “SECTOR”. 
-- El presupuesto debe mostrarse en € (Ejemplo 10.000 €)

SELECT nomde AS Departamento,
 CONCAT(FORMAT(presu * 1000)," €") AS Presupuesto
 FROM departamentos WHERE nomde LIKE '%SECTOR%';
