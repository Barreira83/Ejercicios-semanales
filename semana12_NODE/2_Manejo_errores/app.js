import express from 'express';


import { addNote } from './writeFile.js';
import { leerNota } from './readFile.js';
import notFound from './notFound.js';
import handleError from './handleError.js';


const app =express();

app.use(express.json());


app.post('/messages', addNote);



app.get('/messages/:messageId', leerNota);




//Levantamos el servidor
app.listen(3001, () => {
    console.log(`Server listening on 3001`);
  });
  

  app.use(notFound);
  app.use(handleError);
