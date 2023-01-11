const mongoose = require("mongoose");

const textschema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
});

const Text = mongoose.model("Text", textschema);

module.exports = Text;
