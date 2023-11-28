// Importamos el módulo "getPool".
import getPool from './getPool.js';


// Crea una función para ejecutar la consulta de creación de tabla.
const createTable = async () => {
    try {
        // Obtén una conexión a la base de datos utilizando "getPool".
        const pool = await getPool();

        await pool.query('CREATE DATABASE IF NOT EXISTS bootcamp');
        console.log('Base de datos creada con éxito.');
        // Selecciona la base de datos "perros"
        await pool.query('USE bootcamp'); 
        

            // Ejecuta la consulta SQL para crear la tabla "direcciones".
        await pool.query(`
            CREATE TABLE IF NOT EXISTS direcciones (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                calle VARCHAR(255),        
                Codigo_Postal INT,  
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log('Tabla de direcciones creada con éxito.');

        // Ejecuta la consulta SQL para crear la tabla "estudiantes".
        await pool.query(`
            CREATE TABLE IF NOT EXISTS estudiantes (
                    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(255),
                    apellido VARCHAR(255),
                    fecha_nacimiento date,
                    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                    dirId INT UNSIGNED,
                    FOREIGN KEY(dirId) REFERENCES direcciones(id)       
            
            );
        `);

        console.log('Tabla de estudiantes creada con éxito.');    

    } catch (err) {
        // Si ocurre un error, muestra un mensaje en la consola.
        console.error(err.message);
    }
};

// Llama a la función "createTable" para crear la tabla de usuarios.
createTable();