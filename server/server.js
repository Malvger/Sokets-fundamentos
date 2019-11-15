const soketIO = require('socket.io');

// const io = require('socket/socket.js');


const http = require('http');

const path = require('path');

const express = require('express');
const app = express();


let server = http.createServer(app);


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io = soketIO(server);

require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});








//esta es la comunicacion del backend