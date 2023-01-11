const mongoose = require("mongoose");

const wordschema = new mongoose.Schema({
  word: {
    type: String,
    require: true,
  },
  translate: {
    type: String,
    require: true,
  },
  learned: {
    type: Boolean,
  },
  sourceText: [String],
  usersIdArr: [String],
});

const Word = mongoose.model("Word", wordschema);

module.exports = Word;
