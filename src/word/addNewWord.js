const Word = require("../word/word.module");
const User = require("../user/user.model");
const translate = require("../translate");

const addNewWord=(word)=>{
const word = new Word({
      word: req.body.word,
      translate: await translate(word),
    });
    const trans = await translate(word);
    word.save();
    await User.updateOne({
      name: "noa",
      wordsArr: [{ word: word, trans }],
    })}

    
    module.exports=addNewWord