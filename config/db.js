const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connect = mongoose.connect(
  "mongodb+srv://saurabh:saurabh@cluster0.gidtin6.mongodb.net/chatApp"
);
module.exports = { connect };
