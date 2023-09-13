const port = 8080;

const http = require('http');

server = http.createServer((request, response) => {
response.writeHead(200, {
"Content-Type": "text/html"
});
response.write('<h1>Satu</h1>')
response.end();
})

server.listen(port);
console.log(`Servidor funcionando na porta: ${port}`);