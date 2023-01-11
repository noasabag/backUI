const jwt = require("jsonwebtoken");
const User = require("../user/user.model");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decoded = jwt.verify(token, "secret");
    const user = await User.findOne({ _id: decoded, token });
    if (!user) {
      throw new Error("jj");
    }
    req.user = user;
    req.auth = token;
    next();
  } catch (e) {
    res.status(400).send("pls auth");
  }
};

module.exports = auth;

// const User = require("./../models/user");

// let auth = (req, res, next) => {
//   //let token =req.cookies.auth;
//   const user = User.findOne({token},(err, user) => {
//     if (err) throw new error;
//     if (!user)
//       return res.send({
//         error: true,
//       });

//     req.token = token;
//     req.user = user;
//     next();
//   })
// };

// module.exports = { auth };
