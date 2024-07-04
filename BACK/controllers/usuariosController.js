// src/controllers/usuariosController.js

/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllUsuarios
 * .getUsuarioById
 * .createUsuario
 * .updateUsuario
 * .deleteUsuario
 */

//1- Importamos el módulo propio db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db = require('../db/db');

//2- Método para obtener todas los usuarios
const getAllUsuarios = (req, res) => {
    // Creamos una consulta
    const sql = 'SELECT * FROM usuarios';
    console.log("esta es la db: " , db)
    // Utilizamos .query para enviar la consulra a la bbdd
    // Primer parametro la consulta, segundo una función callback
    db.query(sql, (err, results) => {
        //si sucede algun error
        if (err) {console.log(err);return;} 
        //enviamos el resultado en formato json
        res.json(results);
    });
};

//3- Método para obtener usuarios con consultas parametrizadas
const getUsuarioById = (req, res) => {
    // Tomamos la solicitud y extraemos su id
    // Esta es una notacion de desestructuración {id}
    // en la req viaja /movies/1, la expresion {id} estrae el nro 1 de la ruta
    // y la almacena dentro de la variable id
    const { username } = req.params;

    // Creamos la consulta con marcador de posición
    const sql = 'SELECT * FROM usuarios WHERE username = ?';

    // Los marcadores de posición se utilizan para evitar la inyección de SQL, 
    // ya que los valores se escapan automáticamente.

    // Interactuamos con la bbdd, pasamos la consulta anterior
    db.query(sql, [username], (err, result) => {
        //en caso de error
        if (err) {console.log(err);return;} 
        //enviamos en formato json
        res.json(result);
    });
};

//4- Método para crear una película
const createUsuario = (req, res) => {
    // Desestructuramos la request
    const { username, email, password, apto_menores } = req.body;
    // Creamos la consulta con marcadores de posición
    const sql = 'INSERT INTO usuarios (username, email, password, apto_menores) VALUES (?, ?, ?)';
    // Pasamos la consulta
    //.query(consulta, array_con_valores, funcion_callback)
    db.query(sql, [username, email, password, apto_menores], (err, result) => {
        //en caso de error
        if (err)  {console.log(err);return;} 
        //enviamos mensaje de exito con info de la peli
        res.json({ message: 'Usuario creado', usuariosId: result.insertId });
    });
};

//5- Método para modificar una película (COMPLETAR)
const updateUsuario = (req, res)=>{
    // Desestructuramos la peticion
    // const id = req.params.id
    const {username} = req.params;
    const {email, password, apto_menores} = req.body;
    // const title = req.body.title;

    //Consulta SQL con marcadores de posicion
    const sql = 'UPDATE usuarios SET email = ?, password = ?, apto_menores = ?, create_time = ?  WHERE username = ?';

    //Pasamos la consulta
    db.query(sql, [remail, password, create_time, apto_menores, username],(err, result)=>{
        //si hay error
        if(err){
            console.log(err);
            return;
        }
        //si todo va bien
        res.json({mensaje: "Usuario actualizado"});
    })
}

//6- Método para borrar una película(COMPLETAR)
const deleteUsuario = (req, res)=>{
    // Desestructuramos la consulta
    const {username} = req.params;

    // Consulta sql para borrar una peli
    const sql = 'DELETE FROM usuarios WHERE username = ?';

    // Enviamos la consulta a la bbdd
    db.query(sql,[username],(err,result)=>{
        //si hay error
        if(err){
            console.log(err);
            return;
        }
        //si todo va bien
        res.json({mensaje: "Usuario borrado con éxito"});
    });
};

//7- Exportamos los módulos que serán utilizados en usuariosRouter.js
module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};

//8- Pasamos a configurar db.js

