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