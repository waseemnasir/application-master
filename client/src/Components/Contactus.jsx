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
import MarkunreadIcon from "@mui/icons-material/Markunread";

import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

import MuiAlert from "@mui/material/Alert";
const Contactus = () => {
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [cNumber, setCNumber] = React.useState("");

  const [message, setMessage] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(" /api/sendEmail", {
        fName,
        lName,
        cNumber,
        email,
        subject,
        message,
      })
      .then((res) => {
        setOpen(true);
        setFName("");
        setLName("");
        setCNumber("");
        setSubject("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        marginTop: "6rem",
      }}
    >
      <Grid className="mt-5" container spacing={2}>
        <Grid item xs={3}></Grid>

        <Grid item xs={7}>
          <h1
            className="text-decoration-underline"
            style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}
          >
            Get in touch
          </h1>
          <h5 className="mt-5" style={{ fontFamily: "Times New Roman" }}>
            You can contact us any way that is convenient for you. We are
            available 24/7 via email. You can also use a quick contact
            form below or visit our office personally.
          </h5>
          <h5 style={{ fontFamily: "Times New Roman" }} className="mt-2">
            Email us with any questions or inquiries or use our contact data. We
            would be happy to answer your questions.
          </h5>

          <h3
            className="mt-5"
            style={{ color: "#228B22", fontFamily: "Times New Roman" }}
          >
            <MarkunreadIcon fontSize="large" className="mr-4" /> Email
          </h3>

          <h5>hmmotors425@gmail.com</h5>

          <h3
            className="mt-5"
            style={{ color: "#228B22", fontFamily: "Times New Roman" }}
          >
            Contact Form
          </h3>
          <form className="mt-5 mb-5" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginBottom: "1em",
                  }}
                >
                  <TextField
                    fullWidth
                    label="First Name"
                    value={fName}
                    onChange={(e) => {
                      setFName(e.target.value);
                    }}
                    required
                  />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginBottom: "1em",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Subject"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    required
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginBottom: "1em",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Last Name"
                    value={lName}
                    onChange={(e) => {
                      setLName(e.target.value);
                    }}
                    required
                  />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    fullWidth
                    type="tel"
                    label="Contact Number"
                    value={cNumber}
                    placeholder="+923104091437"
                    onChange={(e) => {
                      setCNumber(e.target.value);
                    }}
                    required
                  />
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                width: 900,
                maxWidth: "100%",
                marginBottom: "1em",
              }}
            >
              <TextField
                fullWidth
                type="email"
                label="Email address"
                placeholder="abc@abc.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </Box>

            <Box
              sx={{
                width: 900,
                maxWidth: "100%",
                marginBottom: "2em",
              }}
            >
              <TextField
                fullWidth
                label="Your Message"
                multiline
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
                rows={4}
              />
            </Box>
            <Button
              size="large"
              variant="contained"
              color="success"
              endIcon={<SendIcon />}
              type="submit"
            >
              Send
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              onClose={(event, reason) => {
                setOpen(false);
              }}
              open={open}
              TransitionComponent={Slide}
            >
              <Alert severity="success" sx={{ width: "50em" }}>
                <AlertTitle>Success</AlertTitle>
                Message has been sent
              </Alert>
            </Snackbar>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contactus;
