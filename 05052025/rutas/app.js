const express = require('express');
const rutas = require("./routes/rutas");

//instanciamos express
const app = express();

//configuracion del server uso de rutas
app.use("/",rutas);

//puerto
const port= 3000;

//Escucha del servidor
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});