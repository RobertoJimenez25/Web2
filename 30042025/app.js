//Importar express
const express= require('express');

//creacion de una instancia
const app = express();

//definir el puerto
const port = 7008;

//Configuracion de ruta get para la raiz ('/')
app.get('/',(req,res)=>{
    res.send('Hola mundo');
});

app.listen(port);



