
import express from 'express';

import añadirNota from './writeFile.js';
import leerNota from './readFile.js';



const app = express();

app.use(express.json());

let obj=[];

app.post('/messages', añadirNota);

app.get('/messages/:messageId', leerNota)





//Vamos a levantar el servidor
app.listen(3001, () => {
    console.log("Servidor escuchando en el puerto 3001");
  });


//Middleware de ruta no encontrada
app.use((req, res) => {
    res.status(400).send({ error: "Ruta no encontrada"});

});