"use strict";

/** Un caracol en un pozo sube 7 pasos por el día y baja 2 por la noche.
 * Dada la profundidad del pozo (en pasos), haya cuantos días tarda el caracol en subirlo
 *
 * EJEMPLO: Si profundidadPozo es 31, el número de días debería ser 6
 * Día 1: 7-2=5
 * Día 2: 5+7-2=10
 * Día 3: 10+7-2=15
 * Día 4: 15+7-2=20
 * Día 5: 20+7-2=25
 * Día 6: 25+7=32
 *
 * En el día seis consigue subir el pozo durante el día, antes de llegar
 * a la noche
 *
 * PISTA: Puedes usar un bucle para ir viendo lo que recorre el caracol cada
 * día, y hacer un break cuando llegue a la profundidad del pozo
 */


function calcularDias(prof) {
    let dias=0;
    let pasos=0;
    while(pasos<prof){
        pasos= pasos+7;
        
        if (pasos<prof){
            pasos= pasos-2;
        }          
        
        dias++;
    }
    return dias;
}
console.log(calcularDias(38));