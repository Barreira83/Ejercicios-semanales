-- Nota: En muchos casos, el resultado dependerá de la fecha en la que realizamos la consulta.

-- 1. Obtener por orden alfabético, los nombres y fechas de nacimiento de los empleados que cumplen años en el mes de noviembre.
SELECT nomem, fecna FROM empleados WHERE MONTH(fecna)=11 ;

-- 2. Obtener los nombres de los empleados que cumplen años en el día de hoy.
SELECT nomem FROM empleados WHERE 
	MONTH(CURRENT_DATE())=MONTH(fecna) AND 
    DAY(CURRENT_DATE())=DAY(fecna);

-- 3. Obtener los nombres y fecha exacta de nacimiento de los empleados cuya fecha de nacimiento es anterior al año 1950.
SELECT nomem, fecna FROM empleados WHERE 
		YEAR(fecna) <1950;
                
-- 4. Obtener los nombres y fecha exacta de incorporación de los empleados cuya fecha de incorporación a la empresa es anterior al año 1970.
SELECT nomem, fecin FROM empleados WHERE YEAR(fecin)<1970;


-- 5. Obtener los nombres, fecha de nacimiento y fecha de incorporación de los empleados cuya edad a la fecha de incorporación 
-- era inferior a 30 años.
SELECT nomem, fecna, fecin, YEAR(fecin)-YEAR(fecna) FROM empleados
	WHERE YEAR(fecin)-YEAR(fecna)<30;
    

-- 6. Obtener los empleados cuyo nacimiento fue en Lunes.
SELECT nomem FROM empleados WHERE DATEPART(DW, fecna)=2;

SELECT  DATEPART(DW, '1999-02-04') ;
-- --------------------------------------------------------------------------------NON FUNCIONA


-- 7. Obtener los empleados cuyo día de la semana para el nacimiento y la incorporación fue Viernes.

-- 8. Obtener los empleados cuyo día de la semana para el nacimiento y la incorporación coinciden. Es decir nacieron y se incorporaron un Lunes, o nacieron y se incorporaron un Martes, etc

-- 9. Obtener los empleados y su mes de incorporación siempre que esté entre los meses de Enero y Junio (ambos inclusive).
SELECT nomem, MONTH(fecin) FROM empleados WHERE MONTH(fecin) BETWEEN 1 AND 7;


-- 10. Obtener los empleados y su mes de incorporación siempre que esté entre los meses de Enero y Junio (ambos inclusive)
 -- y el mes de nacimiento coincida en dicho mes.
 SELECT nomem, MONTH(fecin) FROM empleados WHERE 
 MONTH(fecin) BETWEEN 1 AND 7 AND
 MONTH(fecna) = MONTH(fecin);