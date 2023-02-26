const express = require("express");
const cors = require("cors");
const chats = require("./data");
const dotenv = require("dotenv");
const connect = require("./config/db");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to chat app");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});
app.listen(PORT, async () => {
  try {
    await connect;
    console.log("connection established");
  } catch (err) {
    console.log(err, "error while connecting to db");
  }
  console.log(`listening to port ${PORT}`);
});
