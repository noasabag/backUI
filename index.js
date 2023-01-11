const app = require("./src/app.js");
const db = require("./src/db.js");

const port = 3001;
app.listen(port, () => {
  console.log("listen on port " + port);
});
