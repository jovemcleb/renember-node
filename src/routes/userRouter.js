const { Router } = require("express");
const { UserModel } = require("../model/userModel");
const { CREATED, INTERNAL_SERVER, OK } = require("../utils/httpStatusCode");

const userRouter = Router();

userRouter.post("/", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    return res.status(CREATED).json(user);
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: error.message });
  }
});

userRouter.get("/", async (_req, res) => {
  try {
    const users = await UserModel.find({});
    return res.status(OK).json(users);
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: error.message });
  }
});

userRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(OK).json(user);
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: error.message });
  }
});

userRouter.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(OK).json(user);
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: error.message });
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await UserModel.findByIdAndRemove(id);
    return res.status(OK).json({ message: "User deleted" });
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: error.message });
  }
});

module.exports = { userRouter };
