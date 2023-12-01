
import fs from 'fs/promises';
import express from 'express';


const app = express();

const leerNota = async (req, res) => {

    const {messageId} = req.params;
     console.log(messageId);

    const resultado = await fs.readFile('./data/messages.json', 'UTF-8',(error, data) => {     

        console.log("Entra aki", data);
        if(error){
            console.log('Ufff ha ocurrido un error' + error);
        }

        // const nota = data.filter(item => item.id ==messageId);
        // return nota;

    });
    
    //console.log(resultado.text);

    res.json(resultado)


};

export default leerNota;