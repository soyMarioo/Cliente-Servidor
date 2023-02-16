const http = require('http');
const { students } = require('./data.js');

const server = http.createServer((req,res)=>{
  console.log('The server is listening');
  const {method} = req;
  
  switch(method) {
    case 'GET': handleGetRequest(req,res);
    break;
  }
});


const PUERTO = 3000;

server.listen(PUERTO,()=>{
  console.log(`The server is listening on the localhost port:${PUERTO}`);
});

function handleGetRequest(req,res){
  const {url} = req;
  if(url === '/') {
    res.end('Hello, welcome to the home page.');
  }else if (url === '/students') {
    res.end(JSON.stringify(students));
  }else if (url === '/students/mario') {
    res.end(JSON.stringify(students.mario));
  }else if (url === '/students/juanito') {
    res.end(JSON.stringify((students.juanito)));
  }else{
    res.statusCode = 404;
    res.end('El recurso no se encontro');
  }
}

