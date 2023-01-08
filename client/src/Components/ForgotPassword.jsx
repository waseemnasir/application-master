import {
  AlertTitle,
  Box,
  Button,
  Grid,
  Slide,
  Snackbar,
  TextField,
} from "@mui/material";
import axios from "axios";
import React from "react";
import MuiAlert from "@mui/material/Alert";
const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");
  const [openSuccess, setOpenSuccess] = React.useState(false);

  const [openError, setOpenError] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(" /api/reset-password", {
          email,
        })
        .then((res) => setOpenSuccess(true))
        .catch((err) => {
          err.response.status === 404 && setOpenError(true);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container " style={{ marginTop: "6rem" }}>
      <h1>Forgot Password</h1>

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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                fullWidth
                required
                label="Email address"
              />
            </Box>

            <div className="pt-2">
              <Button variant="outlined" type="submit" size="large">
                Send
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={openSuccess}
                TransitionComponent={Slide}
                onClose={(event, reason) => {
                  setOpenSuccess(false);
                }}
              >
                <Alert
                  severity="success"
                  sx={{ width: "50em" }}
                  // onClose={handleClose}
                >
                  <AlertTitle>Success</AlertTitle>
                  Link has been sent. Check your email
                </Alert>
              </Snackbar>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={openError}
                TransitionComponent={Slide}
                onClose={(event, reason) => {
                  setOpenError(false);
                }}
              >
                <Alert
                  severity="error"
                  sx={{ width: "50em" }}
                  // onClose={handleClose}
                >
                  <AlertTitle>Error</AlertTitle>
                  Invalid email address. User with this email does'nt exist
                </Alert>
              </Snackbar>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgotPassword;
