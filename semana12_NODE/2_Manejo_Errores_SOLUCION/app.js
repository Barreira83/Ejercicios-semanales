import dotenv from 'dotenv';

import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import morgan from 'morgan';


dotenv.config();
const { PORT } = process.env;

//Ruta al fichero donde se almacenan los mensajes
const messagesPath = path.join(process.cwd(), 'data', 'messages.json');
const app =express();

//Middleware para procesar los body en formato JSON
app.use(express.json());

//Middleware que muestra por consola informacion de la peticion entrante
//GET /messages/e7c6bd7a-c197-40d5-8ebb-6a387a06bd7e 200 3.264 ms - 105
app.use(morgan('dev'));


//Middleware que permite crear nuevo mensaje
app.post('/messages', async (req, res, next)=>{
try{

      //Obtenemos el texto del mensaje
      const {text} = req.body;

      //Si falta texto lanzamos un error
      if(!text){
        const err = new Error ('Faltan campos');
        err.httpStatus= 400;
        throw err;
      }

      //Hacemos la conversion de JSON a JavaScript
      const messages = JSON.parse(await fs.readFile(messagesPath));


      //Insertamos nuevo mensaje
      messages.push({
        id: crypto.randomUUID(),
        text
      });

      //Actualizamos el JSON de mensajes
      await fs.writeFile(messagesPath, JSON.stringify(messages,null, 4));

      res.status(201).send({
        status: 'ok',
        messages: 'Mensaje creado'
      });

}catch (err){
  console.error(err);
 next(err);
}
});


//Middleware para leer un mensaje concreto
app.get('/messages/:messageId', async (req, res, next) => {
  try{
        //Obtenemos el path param que nos interesa
        const {messageId} = req.params;
        const messages = JSON.parse(await fs.readFile(messagesPath));

        //Localizamos el mensaje que nos interesa
        const message = messages.find((message) => message.id === messageId);

        //Si no se ha encontrado ningun mensaje lanzamos un error
        if(!message){
          const err = new Error ('Mensaje no encontrado');
          err.httpStatus= 404;
        throw err;
      }

        //enviamos respuesta al cliente
        res.send({
          status: 'ok',
          data:{
            message
          }
        })

  }catch(err){
    console.error(err);
    next(err);
  }
})

//Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err);

    res.status(err.httpStatus || 500).send({
      status: 'error',
      messages: err.message
    });
});


//Middleware de ruta no encontrada
app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    messages: 'Ruta no encontrada'
  });
});

//Levantamos el servidor
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
  
