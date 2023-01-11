const Text = require("./text.model");

const getTextByTitle = async (req, res) => {
  try {
    if (!req.body.title) {
      const text = await Text.findOne();
      res.send(text);
    } else {
      const text = await Text.findOne({ title: req.body.title });
      res.send(text);
    }
  } catch (e) {
    console.log(e);
    res.redirect("/login");
  }
};
const getText = async (req, res) => {
  try {
    const text = await Text.find();
    res.send(text);
  } catch (e) {
    console.log(e);
    res.redirect("/login");
  }
};
const newText = (req, res) => {
  const text = new Text({
    title: "Absolute Success is Luck. Relative Success is Hard Work.",
    text: "In 1997, Warren Buffett, the famous investor and multi-billionaire, proposed a thought experim The genie says you can determine the rules of the society you are about to enter and you can design anything you want. You get to design the social rules, the economic rules, the governmental rules. And those rules are going to prevail for your lifetime and your children's lifetime and your grandchildren's lifetime.",
  });
  text.save();
  res.send(text);
};

module.exports = { newText, getText, getTextByTitle };
