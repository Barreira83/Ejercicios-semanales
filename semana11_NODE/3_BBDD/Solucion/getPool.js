//Leemos las variables del entorno ".env"
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS } = process.env;


//Variable que almacenará un pool de conexiones

let pool;

//Funcion que genere un pool de conexiones y lo retorna

const getPool = async () => {
    try{
        if(!pool){
            pool = mysql.createPool({
                connectionLimit:10,
                host: MYSQL_HOST,
                user:MYSQL_USER,
                password:MYSQL_PASS,
                timezone:'local'
            })
        }

        return pool;
    }catch(err){
        console.error(err);
    }
}


//Exportamos la funcion
export default getPool;