const axios = require("axios");

const a = async () => {
  const option = {
    method: "POST",
    url: "http://localhost:3001/user/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      firstname: "noa",
      password: "16051605",
    },
  };
  const aa = await axios(option);
  console.log(aa);
};
a();
