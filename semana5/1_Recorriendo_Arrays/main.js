'use strict'
const people = [
    {
      name: "Maria",
      age: 20,
    },
    {
      name: "Ana",
      age: 14,
    },
    {
      name: "Luis",
      age: 16,
    },
    {
      name: "Pepe",
      age: 35,
    },
    {
      name: "Manuel",
      age: 50,
    },
    {
      name: "Teresa",
      age: 12,
    },
    {
      name: "Daniel",
      age: 27,
    },
    {
      name: "Irene",
      age: 23,
    },
    {
      name: "Alex",
      age: 10,
    },
  ];
  
  function mayor18(nombre, edad) {
    if(edad>=18){
        console.log(`${nombre} es mayor de edad`);
        }else{
        console.log(`${nombre} es menor de edad`);
        }
  }

  for(let i=0;i<people.length;i++){
    mayor18(people[i].name, people[i].age);    
  }
 

  //Resuelto por samu


const logIfIsAdult = (name, age)=>{
  if (eage<18) {
    console.log(`${name} es menor de edad`);
  }else{
    console.log(`${name} es mayor de edad`);
  }
}

for(let i=0; i<people.length; i++){
  const {name, age} = people[i];
  logIfIsAdult(name, age);
}