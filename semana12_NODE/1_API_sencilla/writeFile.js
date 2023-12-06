import express from 'express';
import fs from 'fs/promises';
import { randomUUID } from 'crypto';

const app =express();
app.use(express.json());

export const addNote = async (req, res)=>{
    try{

    let obj=[]; 

        try{
            const json_notes = await fs.readFile('./data/messages.json', 'utf-8');    
            obj=JSON.parse(json_notes);
        }catch(err){
            await fs.mkdir('./data');        
        }     
        
        console.log(obj);   


    const {text}= req.body;
     const id=randomUUID();  
    const nota = {
        id:id,
        text        
    }

    obj.push(nota);
    const objJSON= JSON.stringify(obj);    

    

    const resultado= await fs.writeFile('./data/messages.json', objJSON, 'UTF-8', function (error) {
        if(error){
            console.log('Ufff ha ocurrido un error' + error);
        }
    });    
    
    res.json(resultado);
    
    }catch(error){
        console.error(error);
    }
}
