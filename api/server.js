const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Router connectors will go here
const authRouter = require('./auth/auth-router');
const userRouter = require('./users/users-routers');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// router extenders go here
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
    res.send('api is connected');
})

module.exports = server;