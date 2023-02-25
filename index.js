const express = require("express");
const cors = require("cors");
const chats = require("./data");
const dotenv = require("dotenv");
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
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
