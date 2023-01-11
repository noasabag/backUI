const { URL, URLSearchParams } = require("url");
const express = require("express");
const qs = require("qs");
textRouter = express.Router();
const db = require("../db.js");
const axios = require("axios");
const translate = require("../translate.js");
const Word = require("../word/word.module");
const User = require("../user/user.model");
const { newText, getText, getTextByTitle } = require("./text.service");
const auth = require("../middlewares/auth.js");

textRouter.post("/text/newText", auth, newText);
textRouter.get("/text/getText", auth, getText);
textRouter.post("/text/getTextByTitle", auth, getTextByTitle);

textRouter.post("/text/translate", async (req, res) => {
  try {
    // const user = new User({ name: "noa", enail: "ss", password: "sss" });
    // user.save();
    // await a.db("pem").collection("words").insertOne({ word });
    res.send("succes");
  } catch (e) {
    console.log(e);
  }
});

module.exports = textRouter;
