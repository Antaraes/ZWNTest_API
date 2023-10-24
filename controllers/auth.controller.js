const fs = require("fs");
let mainData = {};
fs.readFile("./utils/db.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    mainData = JSON.parse(data);
    // Now, `jsonData` contains the data from db.json
  }
});
exports.loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const authenticatedUser = mainData.user.find(
    (user) => user.email === email && user.password === password
  );

  if (authenticatedUser) {
    try {
      res.cookie("user", authenticatedUser, { secure: true });
      res.json({ message: "login successful", user: authenticatedUser });
    } catch (err) {
      res.json("Error setting cookie: " + err.message);
    }
  } else {
    res.json("Login Failed");
  }
};
