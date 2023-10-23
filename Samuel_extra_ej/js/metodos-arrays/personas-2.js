"use strict";

const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: "39000",
  },
];

// Exercises

// 1) ¿Cuál es el salario medio de las personas del array?
const salarios = people.map(item => Number(item.salary));//Con Number convierto string a numero
console.log(salarios);

const salarioMedio =Math.floor((salarios.reduce((acc,b) => acc+b,0))/salarios.length);
console.log(`Salario medio: ${salarioMedio}`);


// 2) Obtén un array con los mayores de 35 años (mirar objeto Date())

const hoy= new Date();
const fechaMenos35= hoy.getFullYear()-35;
console.log(`Data nacidos ai 35 anos ${fechaMenos35}`);


const arrayAñoNacimiento= people.map((item) => {
  const anioMenos35= item.DOB.split('/');
  return Number(anioMenos35[2]);  
});
console.log(arrayAñoNacimiento);

const maiores35=[];
for (let i=0; i<people.length;i++){
  if(arrayAñoNacimiento[i]< fechaMenos35){
    maiores35.push(people[i]);
  }
}
console.log(maiores35);



// 3) Obtén un array con los nombres completos de las personas
const nombreCompleto = [];
for(let item of people){
  nombreCompleto.push(`${item.firstName} ${item.lastName}`);
}
console.log(nombreCompleto);

// 4) Ordena el array desde los más jóvenes hasta los más mallores
const copiaPeople=[...people];
const ordenadosMenorAMayor= copiaPeople.sort((a,b) => {
   const yearA= a.DOB.split('/');
   const anioA=Number(yearA[2]);  
   const yearB= b.DOB.split('/');
   const anioB=Number(yearB[2]);  

  if(anioA>anioB){
    return -1;
  }
  if(anioA<anioB){
    return 1;
  }
  if(anioA ===anioB){
    return 0;
  }
});
console.log(ordenadosMenorAMayor);


// 5) ¿Cuánta gente hay en cada departamento?

const gentePorDepartamento= new Map;

for(let item of people){
    let contador=0;
  
    for(let i=0; i<people.length; i++) {
    
       if(item.department=== people[i].department){
         contador++;
         }
     }
   gentePorDepartamento.set(item.department, contador);
  }

  console.log("Personas por departamento:", gentePorDepartamento);