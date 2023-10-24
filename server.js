const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const router = require("./routers/index");
const cookieParser = require("cookie-parser");

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.use("/api", router);
app.get("/", function (req, res) {
  res.json("Hi");
});
app.listen(PORT, function () {
  console.log("Server listening on port", PORT);
});
