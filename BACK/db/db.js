/**
 * Finalmente el archivo db.js será el que cree el objeto que conecta 
 * con la base de datos. 
 * Esa conexión utilizará el objeto mysql provisto en en el 
 * módulo mysql2
 */

//1- Importamos el modulo mysql2
const mysql = require("mysql2");

//2- Configuracion de conexión
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  port: 3306,
  database: "veoveo" // Especifica aquí la base de datos
});

//3- Conectamos
connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos");
});

module.exports = connection;