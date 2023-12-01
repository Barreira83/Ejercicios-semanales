import fs from 'fs/promises';
import express from 'express';
import { randomUUID } from 'crypto';

const obj=[];
const app = express();

const añadirNota = async (req,res) => {

    const {text}= req.body;
    const id=randomUUID();

    

    const notas = {
        id:id,
        text: text
    }
    
    const notasJSON= JSON.stringify(notas);
    obj.push(notasJSON);
    console.log("Ata aki ben", obj);


    const resultado= await fs.writeFile('./data/messages.json', obj, 'UTF-8', function (error) {
        if(error){
            console.log('Ufff ha ocurrido un error' + error);
        }
    });    
    
    res.json(resultado)
    
};

export default añadirNota;