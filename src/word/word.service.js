const User = require("../user/user.model");
const Word = require("./word.module");
const translateText = require("../../translation-quickstart-node-v3/translateAPI");
const res = require("express/lib/response");

const getTranslate = async (req, res) => {
  try {
    const translate = await translateText(req.params.word);

    res.send(translate);
  } catch (e) {
    res.send(e);
  }
};

const addNewWord = async (req, res) => {
  try {
    const newWord = await Word.findOneAndUpdate(
      { word: req.body.nativeWord },
      {
        $addToSet: {
          usersIdArr: req.headers.authorization,
          sourceText: req.body.title,
        },
        translate: req.body.translate,
        learned: false,
      },
      { new: true, upsert: true }
    );
    res.send(newWord);
  } catch (e) {
    console.log("erroenewword" + e);
    res.send("e" + e);
  }
};

const wordsList = async (req, res) => {
  try {
    if (!req.body.selectedText) {
      const word = await Word.find({
        usersIdArr: req.headers.authorization,
      });
      res.send(word);
    } else {
      const word = await Word.find({
        usersIdArr: req.headers.authorization,
        sourceText: req.body.selectedText,
      });
      res.send(word);
    }
  } catch (e) {
    console.log("wordee");
    res.send("error" + e);
  }
};

const wordsListByText = async (req, res) => {
  try {
  } catch (e) {}
};

const markWordUsKnown = async (req, res) => {
  try {
    const word = await Word.findOneAndUpdate(
      { word: req.body.word },
      { learned: true }
    );

    res.send("changed");
  } catch (e) {
    res.send("err" + e);
  }
};
module.exports = {
  getTranslate,
  markWordUsKnown,
  wordsList,
  addNewWord,
  wordsListByText,
};
