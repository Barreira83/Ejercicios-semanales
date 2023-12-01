import fs from 'fs/promises';
import express from 'express';
import { uuid } from 'uuidv4';
import { handleError, notFound } from './middlewares/index.js';

const app = express();

//Middleware para poder recibir objetos JSON
app.use(express.json());
let objetoJSON=[];

app.post('/messages', async (req, res) => {

    const {text}= req.body;
    const id=uuid();

    const notas = {
        id:id,
        text: text
    }
    
    const notasJSON= JSON.stringify(notas);

    objetoJSON.push(notasJSON);
    console.log(objetoJSON);

    const resultado = await fs.writeFile('./data/messages.json', objetoJSON, 'UTF-8', function (error) {
        if(error){
            console.log('Ufff ha ocurrido un error' + error);
        }
    });

        res.json(resultado)

    });


app.get('/messages/:messageId', async (req, res) => {

        const {messageId} = req.params;

        const [resultado] = await fs.readFile('./data/messages.json', 'UTF-8', function(error, data) {

            if(error){
                console.log('Ufff ha ocurrido un error' + error);
            }
                data.findIndex(item => objetoJSON.id == item.id); 
        });
        
        res.json(resultado.data)


    });
    





//Vamos a levantar el servidor
app.listen(3001, () => {
    console.log("Servidor escuchando en el puerto 3001");
  });



app.use(notFound);
app.use(handleError);