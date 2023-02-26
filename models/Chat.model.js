//chatname, isgroupchatm, users,latestmsg,groupadmin

const { default: mongoose } = require("mongoose");

const ChatSchema = new mongoose.Schema(
  {
    chatname: { type: String, trim: true },
    isgroupchat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    latestMsg: { type: mongoose.Schema.Types.ObjectId, ref: "message" },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);

const Chatmodel = mongoose.model("chats", ChatSchema);
module.exports = { Chatmodel };
