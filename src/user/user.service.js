const User = require("./user.model");

const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error("email dont found");
    const isMatch = await user.comparepassword(req.body.password);
    if (!isMatch) throw new Error("incorrect password");
    user.generateToken();
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(201).send("e" + e);
  }
};

const userLogout = async (req, res) => {
  try {
    res.send("logged out");
  } catch (e) {
    res.send(e);
  }
};

const deleteMe = async (req, res) => {
  try {
    await User.findOne({ email: req.body.email });
  } catch (e) {
    res.send(e);
  }
};

const newUser = async (req, res) => {
  try {
    if (!User.findOne({ email: req.body.email })) {
      throw new Error("email already exist");
    }
    if (!req.body.password === req.body.confirmPassword) {
      throw new Error("password dont match");
    }
    const user = new User({
      ...req.body,
    });
    user.generateToken();

    await user.save();

    res.send(user);
  } catch (e) {
    res.status(400).send("e" + e);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { token: req.headers.authorization },
      { firstname: req.body.firstName, lastname: req.body.surname }
    );
  } catch (e) {}
};
const getMe = async (req, res) => {
  try {
    const user = await User.findOne({ token: req.headers.authorization });
    if (!user) {
      throw new Error();
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send("e" + e);
  }
};

module.exports = {
  userLogin,
  userLogout,
  deleteMe,
  newUser,
  updateUser,
  getMe,
};
