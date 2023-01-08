const app = require("express").Router();
const jwt = require("jsonwebtoken");
const Chats = require("../models/ChatModel");
const Users = require("../models/UsersModel");
const { secret } = require("../utils/utils");

app.get("/chat/:id", (req, res) => {
  if (req.header("x-access-token")) {
    jwt.verify(req.header("x-access-token"), secret, async (err, decode) => {
      if (err) {
        console.log(err);
        return res.json({
          status: "Error",
          error: "Invalid Token",
        });
      }
      email = decode.email;
      chat = await Chats.findOne({ client_id: req.params.id });
      return res.status(200).send(chat);
    });
  } else {
    return res.status(401).send({ error: "No token Found" });
  }
});
app.get("/getChatRoom", (req, res) => {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        console.log(err);
        return res.json({
          status: "Error",
          error: "Invalid Token",
        });
      }
      email = decoded.email;
      user = await Users.findOne({
        email,
      }).select("id");
      let chat = await Chats.find({ client_id: user._id }).select({
        _id: 0,
        client_id: 1,
      });
      if (chat)
        return res.json({
          status: "OK",
          room: chat[0],
        });
      else
        return res.json({
          statusCode: 404,
          status: "Error",
          message: "Chat Room Not Found",
        });
    });
  } else {
    return res.json({
      status: "Error",
      error: "No Token Found",
    });
  }
});
app.post("/chat/saveMessage", (req, res) => {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    jwt.verify(token, secret, (err, decode) => {
      if (err) {
        console.log(err.message);
        return res.status(401).send({ message: "Unauthorized Request" });
      } else {
        var email = decode.email;

        res.sendStatus(200);
      }
    });
  } else {
    return res.status(401).send({ message: "Unautharized Request" });
  }
});

app.get("/getChat", (req, res) => {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        console.log(err);
        return res.json({
          status: "Error",
          error: "Invalid Token",
        });
      }
      if (decoded) {
        email = decoded.email;
        const user = await Users.findOne({
          email: email,
        });
        chat = await Chats.findOne({ client_id: user._id })
          .populate("client_id", "fName lName")
          .populate("admin_id", "fName lName");
      }
      res.status(200).send(chat);
    });
  } else {
    return res.json({
      status: "Error",
      error: "No Token Found",
    });
  }
});
app.get("/getAvailableChats", (req, res) => {
  if (req.header("x-access-token")) {
    try {
      const token = req.header("x-access-token");
      jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
          console.log(err);
          return res.send({
            status: "Error",
            error: "Invalid Token",
          });
        }
        if (decoded) {
          const email = decoded.email;
          user = await Users.findOne({ email: email });
          if (user.role === "admin") {
            chats = await Chats.find({
              chat: { $exists: true, $not: { $size: 0 } },
            })
              .populate("client_id", "fName lName portrait")
              .sort([["updatedAt", -1]]);
            return res.status(200).send(chats);
          } else {
            return res.send({
              status: "Error",
              error: "Unauthorized Request",
            });
          }
        }
      });
    } catch (err) {
      return res
        .status(500)
        .send({ status: "Error", message: "Internal Server Error" });
    }
  } else {
    return res.status(400).send("No Auth Token Found");
  }
});
module.exports = app;
