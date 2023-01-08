import {
  AlertTitle,
  Box,
  Button,
  Grid,
  Slide,
  Snackbar,
  TextField,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";

const ResetPassword = () => {
  const [password, setPassword] = React.useState("");

  const { token } = useParams();
  const [openSuccess, setOpenSuccess] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const postData = () => {
    fetch(" /api/new-password", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          alert(data.err);
        } else {
          setOpenSuccess(true);
          window.location.href = "/login";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container " style={{ marginTop: "5rem" }}>
      <h1>Add New Password</h1>
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
              type="password"
              label="New Password"
            />
          </Box>

          <div className="pt-2">
            <Button
              variant="outlined"
              type="submit"
              size="large"
              onClick={postData}
            >
              Update
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
              <Alert severity="success" sx={{ width: "50em" }}>
                <AlertTitle>Success</AlertTitle>
                Your password has been updated successfully
              </Alert>
            </Snackbar>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResetPassword;
