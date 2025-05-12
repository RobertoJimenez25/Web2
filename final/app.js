const express = require("express");
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

//Manejo de peticiones http por medio de req
app.use(bodyParser.urlencoded({extends:false}));

//Configuración de Plantillas
app.set('view engine', 'ejs');

//conexion a la DB
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Hortencia25',
    database: 'node_crud',
    port: 3306
});

//Validación 
db.connect((err) => {
    if (err) {
        console.error('Error de conexion en la DB');
    }else{
        console.log('Conexión realizada con exito a la DB ');
    }
});

//inicio del servidor
const port = 3008;
app.listen(port, () => {
    console.log(`127.0.0.1:${port}`);
});

//mostrar lista de usuarios
app.get('/',(req,res)=>{
    //Consulta a la DB
    const consultadb = 'SELECT * FROM users';

    //Trabajamos con la conexión
    db.query(consultadb,(err,res)=>{
        if (err){
            //No se encontro al usuario o hubo un error
            console.error('Error al recuperar usuarios', err);
            //Mostraremos información al usuario
            res.changedRows('Error, no se recuperan los datos de la DB');
        }else{
            res.render('index',{users: results});
        }
    });

});

//modulo para agregar al usuario
app.post('/add',(res,res)=>{
    const {name,email}=req.body;
    /*
    informacion
    */
    const query='INSERT INTO users(name, email) VALUES (?,?)';
    db.query(insertarRegistro,[name,email],(err)=>{
        if(err){
            console.error('Error al agregar usuario',err);
            res.send('Error')
        }else{
            res.redirect('/');
        }
    });
});