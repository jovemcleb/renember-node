const express = require("express");
const { mainRoutes } = require("./src/routes/index");

const app = express();

app.use(express.json());
app.use(mainRoutes);

module.exports = { app };
