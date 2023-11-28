/*
 EJERCICIOS
2. Variables de entorno		

    Crea un fichero .env y añade la variable de entorno MODE.

    En un fichero index.js: 

         Si MODE es igual a development, muestra: "El modo activado es el de desarrollo".

        Si MODE es igual a production, muestra: "El modo activado es el de producción" .

        Si MODE no está establecida o tiene un valor diferente, muestra: "Por favor, establece la variable de entorno MODE a 'development' o 'production'".

    Haz que Git ignore el fichero .env y la carpeta node_modules.

    Crea un script personalizado con el nombre de start que ejecute el archivo index.js con Node.
*/ 
import dotenv from 'dotenv';

dotenv.config();

const { MODE } = process.env;
console.log(MODE);
if (MODE === 'development') {
    console.log('El modo activado es el de desarrollo');
} else if (MODE === 'production') {
    console.log('El modo activado es el de producción');
} else {
    console.log(
        'Por favor, establece la variable de entorno MODE a "development" o "production"'
    );
}