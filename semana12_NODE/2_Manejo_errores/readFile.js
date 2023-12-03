import express from 'express';
import fs from 'fs/promises';

const app =express();

app.use(express.json());

export const leerNota = async (req, res, next)=>{
try{
    const {messageId} = req.params;
     console.log(messageId);

     const resultado = await fs.readFile('./data/messages.json', 'UTF-8',(error) => {         
        if(error){
            console.log('Ufff ha ocurrido un error' + error);
        }    
    });

    const json = JSON.parse(resultado);
    const objetoID = json.find(objeto => objeto.id === messageId);
    console.log(objetoID);
        
    if(objetoID !== undefined){
        res.json(objetoID.text);
    }else{
        throw new Error ('Mensaje no encontrado');       
    
    }
    
}catch (error){
    next(error);

}

}