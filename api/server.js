const exp = require('constants');
const express = require('express');
const router = require('./router');
const cors = require('cors')

const server = express();
server.use(cors())
server.use(express.json())
server.use('/api', router);

server.use((err, req, res, next) => {
    res.status(500).json({
    message: err.message,
    stack: err.stack,
    });
});

module.exports = server;