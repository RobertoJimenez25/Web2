//importacion de express
const express = require('express');
const path = require('path');

//instancia de express
const app = express();

//puerto
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo!')
    
    res.sendFile(path.join(__dirname,+'index.html'));
});

app.listen(port, () => {
    console.log('http://127.0.0.1:${3000}');
});