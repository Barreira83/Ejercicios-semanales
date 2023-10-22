

"use strict";

const persons = [
  {
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];

const cars = [
  {
    id: "LU9286V",
    brand: "Citroen",
    model: "Xsara",
  },
  {
    id: "GB2913U",
    brand: "Fiat",
    model: "Punto",
  },
  {
    id: "GB8722N",
    brand: "Opel",
    model: "Astra",
  },
  {
    id: "FT5386P",
    brand: "Ford",
    model: "Focus",
  },
  {
    id: "MD4578T",
    brand: "Opel",
    model: "Corsa",
  },
  {
    id: "LP6572I",
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: "FU8929P",
    brand: "Fiat",
    model: "Uno",
  },
];
/**
 *
 * Utiliza los métodos map, filter o reduce para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

//1. Obtén la suma total de todas las edades de las personas.
const todasEdades= persons.map( item => item.age);
console.log(todasEdades);
const sumaTodasEdades = todasEdades.reduce((acc, e)=> acc + e,0);
console.log(sumaTodasEdades);

//2. Obtén la suma total de todas las edades de las personas francesas.
const personasFrancesas = persons.filter(item => item.country==="FR");
console.log(personasFrancesas);

const edadesFrancesas =  personasFrancesas.map(item => item.age);

const sumaEdadesFrancesas = edadesFrancesas.reduce((acc, e)=>acc + e,0);
console.log(sumaEdadesFrancesas);

//3. Obtén un array con el nombre de todas las mascotas.
const nombresMascotas = persons.map(item => item.pet.name);
console.log(nombresMascotas);

//4. Obtén un array con las personas que tengan gato.
const personasConGato = persons.filter(item => item.pet.type === "gato");
console.log(personasConGato);

// 5. Obtén un array con los coches de los españoles.
const personasEsp = persons.filter(item => item.country === "ES");
console.log(personasEsp);
const cochesDeEsp = personasEsp.map(item => item.car);
console.log("Estas son las matriculas de los coches de españoles "+ cochesDeEsp);

//6. Obtén un array con las personas que tengan un coche de la marca Ford.
const cochesFord= cars.filter(item => item.brand==="Ford");
console.log(cochesFord);
const matriculas = cochesFord.map(item => item.id);

let personasConCochesFord=[];

for(let i of matriculas){
  console.log(i);
  personasConCochesFord.push(persons.filter(item => item.car===i));
  
}
console.log(personasConCochesFord);

//7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
//       la info de su coche. Ejemplo a continuación:


const unirArrays=[...persons];
for (let i=0; i<unirArrays.length; i++){
  unirArrays[i].car= cars.find((element)=> unirArrays[i].car===element.id);

}
console.log(unirArrays);