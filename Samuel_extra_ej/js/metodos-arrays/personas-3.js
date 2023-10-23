"use strict";

/**
 *  =======================
 *  ··· P E R S O N A S ···
 *  =======================
 */

const persons = [
  {
    name: "Pedro",
    age: 35,
    code: "ES",
    infected: true,
    petName: "Troski",
  },
  {
    name: "Elisabeth",
    age: 14,
    code: "UK",
    infected: true,
    petName: "Firulais",
  },
  {
    name: "Pablo",
    age: 25,
    code: "ES",
    infected: false,
    petName: "Berritxu",
  },
  {
    name: "Angela",
    age: 18,
    code: "DE",
    infected: false,
    petName: "Noodle",
  },
  {
    name: "Boris",
    age: 50,
    code: "UK",
    infected: true,
    petName: "Leon",
  },
  {
    name: "Donald",
    age: 69,
    code: "US",
    infected: false,
    petName: "Pence",
  },
  {
    name: "Pepito",
    age: 36,
    code: "ES",
    infected: false,
    petName: "Carbón",
  },
];

/**
 *  =======================
 *  ··· M A S C O T A S ···
 *  =======================
 */
const pets = [
  {
    petName: "Troski",
    type: "perro",
  },
  {
    petName: "Firulais",
    type: "perro",
  },
  {
    petName: "Berritxu",
    type: "loro",
  },
  {
    petName: "Noodle",
    type: "araña",
  },
  {
    petName: "Leon",
    type: "gato",
  },
  {
    petName: "Pence",
    type: "perro",
  },
  {
    petName: "Carbón",
    type: "gato",
  },
];

/**
 *  =======================
 *  ··· A N I M A L E S ···
 *  =======================
 */
const animals = [
  {
    type: "perro",
    legs: 4,
  },
  {
    type: "araña",
    legs: 8,
  },
  {
    type: "gato",
    legs: 4,
  },
  {
    type: "loro",
    legs: 2,
  },
  {
    type: "gallina",
    legs: 2,
  },
];

/**
 *  ===================
 *  ··· P A Í S E S ···
 *  ===================
 */
const countries = [
  {
    code: "CN",
    name: "China",
    population: 1439,
    infected: 81999,
  },
  {
    code: "US",
    name: "Estados Unidos",
    population: 331,
    infected: 112468,
  },
  {
    code: "DE",
    name: "Alemania",
    population: 83,
    infected: 56202,
  },
  {
    code: "ES",
    name: "España",
    population: 46,
    infected: 72248,
  },
  {
    code: "UK",
    name: "Reino Unido",
    population: 67,
    infected: 17301,
  },
];

/**
 *  ###########################
 *  ## E J E R C I C I O   1 ##
 *  ###########################
 *
 *  Número total de infectados del array de personas.
 *
 */
let infectados=0;
for(let item of persons){
  if(item.infected){
    infectados++;
  }
}
console.log(`El numero total de infectados es ${infectados}`);
/**
 *  ###########################
 *  ## E J E R C I C I O   2 ##
 *  ###########################
 *
 *  Número total de infectados en el array de países.
 *
 */
let totalInfectadosPaises=0;

for(let i=0; i<countries.length; i++){
  totalInfectadosPaises +=countries[i].infected;
}

console.log(`El numero total de infectados es ${totalInfectadosPaises}`);

/**
 *  ###########################
 *  ## E J E R C I C I O   3 ##
 *  ###########################
 *
 *  País con más infectados.
 *
 */
const arrayInfectados= countries.map(item => item.infected);
console.log(arrayInfectados);
const mayorNumeroDeInfectados= arrayInfectados.reduce((a,b)=> (a>b)? a:b);

console.log(mayorNumeroDeInfectados);
const indicePais= arrayInfectados.findIndex(e => e===mayorNumeroDeInfectados);

console.log(indicePais);
console.log(`El pais con mas infectados es ${countries[indicePais].name}`);

/**
 *  ###########################
 *  ## E J E R C I C I O   4 ##
 *  ###########################
 *
 *  Array con el nombre de todas las mascotas.
 *
 */
const nombresMascotas= pets.map(item => { return item.petName});
console.log(nombresMascotas);

/**
 *  ###########################
 *  ## E J E R C I C I O   5 ##
 *  ###########################
 *
 *  Array de españoles con perro.
 *
 */
const arrayDeEspañoles= persons.filter(item => item.code==='ES');
console.log(arrayDeEspañoles);
let contadorDePerros=0;
for (let i=0; i<arrayDeEspañoles.length; i++){
  
  for(let item of pets){
    if (item.petName ===arrayDeEspañoles[i].petName){
      if(item.type === "perro"){
        contadorDePerros++;
      }
    
    }
  }
}
console.log(`El numero de españoles con perro es ${contadorDePerros}`);

/**
 *  ###########################
 *  ## E J E R C I C I O   6 ##
 *  ###########################
 *
 *  Array con las personas. A mayores, este array debe incluír el objeto con los datos de su mascota.
 *
 *  {
 *      name: 'Pedro',
 *      age: 35,
 *      country: 'ES',
 *      infected: true,
 *      petName: {
 *          petName: 'Troski',
 *          type: 'perro',
 *      }
 *  }
 *
 */

//Este ejercicio me modifica el array original persons , YA NO---------------------------------------------------------------------------------------------------

//const fichaConMascota = [...persons];//Copia superficial
const fichaConMascota= JSON.parse(JSON.stringify(persons));//copia profunda, NO MODIFICA ORIGINAL

for(let i=0; i<fichaConMascota.length; i++){

  for(let element of pets){
    
    if(fichaConMascota[i].petName===element.petName)
       //fichaConMascota[i].petName= {'petName': element.petName, 'type': element.type};//Tambien asi
      fichaConMascota[i].petName= element;
  }
};

console.log(fichaConMascota);

//Este ejercicio me modifica el array original persons -----------------------------------------------------------------------------------------------------

/**
 *  ###########################
 *  ## E J E R C I C I O   7 ##
 *  ###########################
 *
 *  Número total de patas de las mascotas.
 *
 */

const arrayDePatas= animals.map(item => item.legs);
//console.log(arrayDePatas);
const totalDePatas= arrayDePatas.reduce((acc,b) => acc +b);
console.log(`El total de patas de las mascotas es: ${totalDePatas}`);

/**
 *  ###########################
 *  ## E J E R C I C I O   8 ##
 *  ###########################
 *
 *  Array con las personas que tienen animales de 4 patas
 *
 */
let mascotasCuatroPatas= animals.filter(item => {
  console.log(item.type);
  if(item.legs===4){
    return item.type;
  }
});
mascotasCuatroPatas= mascotasCuatroPatas.map(item => {return item.type});
console.log(mascotasCuatroPatas);

const nombresMascotas4Patas= [];
for(let item of pets){
  for(let element of mascotasCuatroPatas){
    if (item.type===element){
      nombresMascotas4Patas.push(item.petName);
    }
  }
}
console.log('Nombres de las mascotas de 4 patas: '+ nombresMascotas4Patas);

const arrayPersonasConMascotas4Patas= [];
for(let item of persons){
  for(let element of nombresMascotas4Patas){
  
    if (item.petName===element){
      arrayPersonasConMascotas4Patas.push(item);
    }
  }
}
console.log("Array de las personas con mascotas de 4 patas");
console.log(arrayPersonasConMascotas4Patas);


/**
 *  ###########################
 *  ## E J E R C I C I O   9 ##
 *  ###########################
 *
 *  Array de países que tienen personas con loros como mascota.
 *
 */

/**
 *  #############################
 *  ## E J E R C I C I O   1 0 ##
 *  #############################
 *
 *  Número de infectados totales (en el array de países) de los países con mascotas de ocho patas.
 *
 */
