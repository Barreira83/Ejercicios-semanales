'use strict';
let min=1;
let max=6;
let numeroDado=0;



numeroDado = Math.floor(Math.random() * (max - min + 1)+ min);
if (numeroDado==1){
    console.log("Avanza " + numeroDado + " casilla");
}
else{
    console.log("Avanza " + numeroDado + " casillas");
}
