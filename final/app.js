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
app.get('/', (req, res) => {

    //consulta a la base de datos

    const consultaDB = 'SELECT * FROM users';

    //Trabajamos con la base de datos

    db.query(consultaDB, (err, results) => {
        if(err){
            
            // no se pudo recuperar la informacion de la base de datos

            console.error('Error al recuperar el usuario', err);
            
            //Mostraremos informacion al usuario

            res.send('Error, no se pudo recuperar la informacion de la base de datos');

    }else{

        //Mostraremos la informacion al usuario

        res.render('index', { users: results });
    }
});

});


//Modulo para agregar un nuevo usuario

app.post('/add', (req, res) => {

    const { name, email } = req.body;

const insertarRegistro = 'INSERT INTO users (name, email) VALUES (?, ?)';

db.query(insertarRegistro, [name, email], (err, results) => {
    if (err) {
        console.error('Error al insertar el registro', err);
        res.send('Error, no se pudo insertar el registro');
         } else {
                console.log('Registro insertado correctamente');
                res.redirect('/');
            }
    });
});

//Modulo editar un usuario
app.post('/add', (req, res) => {

});

//editar un usuario
app.get('/edit/:id', (req, res) => {
    const{id}=req.params;
    const buscarUsuariID = 'SELECT * FROM users WHERE id = ?';
    db.query(buscarUsuariID, [id], (err, results) => {
        if (err) {
            console.error('Error al buscar el usuario', err);
            res.send('Error, no se pudo recuperar la informacion de la base de datos');
        } else {
            res.render('edit', { users: results[0] });
        }
    });
});

//update
app.post('/update/:id', (req, res) => {
    const {id} = req.params;
    const {name,email} = req.body;

    const query = "UPDATE users SET name =?, email =? WHERE id =?";
    db.query(query,[name,email,id], (err)=>{
        if(err){
            console.error('error',err);
        }else{
            res.redirect('/');
        }
    });
});