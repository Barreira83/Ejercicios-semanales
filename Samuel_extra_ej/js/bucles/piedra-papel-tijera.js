"use strict";

/**
 *
 * ¿Te suena el juego piedra, papel o tijera? Pues manos a la obra.
 *
 *      - El usuario juega a través del Prompt
 *
 *      - Tu oponente será la computadora
 *
 *      - Gana el primero que consiga 3 puntos
 *
 */

const juego= ['piedra', 'papel', 'tijera'];
let convertirAIndice=0;
const opcion = prompt("¿piedra, papel o tijera?");
if(opcion=='piedra'){ convertirAIndice=0;};
if(opcion=='papel'){ convertirAIndice=1;};
if(opcion=='tijera'){ convertirAIndice=2;};

function jugar(num) {
    const opcionPC=Math.floor(Math.random()* 3); 
    console.log(opcionPC, num);
    if(num===opcionPC){
        console.log("Repetir tirada");
    }else if(num===0 && opcionPC===1 || num===1 && opcionPC===0 || num===2 && opcionPC===1 ){
        console.log("Gana jugador");
        }else{
            console.log("Gana ordenador");
        }
    }

jugar(convertirAIndice);
