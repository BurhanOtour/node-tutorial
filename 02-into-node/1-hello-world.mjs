// In ES module, we can't require, but we use import. We can also use named imports like {}
// import http from 'http';
import { createServer} from 'http';

const server = createServer((req, res) => { 
    res.end('Hello World\n');
});

server.listen(4242, () => {
    console.log('Server is running...');
});