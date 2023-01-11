const express = require("express");
const app = express();
//const bodyparser = require("body-parser");
//const cookieParser = require("cookie-parser");

const textRouter = require("./text/text.routes.js");
const userRouter = require("./user/user.routes.js");
const wordRouter = require("./word/word.routes.js");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  Headers: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
//app.use(bodyparser.urlencoded({ extended: false }));
//app.use(bodyparser.json());
//app.use(cookieParser());
app.use(userRouter);
app.use(textRouter);
app.use(wordRouter);

module.exports = app;
