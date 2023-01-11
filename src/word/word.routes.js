const express = require("express");
const auth = require("../middlewares/auth.js");
wordRouter = express.Router();
const {
  getTranslate,
  wordsList,
  addNewWord,
  markWordUsKnown,
  wordsListByText,
} = require("../word/word.service.js");
//get words
// לוחץ מילה ומתרגם
// מסמן מילה כנלמדה
//wordRouter.get("/word/getTranslate", getTranslate);
wordRouter.get("/word/translate/:word", auth, getTranslate);

wordRouter.post("/word/addWordToTheList", auth, addNewWord);
wordRouter.post("/word/wordsList", wordsList);
wordRouter.get("/word/wordsListByText", wordsListByText);

wordRouter.post("/word/markWordUsKnown", markWordUsKnown);

module.exports = wordRouter;
