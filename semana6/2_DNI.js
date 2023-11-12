'use strict'
/*El Documento Nacional de Identidad de España (DNI) es el documento de identidad que se expide en España, cada DNI tiene un identificador único compuesto por un número de 8 cifras y una letra, por ejemplo: 99999999-R

¿Sabías que la letra del DNI es un sistema de validación, ya que se obtiene a partir del número mediante un sencillo algoritmo?

Para obtener la letra correspondiente a un número de DNI hay que obtener el resto (en la documentación de JavaScript puedes buscar el operador aritmético para calcular el resto)** **de la división del número entre 23. Ese resto será un número entre 0 y 22. Si usamos ese número como índice en el siguiente Array la letra será la correspondiente a ese índice:
Tienes que centralizar el sistema de errores (un único console.error). Si alguna de las comprobaciones falla, lanzar un error de JavaScript  que diga "ERROR:" y el mensaje correspondiente.

Para esto tienes que usar throw, el objeto Error de JavaScript y try/catch


*/

function validateDNI(dni) {
    const letras = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
    ];
  
    console.log(`Analizo ${dni} ...`);
  try{
  
    // compruebo que sea un string de 10 caracteres
    if (typeof dni !== "string" || dni.length !== 10) {
      throw new Error(
        'ERROR: el DNI tiene que ser una cadena de texto de 10 caracteres (guión incluido)'
      );
      return;//Sobra el return porque el throw ya te saca de la funcion
    }
  
    // separo el DNI por el guión
    const dniArray = dni.split("-"); // ["00000000", "T"]
  
    // compruebo que tenga uno y un sólo "-"
    if (dniArray.length !== 2) {
      throw new Error(
        "ERROR: el DNI tiene que llevar uno y un sólo '-'"
      );      
    }
  
    const [numeros, letra] = dniArray;
  
    // compruebo que la primera parte sea un número de 8 cifras
    if (numeros.length !== 8 || isNaN(numeros)) {
      throw new Error(
        "ERROR: la primera parte del DNI tiene que ser compuesta por 8 números"
      );    
    }
  
    // compruebo que el último carácter sea una letra
    if (!isNaN(parseInt(letra))) {
      throw new Error(
        "ERROR: el último carácter del DNI tiene que ser una letra"
      );    
    }
  
    // compruebo que la letra sea valida
    if (letra.toUpperCase() !== letras[numeros % 23]) {
      throw new Error("ERROR: la letra del DNI no es valida");
    }
      // DNI es valido
      console.log(`DNI valido`);
}
catch (error){
  console.log(error);
  //console.error("ERROR: " + error.massage);
  //console.log(`${error.name}: ${error.massage}`); //El mensaje es undefine
}  
}
  
  // dni valido
  validateDNI("00000000-T");
  
  // descomentar y comprobar los errores
  validateDNI("00000000-TT");
  validateDNI("00000000TT");
  validateDNI("00000A00-T");
  validateDNI("00000000-9");
  validateDNI("00000000-A");

  
  


