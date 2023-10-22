//Ejemplo que deberia mostrar por consola
// Valor del contador: 5
// Valor del contador: 10
// Crea un programa que incremente cada segundo un contador (incremento de 1) y que imprima en la consola cada 5 segundos el valor del contador.
// Cuando tengas eso hecho, crea una función que se encargue de parar el temporizador anterior después de un tiempo arbitrario. Esta función recibirá un parámetro que corresponderá al tiempo en segundos. Cuando pare el temporizador, debe mostrar un mensaje en la consola indicando que se paró.
"use strict"

//Escribe aquí tu código
let contador = 8;

const intervalo = setInterval(() => {
    contador++;
    //console.log(contador);
}, 1000);

const mostrarIntervalo= setInterval(() =>{
    console.log(`Valor del contador: ${contador}`);
 },5000);





const tiempoAleatorio = (Math.floor(Math.random()*(20-1)+1))*1000;
console.log(`El tiempo aleatorio es ${tiempoAleatorio}`);


function pararTemporizador(tiempo){
     setTimeout(() =>{

        clearInterval(intervalo);
        clearInterval(mostrarIntervalo);
        contador=0;
        console.log(`El intervalo se ha detenido despues de ${tiempo} segundos`);
    }, tiempo);
}
pararTemporizador(tiempoAleatorio);
