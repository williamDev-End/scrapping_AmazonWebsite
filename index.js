const http = require('http');
require('dotenv').config();
const app = require('./app');

const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Listening on hppt://localhost:${port}`);
});