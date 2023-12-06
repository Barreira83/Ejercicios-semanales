import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

//Ruta al fichero donde se almacenan los mensajes
const messagesPath = path.join(process.cwd(), 'data', 'messages.json');
const app =express();

//Middleware para procesar los body en formato JSON
app.use(express.json());

//Middleware que permite crear nuevo mensaje
app.post('/messages', async (req, res)=>{
try{

//Obtenemos el texto del mensaje
const {text} = req.body;

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
}
});


//Middleware para leer un mensaje concreto
app.get('/messages/:messageId', async (req, res) => {
  try{
    //Obtenemos el path param que nos interesa
    const {messageId} = req.params;
    const messages = JSON.parse(await fs.readFile(messagesPath));

    //Localizamos el mensaje que nos interesa
    const message = messages.find((message) => message.id === messageId);

    //enviamos respuesta al cliente
    res.send({
      status: 'ok',
      data:{
        message
      }
    })

  }catch(err){
    console.error(err);
  }
})




//Middleware de ruta no encontrada
app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    messages: 'Ruta no encontrada'
  });
});

//Levantamos el servidor
app.listen(3001, () => {
    console.log(`Server listening on 3001`);
  });
  
