//Dependencies 
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const {decodeHeader, decodeBody} = require('../authentication/auth-middleware.js')

//Server Invocation
const server = express();

// CORS options 



//Middleware 
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger);

server.use('/api/users', usersRouter);
server.use('/tacolog', tacoLogRouter);


// Sanity check 
server.get('/', (req, res) => {
    res.send(`<p>Let's get tacos is up and running!</p>`);
});

// Routers
const usersRouter = require('../routers/users-router');
const tacoLogRouter = require('../routers/tacolog-router');


function logger(req, res, next) {
    console.log(`${req.method} request`)
    next();
}

module.exports = server;