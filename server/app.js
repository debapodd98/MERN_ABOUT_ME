const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());
app.use(require("./router/auth"));

app.listen(5000, () => {
  console.log("Server is Running at port no 3000");
});
