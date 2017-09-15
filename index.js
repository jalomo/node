var http = require('http');
const port = process.env.PORT|| 3000
http.createServer(function(peticion, respuesta){
   respuesta.writeHead(200, 'text/plain');
   respuesta.end('Hola mundo.');
}).listen( port  , '127.0.0.1');
console.log('El servidor esta funcionando correctamente en https://localhost:3000/');