const express = require ('express');
const path = require ('path');
const routes = require ('./routes/routes');

const app = express ();
const port = 3005;

//middleware
app.use (express.static (path.join (__dirname,"public")));

//usar las rutas desde el archivo routes.js
app.use ("/",routes);

app.listen (port, () => {
    console.log(`http://127.0.0.1:${port}`);
});