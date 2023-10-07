"use strict";

// Escribe aquí tu código
for(let i=0; i<=23; i++){
    if(i<8 || i>22){
        console.log("Son las "+i+":00");
    }else if(i>=8 && i<13){
        let cu= " CUCÚ!";
        let hora="Son las "+i+":00."
           let cucus="";
            for(let j=1; j<=i; j++){
                cucus+= cu;
            }

          console.log( hora + cucus);
    }else if (i>=13 && i<23){
        let cu= " CUCÚ!";
        let hora="Son las "+i+":00."
           let cucus="";
            for(let j=13; j<=i; j++){
                cucus+= cu;
            }
            console.log( hora + cucus);


    }
}