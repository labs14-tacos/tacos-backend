//Dependencies 
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//Server Invocation
const server = express();

//Middleware 
server.use(express.json());
server.use(cors());
server.use(helmet());

// Sanity check 
server.get('/', (req, res) => {
    res.send(`<p>Let's get tacos is up and running!</p>`);
});

module.exports = server;