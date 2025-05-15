const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculadora.html'));
});

app.get('/QR', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'QR.html'));
});

const port= 3009;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});