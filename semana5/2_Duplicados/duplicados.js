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




//Resuelto por Samu

const removeDuplicados = (array) => {
  //---------------------------Se puede hacer asi
  //  const x= new Set(array);
  //  console.log(Array.from(x));

  //---------------------------------Tambien se puede hacer asi
//  return Array.from(new Set(array));

    //-------------------------------Tambien se puede hacer asi
    const setSinDuplicados = new Set();
    return [...setSinDuplicados];
}

removeDuplicados(names);


//Como usar map() sin modificar el array original. Para guardar un nuevo array con modificaciones del original se escriben en el return
const users = [
  {nombre:"A", apellido:"aa"},
  {nombre:"B", apellido:"bb"},
  {nombre:"C", apellido:"cc"}
];
const x = users.map((item) => {
  const {apellido}=item;
   return {nombre:"Lucas", apellido: apellido};
})

console.log(x);
console.log(users);