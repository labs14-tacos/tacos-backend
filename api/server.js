//Dependencies 
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const {decodeHeader, decodeBody} = require('../authentication/auth-middleware.js')

// Routers
const usersRouter = require('../routers/users-router');
const tacoLogRouter = require('../routers/tacolog-router');
const registerRouter = require('../routers/register-router');

//Server Invocation
const server = express();

//Middleware 
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger);

server.use('/api/users', decodeHeader, usersRouter);
server.use('/tacolog', decodeHeader, tacoLogRouter);
server.use('/api/auth', decodeBody, registerRouter);

// Sanity check 
server.get('/', (req, res) => {
    res.send(`<p>Let's get tacos is up and running!</p>`);
});

function logger(req, res, next) {
    console.log(`${req.method} request`)
    next();
}

module.exports = server;