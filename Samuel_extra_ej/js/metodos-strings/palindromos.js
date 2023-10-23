/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea un programa que compruebe si un string es palíndromo, es decir, que se lee igual
 * del derecho que del revés. Por ejemplo, "Arriba la birra" es un palíndromo.
 *
 * Nota: el string que utilizaremos como input no debe tener caracteres no presentes
 * en el alfabeto inglés ni símbolos.
 *
 */


// [^A-Z] coincide cualquier cosa que no este encerrada entre A y Z 
// [^a-z] coincide cualquier cosa que no este encerrada entre a y z
// [^0-9]  coincide cualquier cosa que no este encerrada entre 0 y 9
// [^_] coincide cualquier cosa que no este encerrada en _


function palindrome(str) {
    var re = /[\W_]/g; //o tambien [^A-Za-z0–9]/g

            //var lowRegStr = str.toLowerCase().replace(re, '');
            
    var lowRegStr= str.replace(re, '');//Usamos una expresion regular "/[\W_]/g", para eliminar todo lo que no sean letras o numeros
    console.log(lowRegStr);
    lowRegStr = lowRegStr.toLowerCase();//Ponemos todo en minusculas
    console.log(lowRegStr);

            // var reverseStr = lowRegStr.split('').reverse().join(''); 

    var reverseStr = lowRegStr.split(''); //Separamos cada caracter en un array
    console.log(reverseStr);
    reverseStr = reverseStr.reverse();//usamos reverse para dar la vuelta al array
    console.log(reverseStr);
    reverseStr = reverseStr.join('');//usamos join para volver a juntar el array
    console.log(reverseStr);


    return reverseStr === lowRegStr;
  }
//   let frase= prompt('Escibe un palindromo:')
//   console.log(palindrome(frase));

//console.log(palindrome("A man, a plan, a canal. Panama"));
palindrome("A man, a plan, a canal. Panama");



// function palindrome(str) {
//     var re = /[\W_]/g; //o tambien [^A-Za-z0–9]/g

//     var lowRegStr = str.toLowerCase().replace(re, '');
//     console.log(lowRegStr);
//     var reverseStr = lowRegStr.split('').reverse().join(''); 

//     console.log(reverseStr);
//     return reverseStr === lowRegStr;
//   }
// //   let frase= prompt('Escibe un palindromo:')
// //   console.log(palindrome(frase));

// //console.log(palindrome("A man, a plan, a canal. Panama"));
// palindrome("A man, a plan, a canal. Panama")