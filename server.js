const express = require("express");
const CORS = require("cors");

const charactersRouter = require('./routes/charactersRouter');
const teamsRouter = require('./routes/teamsRouter');
const server = express();

server.use(express.json());
server.use(CORS());
server.use('/api/characters', charactersRouter);
server.use('/api/teams', teamsRouter);

server.get("/", function(req, res) {
  res.send("server is working 👍");
});

module.exports = server;