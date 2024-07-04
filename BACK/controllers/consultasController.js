// src/controllers/consultasController.js

/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllConsultas
 * .getConsultaById
 * .createConsulta
 * .updateConsulta
 * .deleteConsulta
 */

//1- Importamos el módulo propio db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db = require('../db/db');

//2- Método para obtener todas las consultas
const getAllConsultas = (req, res) => {
    // Creamos una consulta
    const sql = 'SELECT * FROM consultas';

    // Utilizamos .query para enviar la consulra a la bbdd
    // Primer parametro la consulta, segundo una función callback
    db.query(sql, (err, results) => {
        //si sucede algun error
        if (err) {console.log(err);return;} 
        //enviamos el resultado en formato json
        res.json(results);
    });
};

//3- Método para obtener consultas con consultas parametrizadas
const getConsultaById = (req, res) => {
    // Tomamos la solicitud y extraemos su id
    // Esta es una notacion de desestructuración {id}
    // en la req viaja /consultass/1, la expresion {id} estrae el nro 1 de la ruta
    // y la almacena dentro de la variable id
    const { id } = req.params;

    // Creamos la consulta con marcador de posición
    const sql = 'SELECT * FROM consultas WHERE id = ?';

    // Los marcadores de posición se utilizan para evitar la inyección de SQL, 
    // ya que los valores se escapan automáticamente.

    // Interactuamos con la bbdd, pasamos la consulta anterior
    db.query(sql, [id], (err, result) => {
        //en caso de error
        if (err) {console.log(err);return;} 
        //enviamos en formato json
        res.json(result);
    });
};

//4- Método para crear una película
const createConsulta = (req, res) => {
    // Desestructuramos la request
    const { nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema } = req.body;
    // Creamos la consulta con marcadores de posición
    const sql = 'INSERT INTO consultas (nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema) VALUES (?, ?, ?, ?)';
    // Pasamos la consulta
    //.query(consulta, array_con_valores, funcion_callback)
    db.query(sql, [nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema], (err, result) => {
        //en caso de error
        if (err)  {console.log(err);return;} 
        //enviamos mensaje de exito con info de la peli
        res.json({ message: 'Consulta creada', id: result.insertId });
    });
};

//5- Método para modificar una película (COMPLETAR)
const updateConsulta = (req, res)=>{
    // Desestructuramos la peticion
    // const id = req.params.id
    const {id} = req.params;
    const {nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema} = req.body;
    // const title = req.body.title;

    //Consulta SQL con marcadores de posicion
    const sql = 'UPDATE consultas SET nombre_y_apellido = ?, tipo_consulta = ?, URL_captura_problema = ?, descripcion_problema = ? WHERE id = ?';

    //Pasamos la consulta
    db.query(sql, [nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema, id],(err, result)=>{
        //si hay error
        if(err){
            console.log(err);
            return;
        }
        //si todo va bien
        res.json({mensaje: "Consulta actualizada"});
    })
}

//6- Método para borrar una película(COMPLETAR)
const deleteConsulta = (req, res)=>{
    // Desestructuramos la consulta
    const {id} = req.params;

    // Consulta sql para borrar una peli
    const sql = 'DELETE FROM consultas WHERE id = ?';

    // Enviamos la consulta a la bbdd
    db.query(sql,[id],(err,result)=>{
        //si hay error
        if(err){
            console.log(err);
            return;
        }
        //si todo va bien
        res.json({mensaje: "Consulta borrada con éxito"});
    });
};

//7- Exportamos los módulos que serán utilizados en consultasRouter.js
module.exports = {
    getAllConsultas,
    getConsultaById,
    createConsulta,
    updateConsulta,
    deleteConsulta
};

//8- Pasamos a configurar db.js

