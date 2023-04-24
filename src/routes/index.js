const { Router } = require("express");

const mainRoutes = Router();

mainRoutes.use("/home", (req, res) => {});

module.exports = { mainRoutes };
