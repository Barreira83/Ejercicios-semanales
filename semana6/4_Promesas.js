// En el archivo index.js hay una función que crea y devuelve una promesa (analiza el código).

// Gestiona la promesa con then/catch/finallypara hacer:

// un console.log en el caso de que la promesa se resuelva correctamente

// un console.error en caso de que la promesa no se resuelva correctamente

// siempre un console.log con el mensaje "¡Prueba completada!"

// Ejemplo de lo que debería imprimir en la consola (promesa resuelta correctamente):
// Todo bien: 6
// ¡Prueba completada!

// Ejemplo de lo que debería imprimir en la consola (promesa no resuelta correctamente):
// Tenemos un problema: 1
// ¡Prueba completada!

"use strict";

function myFuncion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 10);
      if (random >= 5) {
        resolve(`Todo bien: ${random}`);
      } else {
        reject(`Tenemos un problema: ${random}`);
      }
    }, 2000);
  });
}

const myPromise = myFuncion();

// Escribe aquí tu código

myPromise
  .then((resultado) => console.log(resultado))
  .catch((resultado) => console.error(resultado))
  .finally(() => console.log("¡Prueba completada!"))



  //Resuelto por samu

myFuncion()
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.error(error)
    })
    .finally(()=>{
      console.log("¡Prueba completada!");
    })