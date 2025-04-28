//importar un modulo
const serverHTTP = require('http');

//Definir un puerto
const port = 3059;

//Crear un servidor
const server = serverHTTP.createServer((req, res) => {
    
    res.writeHead(200, { 'Content-Type': 'text-plain' }); 

    //Enviar una respuesta 
    res.end('<h1>Aqui les pregunto que hubieran hecho ustedes</h1>\n <img style="width: 300px;" src="https://media.tenor.com/oMLaoUD9X_UAAAAM/pe%C3%B1a-nieto-que-habr%C3%ADan-hecho.gif" alt="img">');
});

server.listen(port, ()=>{
    console.log(`Servidor funcional por la URL: http://127.0.0.1:${port}`);

});