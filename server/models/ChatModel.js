const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    client_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    admin_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    chat: Array,
  },
  { timestamps: true }
);
const Chats = mongoose.model("chat", chatSchema);
module.exports = Chats;
