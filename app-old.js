const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.write('Not found')
    res.end()
}).listen(8080)

console.log('escuchando en el puerto ',8080);