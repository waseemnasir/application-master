import { AlertTitle, Modal, Slide, Snackbar } from "@mui/material";
import React, { useEffect } from "react";
import logo from "./Images/Chat Logo.png";
import { socket } from "../socket/connection";
import axios from "axios";
import moment from "moment";
import "./Chat.css";

import MuiAlert from "@mui/material/Alert";
import ReactScrollableFeed from "react-scrollable-feed";
const Chat = () => {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const [conversationId, setConversationId] = React.useState();
  const [chat, setChat] = React.useState([]);
  const userRole = localStorage.getItem("userRole");
  const [adminChats, setAdminChats] = React.useState([]);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const alertClose = () => {
    setOpenAlert(false);
  };

  useEffect(() => {
    if (userRole === "admin") {
      axios
        .get("/api/getAvailableChats", {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setAdminChats(res.data);
        });
    }
    if (localStorage.getItem("token") && open && !(userRole === "admin")) {
      axios
        .get("/api/getChat", {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setChat(res.data.chat);
          setConversationId(res.data._id);
        });
    }
    if (open && conversationId)
      socket.emit("join", {
        senderId: localStorage.getItem("userId"),
        conversationId,
      });
  }, [open, conversationId]);
  const sendChat = async (e) => {
    e.preventDefault();
    socket.emit("chat", {
      message,
      senderId: localStorage.getItem("userId"),
      conversationId,
    });
    setMessage("");
  };
  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  }, [chat]);

  const handleClose = () => setOpen(false);
  return (
    <div className="  ">
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openAlert}
        TransitionComponent={Slide}
      >
        <Alert severity="error" sx={{ width: "50em" }} onClose={alertClose}>
          <AlertTitle>Alert</AlertTitle>
          Login is required to proceed!!
        </Alert>
      </Snackbar>

      <img
        style={{
          width: "8em",
          cursor: "pointer",
          position: "fixed",
          bottom: "0",
          right: "0",
          zIndex: "1",
        }}
        src={logo}
        onClick={() => {
          localStorage.getItem("token") ? setOpen(true) : setOpenAlert(true);
        }}
        alt=""
      />

      <Modal
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"

       >
        <div className="container  pb-5 px-4 " >
          <div className="row rounded-lg overflow-hidden shadow justify-content-center">
            {userRole === "admin" && (
              <div className="col-5 px-0">
                <div className="bg-white">
                  <div className="bg-dark px-4 py-2 bg-light">
                    <p style={{ color: "white" }} className="h5 mb-0 py-1">
                      Recent
                    </p>
                  </div>
                  <div className="messages-box">
                    <div className="list-group rounded-0">
                      {adminChats.map((chat) => {
                        return (
                          <div
                            style={{ backgroundColor: "#F2F3F4 " }}
                            href="#"
                            key={chat._id}
                            className="list-group-item list-group-item-action border text-black rounded-0"
                            onClick={() => {
                              setChat(chat.chat);
                              setConversationId(chat._id);
                            }}
                            cursor={"pointer"}
                          >
                            <div className="media">
                              <div className="media-body ml-4">
                                <div className="d-flex align-items-center justify-content-between mb-1">
                                  <h6 className="mb-0">
                                    {`${chat.client_id.fName} ${chat.client_id.lName}`}
                                  </h6>
                                  <small className="small font-weight-bold ">
                                    {moment(
                                      chat.chat[chat.chat.length - 1].date
                                    ).calendar()}
                                  </small>
                                </div>
                                <p className="font-italic mb-0 text-small">
                                  {chat.chat[chat.chat.length - 1].message}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="col-5 px-0">
              <div className="bg-white">
                <div className="bg-dark px-4 py-2">
                  <p style={{ color: "white" }} className="h5 mb-0 py-1">
                    Chat Box
                    <i
                      id="close"
                      className="fas fa-times-circle  pt-1 "
                      onClick={handleClose}
                    ></i>
                  </p>
                </div>
                <div className="px-0 py-2 chat-box bg-white">
                  {/* Receiver Message */}
                  <ReactScrollableFeed>
                    {chat.map((payload, index) => {
                      if (payload.senderId === localStorage.getItem("userId"))
                        return (
                          <div
                            key={index}
                            className="media w-50 ml-auto mr-3 mb-3"
                          >
                            <div className="media-body">
                              <div
                                style={{ backgroundColor: "#2a52be" }}
                                className=" rounded py-2 px-3 mb-2"
                              >
                                <p className="text-small mb-0 text-white">
                                  {/* Users Message Here */}
                                  {payload.message}
                                </p>
                              </div>
                              <p className="small text-muted">
                                {moment(payload.date).calendar()}
                              </p>
                            </div>
                          </div>
                        );
                      else
                        return (
                          <div className="media-body ml-3">
                            <div
                              style={{
                                backgroundColor: "#ECF0F1",
                                maxWidth: "50%",
                              }}
                              className="rounded py-2 px-3 mb-2"
                            >
                              <p
                                style={{ color: "#000" }}
                                className="text-small mb-0  "
                              >
                                {payload.message}
                              </p>
                            </div>
                            <p className="small text-muted mb-2">
                              {moment(payload.date).calendar()}
                            </p>
                          </div>
                        );
                    })}
                  </ReactScrollableFeed>
                </div>

                {/* <!-- Typing area --> */}
                <form onSubmit={sendChat} className="bg-light">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Type a message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      aria-describedby="button-addon2"
                      className="form-control rounded-0 border-0 py-4 bg-light"
                    />
                    <div className="input-group-append">
                      <button
                        id="button-addon2"
                        type="submit"
                        className="btn btn-link"
                      >
                        {" "}
                        <i className="fa fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Chat;
