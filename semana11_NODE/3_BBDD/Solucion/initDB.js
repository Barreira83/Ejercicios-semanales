//Importamos el pool de conexiones
import getPool from './getPool.js';
import dotenv from 'dotenv';

dotenv.config();

//Importamos el nombre de la base de datods
 
const {MYSQL_DB} = process.env;

//Funcion que genera la base de datos y sus tablas

const initDB = async () => {
try{
    //Obtenemos un pool de conexiones
    const pool = await getPool();

    //Creamos la base de datos, si no existe
    await pool.query(`
        CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}
    `);

    //Selecionamos la BBDD
    await pool.query(`
        USE ${MYSQL_DB}
    `);
    console.log("Borramos las tablas..."); //Las tablas se borran en el orden inverso al que fueron creadas
    await pool.query(`
        DROP TABLE IF EXISTS addresses, students 
    `);

    console.log("Creando tablas...");

    //Creamos las tablas
    await pool.query(`
    CREATE TABLE IF NOT EXISTS students (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(50) NOT NULL,
        lastName VARCHAR(100) NOT NULL,
        birthday DATETIME NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP);
             
        `)


        await pool.query(`
        CREATE TABLE IF NOT EXISTS addresses (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            street VARCHAR(255) NOT NULL,
            postalCode VARCHAR(10) NOT NULL,        
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            studentId INT UNSIGNED,
            FOREIGN KEY(studentId) REFERENCES students(id) ); 
             
        `)

        console.log("¡Tablas creadas exitosamente!");
        //Finalizamos el proceso si finalizó exitosamente 0
        process.exit(0);
}catch(err){
    console.error(err);
    //Finalizamos el proceso si NO finalizó exitosamente 1
    process.exit(1);
}
}
initDB();