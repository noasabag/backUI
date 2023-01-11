const mongoose = require("mongoose");
const { dbURI } = require("./config/config.js");
mongoose.connect(dbURI);
var db = mongoose.connection;

// const { MongoClient, ServerApiVersion } = require("mongodb");

// const db = async () => {
//   const uri =
//     "mongodb+srv://noasabag:16051605@cluster0.flycazm.mongodb.net/?retryWrites=true&w=majority";
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: ServerApiVersion.v1,
//   });
//   await client.connect();
//   return client;
// };

// module.exports = db;
module.exports = db;
