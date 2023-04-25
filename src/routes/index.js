const { Router } = require("express");
const { userRouter } = require("./userRouter");

const mainRoutes = Router();

mainRoutes.use("/user", userRouter);

module.exports = { mainRoutes };
