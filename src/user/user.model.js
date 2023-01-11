const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = require("../config/config");
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  confirmpassword: {
    type: String,
    required: true,
    minlength: 8,
  },
  age: {
    type: Number,
  },
  token: {
    type: String,
  },
});

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    this.confirmpassword = hash;
  }
});

// when login - checked whether passwords are same or not(the entered and the saved)
userSchema.methods.comparepassword = async function (password) {
  return await bcrypt.compare(password, this.password);
  //  (err, isMatch) => {
  //   if (err) return cb(next);
  //   return cb(null, isMatch);
  // });
};

//generating a token when user logged in
userSchema.methods.generateToken = function () {
  var token = jwt.sign(this._id.toHexString(), "secret");
  // localStorage.setItem("token", token);
  this.token = token;

  // this.save((err, user) => {
  //   if (err) return cb(err);
  //   return cb(null, user);
  // });
};

//find whether a user is logged-in or not
userSchema.statics.findByToken = (token, secret, cb) => {
  jwt.verify(token, secret, (err, decode) => {
    this.findOne({ _id: decode, token: token }, (err, user) => {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

//when logout-delete token
userSchema.methods.deleteToken = function (token, cb) {
  this.update({ $unset: { token: 1 } }, function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
