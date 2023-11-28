
import chalk from 'chalk';




// Array con el nombre de los argumetnos válidos.
const validArgvs = ['--dirname', '--time'];

// Ruta absoluta del directorio que contiene el archivo en ejecución.
const dirname = process.cwd();

// Obtenemos los argumentos a partir de la posición 2 del array de argumentos.
const args = process.argv.slice(2);

const date = new Date();
  
  // Formatea la hora en el formato hh:mm:ss
const hora = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
 
// Función principal.
const main = async () => {
    try {
        // Lanzamos un error si hay argumentos no válidos a partir de la posición 2.
        for (const argv of args) {
            if (!validArgvs.includes(argv)) {
                throw new Error(`El argumento "${argv}" no es válido.`);
            }
        }

        // Si existe el argumento "--dirname" mostramos la ruta absoluta al directorio del archivo actual.
        if (args.includes('--dirname')) {
            console.log(chalk.blue(`Directorio: ${dirname}`));
        }
        
        // Si existe el argumento "--time" mostramos la fecha y hora actuales.
        if (args.includes('--time')) {
            console.log(chalk.blue(`Hora: ${hora}`));
        }

        
    } catch (err) {        
            console.error(chalk.red(err));        
    }
};

// Llamamos a la función principal.
main();

