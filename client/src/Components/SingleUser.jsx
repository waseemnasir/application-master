import { Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const SingleUser = (props) => {
  const { user, history, onDelete } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAgree = (e) => {
    e.preventDefault();
    axios
      .delete(" /api/profile/" + user._id, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        onDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mb-5">
      <div
        className="border border-1 container mt-5"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <img
              className="img-fluid"
              style={{ height: "15em ", width: "20em" }}
              src={"/uploads/" + user.portrait}
              alt=""
            />
          </Grid>
          <Grid item xs={8}>
            <div className="d-flex justify-content-end">
              <i
                className="bi bi-pencil-square fa-2x"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/handle-users/update-client/" + user._id);
                }}
              ></i>
              <i
                className=" fas fa-times-circle fa-2x pt-2"
                style={{
                  marginLeft: "0.5em",
                  cursor: "pointer",
                  color: "black",
                }}
                onClick={handleClickOpen}
              ></i>
            </div>

            <div className="">
              <h5 style={{ color: "#999999" }}>First Name : {user.fName}</h5>
              <h5 style={{ color: "#999999" }}> Last Name : {user.lName}</h5>

              <h5 style={{ color: "#999999" }}>
                Contact Number : +{user.cNumber}
              </h5>
              <h5 style={{ color: "#999999" }}>Email address : {user.email}</h5>
            </div>
          </Grid>
        </Grid>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Confirmation Message?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are You sure , You want to delete this User!!!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withRouter(SingleUser);
