/** @format */

const express = require('express');
const answersRouter = require('./answers/answers-router');

const server = express.Router();

server.use(express.json());

server.use('/answers', answersRouter);

server.use((req, res) => {
  res.status(404).json({ message: '404 page' });
});

server.use((err, req, res, next) => {
  res.status(500).json({ message: 'internal server error' });
});

module.exports = server;
