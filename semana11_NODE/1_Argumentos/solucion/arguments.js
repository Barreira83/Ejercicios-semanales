//Importamos chalk
import chalk from 'chalk';

//Obtenemos argumentos a parrtir de la posición 2 del array
const argsArr = process.argv.slice(2);
//console.log(args);

//Array con los argumentos validos
const validArgs= ['--dirname', '--time'];



try{
        //Lanzamos un error si hay argumentos NO válidos
        for (let item of argsArr){
            if(!validArgs.includes(item)){
                //console.error(`El argumento ${item}, no es válido`)
                throw new Error(`El argumento ${item}, no es válido`)
            }
        }

        //Si existe el argumento "--dirname", mostramos por consola
        if(argsArr.includes('--dirname')){
            const dirname = process.cwd();
            console.log(chalk.blue(`Directorio ${dirname} encontrado con éxito`));
        }

        //Si existe el argumento "--time", mostramos por consola la hora en formato hh:mm:ss
        if(argsArr.includes('--time')){
            const time = new Date().toLocaleTimeString('es-ES');
            console.log(chalk.blue(`Hora ${time} `));
        }
    }catch(err){
        console.error(chalk.red(err.message))
    }