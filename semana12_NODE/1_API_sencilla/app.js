import express from 'express';
import fs from 'fs/promises';

import { añadirNota } from './writeFile.js';
import { leerNota } from './readFile.js';


const app =express();

app.use(express.json());


app.post('/messages', añadirNota);



app.get('/messages/:messageId', leerNota);




//Levantamos el servidor
app.listen(3001, () => {
    console.log(`Server listening on 3001`);
  });
  