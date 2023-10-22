"use strict";

/**
 * REGISTRO DE UN COCHE
 *
 * El prompt nos va a preguntar cuántas propiedades registrar sobre el coche. Luego nos
 * ira preguntando qué propiedades queremos guardar, y luego los valores.
 *
 * ¿Cuántas propiedades quieres guardar? => 2
 *
 * ¿Qué quieres registrar del coche? => marca
 * ¿Qué marca quieres guardar? => Mazda
 *
 * ¿Qué quieres registrar del coche? => cv
 * ¿Qué cv quieres guardar? => 120
 *
 * ¡Coche registrado correctamente!
 *
 * Enseñaremos el coche resultante por consola:
 *
 * {
 *   marca: "mazda",
 *   cv: 120
 * }
 *
 */

const registro ={}
const numPreguntas = +prompt("¿Cuántas propiedades quieres guardar?");
console.log(numPreguntas);
let prop="";
let valor="";

for(let i=0; i<numPreguntas; i++){
    prop = prompt("¿Qué quieres registrar del coche?");
    
    valor = prompt(`¿Qué ${prop} quieres guardar?`)
    registro[prop]= valor;
}

console.log(registro);
