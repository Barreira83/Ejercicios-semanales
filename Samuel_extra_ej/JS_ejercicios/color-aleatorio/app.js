//Seleccionar los elementos del DOM
const boton = document.querySelector('button');

const color = document.getElementById('color');

function generarColorHexAleatorio() {
  let digitos = '0123456789ABCDEF';
  let colorHex = '#';

  for (let i=0; i<6; i++) {
    //Buscamos un indice aleatorio dentro de digitos y lo redondeamos
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex+= digitos[indiceAleatorio];
  }
return colorHex;
}


//Asociamos el click a la funcion
boton.addEventListener('click', function() {
  let colorAleatorio = generarColorHexAleatorio();
  //Actualizar el texto
  color.textContent = colorAleatorio;
  //Actualizar el color del fondo
  document.body.style.backgroundColor = colorAleatorio;
})
