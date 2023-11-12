"use strict";
// Edita el archivo index.js para crear el código necesario para que partiendo del array de puntuaciones propuesto se imprima por la consola el mejor y peor equipo con su total de puntos respectivo.
// puntuaciones primera ronda

const firstRound = [
  { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
  { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
  { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
  { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
  { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
  { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
  { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
  { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
];

// Escribe aquí tu código
// El mejor equipo es Toros Negros con un total de 28 puntos
// El peor equipo es Ciervos Celestes con un total de 10 puntos
const puntosTotales = firstRound.map((item) => {
  let { scores: puntos } = item;
  return puntos.reduce((acc, b) => acc + b,0);
});
console.log(puntosTotales);

function buscaElMejor(arr) {
  let x = arr.reduce((x, y) => (x > y ? x : y));
  console.log(x);
  let indice = arr.findIndex((element) => element === x);
  console.log("Indice: "+indice);

  return indice;
}
const indiceDelMejor = buscaElMejor(puntosTotales);

function buscaElPeor(arr) {
  let x = arr.reduce((x, y) => (x < y ? x : y));
  console.log(x);
  let indice = arr.findIndex((element) => element === x);
  console.log("Indice: "+indice);

  return indice;
}
const indiceDelPeor = buscaElPeor(puntosTotales);

console.log(`El mejor equipo es ${firstRound[indiceDelMejor].team} con un total de ${puntosTotales[indiceDelMejor]} puntos`);

console.log(`El peor equipo es ${firstRound[indiceDelPeor].team} con un total de ${puntosTotales[indiceDelPeor]} puntos`);


//Resuelto por Samu
console.log('Resuelto por Samu-------------------------------------------------');
const firstRoundWithtTotalScores = firstRound.map((object)=> {
  const scoresSum =object.scores.reduce((acc, score)=> {
    return acc +score;
  },0);
  return {
    team: object.team,
    scores: scoresSum, 
  };
});

firstRoundWithtTotalScores.sort((a,b)=> {
  return a.scores -b.scores;
});
console.log(firstRoundWithtTotalScores);

const worst= firstRoundWithtTotalScores[0];
const best= firstRoundWithtTotalScores[firstRoundWithtTotalScores.length-1];

console.log(
  `El mejor equipo es ${best.team} con un total de ${best.scores} puntos`
);

console.log(
  `El peor equipo es ${worst.team} con un total de ${worst.scores} puntos`
);


console.log('Resuelto por Samu segunda forma-------------------------------------------------');

let best2= {team:"", scores: 0};
let worst2 = {team:"", scores: Infinity};// si fuese 0 ya seria el peor

for (const objeto of firstRound){
  const totalScores = objeto.scores.reduce((acc, scores)=> acc + scores, 0);

  if(totalScores > best2.scores){
    //best= objeto;             //Guardo el objeto entero en variable best
    //  best = {{team2:objeto.team, scores: totalScores};}
    best2= { ...objeto, scores: totalScores};
  }
}

  if(totalScores < worst2.scores){  
    worst2= { ...objeto, scores: totalScores};
  }


console.log(
  `El mejor equipo es ${best2.team} con un total de ${best2.scores} puntos`
);

console.log(
  `El peor equipo es ${worst2.team} con un total de ${worst2.scores} puntos`
);
