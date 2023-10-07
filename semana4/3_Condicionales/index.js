'use strict';
let nombre="Marta";
let edad= 27;

if (nombre="Marta" && edad < 12){
    console.log("A Marta le corresponde el descuento infantil");
}else if(nombre="Marta" && edad > 12 && edad < 30 ){
    console.log("A Marta le corresponde el descuento juvenil");
}else if(nombre="Marta" && edad > 60 ){
    console.log("A Marta le corresponde el descuento de jubilados");
}else{
    console.log("A Marta no le corresponde ningún descuento");
    }