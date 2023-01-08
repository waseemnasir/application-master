const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require,
  },
  password: {
    type: String,
    require,
  },
  fName: {
    type: String,
    require,
  },
  lName: {
    type: String,
    require,
  },
  cNumber: {
    type: Number,
    require,
  },
  role: { type: String, default: "client" },
  portrait: { type: String, default: "mr-anonymous.png" },
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chat",
  },
  resetToken: String,
  expireToken: Date,
});

const Users = mongoose.model("user", UserSchema);
module.exports = Users;
