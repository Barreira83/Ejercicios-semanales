"use strict";

/**
 *
 * Crea una función llamada "getShirtsInfo" que reciba por parámetro
 * un carrito de la compra y compruebe lo siguiente:
 *
 *  - Comprobar si el ususario ha comprado alguna camisa y sacar en consola "Ha comprado alguna camisa/s" o "No ha comprado camisas", según el caso.
 *
 *  - Comprobar si el usuario solo ha comprado camisas, si es así sacar `por consola "Compra masiva de camisas" si no "Compra normal"
 *
 * PISTA: Utiliza los métodos .some() y .every()
 *
 * */

const getShirtsInfo = (cart) => {
  
  const camisa= cart.some(element => element.name==='camisa');
  if (camisa){
    console.log("Ha comprado alguna camisa/s");
  }else{
    console.log("No ha comprado camisas");
  }
  
  
  const soloCamisas= cart.every((element)=> element.name==='camisa');
  if (soloCamisas){
    console.log("Compra masiva de camisas");
  }else{
    console.log("Compra normal");
  } 
  
};

// getShirtsInfo([
//   { name: "camisa", price: 20, units: 2 },
//   { name: "calcetines", price: 5, units: 5 },
//   { name: "chaqueta", price: 80, units: 1 },
//   { name: "pantalon", price: 50, units: 3 },
// ]);



getShirtsInfo([
  { name: "camisa", price: 20, units: 2 },
  { name: "camisa", price: 5, units: 5 },
  { name: "camisa", price: 80, units: 1 },
  { name: "camisa", price: 50, units: 3 },
]);
