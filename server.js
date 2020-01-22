const express = require('express');
const helmet = require('helmet');

const carsRouter = require('./cars-router.js')
// const fruitsRouter = require('../fruits/fruits-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(logger)


server.use('/api/cars', carsRouter);

// server.get('/', (req, res) => {
//     console.log('here')
//     res.status(200).json({object: "here"})
// })

function logger(req, res, next) {
    const { method, originalUrl } = req
    console.log(`${method} to ${originalUrl}`)
    next()
}

module.exports = server;
