import { Grid, Button, AlertTitle, Snackbar, Slide } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import MuiAlert from "@mui/material/Alert";

const Profile = (props) => {
  const [profile, setProfile] = useState([]);
  const [open, setOpen] = React.useState(false);

  const [success, setSuccess] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAgree = (e) => {
    e.preventDefault();
    axios
      .delete(" /api/profile/" + profile._id, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        localStorage.removeItem("token");
        setSuccess(true);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getData = () => {
    axios
      .get(" /api/getProfile", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getData, []);
  return (
    <div
      className="container"
      style={{ marginTop: "5rem", marginBottom: "6rem" }}
    >
      <hr />

      <h1
        style={{
          color: "#228B22",
          fontFamily: "Times New Roman",
          fontWeight: "bold",
        }}
      >
        Profile of User
      </h1>

      <hr />
      <br />
      <br />

      <Grid container spacing={2}>
        <Grid item xs={4.5}>
          <img
            className="img-fluid mt-3"
            style={{ height: "20em", width: "25em" }}
            src={`/uploads/${profile.portrait}`}
            alt=""
          />
        </Grid>

        <Grid item xs={7.5}>
          <h3
            style={{
              color: "black",
              fontFamily: "Times New Roman",
              marginTop: "2rem",
            }}
          >
            First Name : {profile.fName}
          </h3>
          <h3
            style={{
              color: "black",
              fontFamily: "Times New Roman",
            }}
          >
            Last Name : {profile.lName}
          </h3>
          <h3
            style={{
              color: "black",
              fontFamily: "Times New Roman",
            }}
          >
            Email Address : {profile.email}
          </h3>

          <h3
            style={{
              color: "black",
              fontFamily: "Times New Roman",
            }}
          >
            Contact Number : +{profile.cNumber}
          </h3>
          <div className="mt-4">
            <Button
              className="mr-3"
              variant="contained"
              color="success"
              startIcon={<EditIcon />}
              onClick={(e) => {
                props.history.push("/profile/update-profile");
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleClickOpen}
            >
              {" "}
              Delete
            </Button>
          </div>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={success}
        onClose={(event, reason) => {
          setSuccess(false);
        }}
        TransitionComponent={Slide}
      >
        <Alert severity="success" sx={{ width: "50em" }}>
          <AlertTitle>Success</AlertTitle>
          Your Account has been deleted successfully!!
        </Alert>
      </Snackbar>

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
            Are You sure , You want to delete your account!!!!
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

export default Profile;
