// build your server here and require it from index.js
const express = require("express");
const server = express();
const projectRoutes = require("./project/router");
const resourceRoutes = require("./resource/router");
const taskRoutes = require("./task/router")

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hello World!");
});
server.use("/api/projects", projectRoutes);
server.use("/api/resources", resourceRoutes);
server.use("/api/tasks", taskRoutes)

module.exports = server;
