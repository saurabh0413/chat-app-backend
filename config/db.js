const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const dotenv = require("dotenv");
dotenv.config();
const connect = mongoose.connect(process.env.MONGO_URL);
module.exports = { connect };
