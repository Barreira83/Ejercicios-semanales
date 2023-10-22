"use strict";

/**
 * Dado un array de booleanos, los true serán
 * pacientes infectados y los false serán pacientes sanos. Los pacientes
 * infectados, contagian a los que tengan a su izquierda y a su derecha
 *
 * EJEMPLO:
 * Si tenemos este array de pacientes:
 * [true, false, true, false, false, false, true, true]
 *
 * Deberá sacar por consola este:
 * [true, true, true, true, false, true, true, true]
 *
 */
// const pacientes = [true, false, true, false, false, false, true, true];
// const contagiados=[];

// function evaluaContagio(arr) {
//     //console.log(arr);
    
//     for (let item of arr){
//         console.log(item); 
//         if(item === true){
//             contagiados[item]= true;
//             contagiados[item+1]= true;
//         }else{
//             contagiados[item]= item;
//         }   
//     }
//     console.log(contagiados);
// }

// evaluaContagio(pacientes);
//console.log(contagiados);
//[true, true, true, true, false, true, true, true]


//Resuelto por Samu

const patients = [true, false, true, false, false, false, true, true];
const patientsInfected=[...patients];
for (let i=0; i<patients.length; i++){
    
    if(patients[i]){
        if(patients[i-1]!==undefined){
            patientsInfected[i-1]=true;
        }
        if(patients[i+1]!==undefined){
            patientsInfected[i+1]=true;
        }          
    }
}
console.log(patientsInfected);
console.log(patients);



const a=setInterval(() => {
    console.log("patata");
}, 2000);

setTimeout(() => {
    clearInterval(a)
}, 5000)

