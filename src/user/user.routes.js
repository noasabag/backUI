const {
  userLogin,
  userLogout,
  deleteMe,
  newUser,
  updateUser,
  getMe,
} = require("./user.service");

const express = require("express");
userRouter = express.Router();

userRouter.post("/user/newUser", newUser);
userRouter.post("/user/login", userLogin);
userRouter.post("/user/logout", userLogout);
userRouter.delete("/user/me", deleteMe);
userRouter.get("/user/getme", getMe);
userRouter.patch("/user/me", updateUser);

// userRouter.post("/user/logoutall", async (req, res) => {});

module.exports = userRouter;
