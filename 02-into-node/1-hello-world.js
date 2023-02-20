// http library is a built-in. You just need to require it.
const http = require('http');

// Create a server constant.
const server = http.createServer((req, res) => { 
    // Write the response and end the connection.
    res.end('Hello World\n');
});

server.listen(4242, () => {
    console.log('Server is running...');
});