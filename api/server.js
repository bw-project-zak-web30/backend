const express = require("express");
const helmet = require("helmet")

const authenticator = require("../middleware/authenticator")


const authRouter = require("../auth/auth-router.js")
const usersRouter = require("../users/users-router.js")
const equipmentRouter = require("../equipment/equipment-router.js")

const server = express();

server.use(helmet())
server.use(express.json());

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use('/api/auth', authRouter)
server.use('/api/users', authenticator, usersRouter)
server.use('/api/equipment', equipmentRouter)


server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;


