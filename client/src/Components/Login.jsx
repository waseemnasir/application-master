import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//import { Redirect } from "react-router-dom";
import { Grid, Button, Snackbar, Slide, AlertTitle } from "@mui/material";
import axios from "axios";
// import jwt from "jsonwebtoken";

import MuiAlert from "@mui/material/Alert";

import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const [openValidEmail, setOpenValidEmail] = React.useState(false);

  const [openValidPassword, setOpenValidPassword] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(email === "" || password === "")) {
      axios
        .post("/api/login", {
          email,
          password,
        })
        .then(async (response) => {
          if (response.data.user) {
            localStorage.setItem("token", response.data.user);
            localStorage.setItem("userId", response.data.userId);
            setOpen(true);
            window.location.href = "/";
          }
        })
        .catch((err) => {
          if (err.response) {
            err.response.status === 401 && setOpenValidEmail(true);
            err.response.status === 400 && setOpenValidPassword(true);
          } else if (err.request) {
            // The request was made but no response was received
            console.log(err.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", err.message);
          }
        });
    } else {
      alert("Please Enter All the required Fields");
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleCloseAlertEmail = () => {
    setOpenValidEmail(false);
  };
  const handleCloseAlertPassword = () => {
    setOpenValidPassword(false);
  };

  return (
    <div className="container " style={{ marginTop: "6rem" }}>
      <h1>Login</h1>

      <br />

      <Grid container spacing={2}>
        <Grid item xs={4.5}>
          <img
            className="img-fluid"
            style={{ width: "30em", height: "33em" }}
            src="https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVsbG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </Grid>

        <Grid item xs={7.5}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                marginBottom: "2em",
              }}
            >
              <TextField
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                fullWidth
                required
                label="Email address"
              />
            </Box>

            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                marginBottom: "2em",
              }}
            >
              <TextField
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                fullWidth
                required
                label="Password"
              />
            </Box>
            <div className="pt-2">
              <Button variant="outlined" type="submit" size="large">
                Login
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={open}
                TransitionComponent={Slide}
              >
                <Alert
                  severity="success"
                  sx={{ width: "50em" }}
                  onClose={handleClose}
                >
                  <AlertTitle>Success</AlertTitle>
                  Login Successfull!!!
                </Alert>
              </Snackbar>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={openValidEmail}
                TransitionComponent={Slide}
              >
                <Alert
                  severity="error"
                  sx={{ width: "50em" }}
                  onClose={handleCloseAlertEmail}
                >
                  <AlertTitle>Error</AlertTitle>
                  Invalid Email!!!
                </Alert>
              </Snackbar>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={openValidPassword}
                TransitionComponent={Slide}
              >
                <Alert
                  severity="error"
                  sx={{ width: "50em" }}
                  onClose={handleCloseAlertPassword}
                >
                  <AlertTitle>Error</AlertTitle>
                  Invalid Password!!!
                </Alert>
              </Snackbar>
            </div>
            <br />

            <p>
              Don't have an account?{" "}
              <Link className="link-info" to="/sign-up">
                Register here
              </Link>
            </p>

            <p>
              Forgot Your Password?{" "}
              <Link className="link-info" to="/reset-password">
                Reset Your Password
              </Link>
            </p>
            <br />
            <br />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
