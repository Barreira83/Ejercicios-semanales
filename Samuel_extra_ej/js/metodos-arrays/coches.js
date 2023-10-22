/**
 *
 *   1. Obtén un array con todos los coches de la marca Audi.
 *
 *   2. Obtén un array con todos los colores de los coches de marca BMW. filter y map
 *
 *   3. Obtén la media de precio de los coches de marca Ford.  reduce si la condicion es ford
 *
 *   4. Obtén un array con las distintas marcas de coches (no se pueden repetir). map y set
 *
 *   5. Obtén un array con los coches de transmisión manual y de color negro.
 *
 *   6. Obtén la suma total de todos los precios.
 *
 *   7. Ordena los coches por precios
 *
 */

"use strict";

const coches = [
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2012,
    precio: 30000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A6",
    year: 2010,
    precio: 35000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: "Rojo",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2017,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A3",
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2012,
    precio: 25000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2019,
    precio: 90000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2017,
    precio: 60000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: "Azul",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2018,
    precio: 50000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2017,
    precio: 80000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2016,
    precio: 30000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
  },
];


//1. Obtén un array con todos los coches de la marca Audi.


const cochesAudi= coches.filter(item => item.marca ==="Audi");
console.log(cochesAudi);

//  2. Obtén un array con todos los colores de los coches de marca BMW. filter y map
const cochesBmw = coches.filter(item => item.marca==="BMW");
const coloresBmw = cochesBmw.map(item => item.color);
console.log(cochesBmw);
console.log(coloresBmw);

//3. Obtén la media de precio de los coches de marca Ford.  reduce si la condicion es ford

const cochesFord = coches.filter(item => item.marca ==="Ford");
console.log(cochesFord);
const preciosFord = cochesFord.map(item => item.precio)
const precioMedioFord = (preciosFord.reduce((acc, element)=> acc+ element,0))/cochesFord.length;
console.log(precioMedioFord);



// 4. Obtén un array con las distintas marcas de coches (no se pueden repetir). map y set
const setDeMarcas = new Set();

const todasMarcas = coches.map(item => item.marca);
console.log(todasMarcas);
for(let i of todasMarcas){
  setDeMarcas.add(i);
}
console.log(setDeMarcas);


// 5. Obtén un array con los coches de transmisión manual y de color negro.

const cochesManuales_Negros =coches.filter (item => {
  return item.transmision==="manual" && item.color=== "Negro";
});
console.log(cochesManuales_Negros);

// 6. Obtén la suma total de todos los precios.
const sumaTotalPrecios = coches.map(item => item.precio);
console.log(sumaTotalPrecios);
const resultadoPrecios = sumaTotalPrecios.reduce((acc, i)=> acc + i, 0);
console.log(resultadoPrecios);

// 7. Ordena los coches por precios
let ordenarCoches=[...coches]; //primero lo copiamos porque al ordenarlo modifica el original

  ordenarCoches = ordenarCoches.sort((a, b) => a.precio - b.precio);

console.log(ordenarCoches);