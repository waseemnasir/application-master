import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

import { Grid, Button, AlertTitle, Snackbar, Slide } from "@mui/material";
import axios from "axios";

import MuiAlert from "@mui/material/Alert";

const Signup = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [cNumber, setCNumber] = React.useState("");
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [openWarning, setOpenWarning] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !(
        fName === "" ||
        lName === "" ||
        cNumber === "" ||
        email === "" ||
        password === ""
      )
    ) {
      axios
        .post(" /api/sign-up", {
          fName,
          lName,
          cNumber,
          email,
          password,
        })
        .then((res) => {
          setOpenSuccess(true);

          window.location.href = "/login";
        })
        .catch((err) => {
          if (err.response) {
            err.response.status === 409 && setOpenError(true);
          } else if (err.request) {
            // The request was made but no response was received
            console.log(err.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", err.message);
          }
        });
    } else {
      setOpenWarning(true);
    }
  };

  return (
    <div className="container " style={{ marginTop: "6rem" }}>
      <h1>Sign up</h1>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={4.5}>
          <img
            className="img-fluid"
            style={{ width: "30em", height: "33em" }}
            src="https://images.unsplash.com/photo-1560626833-1ef263dc356c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw5NTMzODY4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
                value={fName}
                onChange={(e) => {
                  setFName(e.target.value);
                }}
                fullWidth
                required
                label="First Name"
                type="text"
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
                value={lName}
                onChange={(e) => {
                  setLName(e.target.value);
                }}
                fullWidth
                required
                label="Last Name"
                type="text"
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
                value={cNumber}
                onChange={(e) => {
                  setCNumber(e.target.value);
                }}
                fullWidth
                required
                placeholder="92-310-4091437"
                label="Contact Number"
                type="tel"
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                fullWidth
                required
                label="Email address"
                type="email"
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
                fullWidth
                required
                label="Password"
                type="password"
              />
            </Box>

            <div className="pt-2">
              <Button type="submit" variant="outlined" size="large">
                Sign up
              </Button>

              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                // autoHideDuration={3200}
                open={openError}
                onClose={(event, reason) => {
                  setOpenError(false);
                }}
                TransitionComponent={Slide}
              >
                <Alert
                  severity="error"
                  sx={{ width: "50em" }}
                  // onClose={handleClose}
                >
                  <AlertTitle>Error</AlertTitle>
                  This email already exist. Please try with another email
                </Alert>
              </Snackbar>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                // autoHideDuration={3200}
                open={openSuccess}
                onClose={(event, reason) => {
                  setOpenSuccess(false);
                }}
                TransitionComponent={Slide}
              >
                <Alert
                  severity="success"
                  sx={{ width: "50em" }}
                  // onClose={handleClose}
                >
                  <AlertTitle>Success</AlertTitle>
                  You have been registered successfully!!
                </Alert>
              </Snackbar>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                // autoHideDuration={3200}
                open={openWarning}
                onClose={(event, reason) => {
                  setOpenWarning(false);
                }}
                TransitionComponent={Slide}
              >
                <Alert
                  severity="warning"
                  sx={{ width: "50em" }}
                  // onClose={handleClose}
                >
                  <AlertTitle>Warning</AlertTitle>
                  Please fill all the fields to continue
                </Alert>
              </Snackbar>
            </div>
            <br />

            <p>
              Already have an account?{" "}
              <Link className="link-info" to="/login">
                Login here
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

export default Signup;
