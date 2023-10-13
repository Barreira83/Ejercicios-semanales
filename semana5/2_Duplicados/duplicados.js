'use strict'
const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];



const nombresNoRepetidos = [];
names.forEach((item)=>{   //Coje cada valor en la variable item

    if(!nombresNoRepetidos.includes(item)){ //Si el contenido de item NO ESTA INCLIDO en el array nombreNoRepedidos, coloco el valor de item en el nuevo array
    nombresNoRepetidos.push(item);
  }
})
console.log(nombresNoRepetidos);
