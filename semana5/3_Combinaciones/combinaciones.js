'use strict'
const pizzas = [
    "margarita",
    "cuatro quesos",
    "prosciutto",
    "carbonara",
    "barbacoa",
    "tropical",
  ];
  
  function combine(pizzas) {
      const combinations = [];
        for (let mitad1 of pizzas){
            for (let mitad2 of pizzas){
            
                if (mitad1 != mitad2 && !combinations.includes(`${mitad2} y ${mitad1}`)){                
                    combinations.push(`${mitad1} y ${mitad2}`);                
                }                
            }
        }
        
     return combinations;
  }
 
  console.log(combine(pizzas));


  //Resuelto por Samu
  function combine(pizzas) {
    const combinations=[];
        for(let i=0;i< pizzas.length; i++ ){
            const primeraMitad= pizzas[i];
            for(let j=i+1; j<pizzas.length; j++){
                const segundaMitad = pizzas[j];
                //console.log(primeraMitad, segundaMitad);
                combinations.push(`${primeraMitad} y ${segundaMitad}`);

            }
        }



    return combinations;
  }
  console.log(combine(pizzas));