const { Router } = require("express");
const { getUser, createUser } = require("../controllers/user.controllers");
const userRouter = Router();

userRouter.get("/", getUser);
userRouter.post("/", createUser);
module.exports = userRouter;
