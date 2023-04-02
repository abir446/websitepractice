// console.log('Hello World');

const http = require('http');

const hostname= '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Contenr-Type','text/plain');
    res.end('Hi, Abir! Nice to see you learning backend.');
});

server.listen(port, hostname, () =>{
    console.log('Server Running at http://${hostname}:${port}/');
});