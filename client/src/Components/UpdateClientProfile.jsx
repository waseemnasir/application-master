import { AlertTitle, Button, Slide, Snackbar, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";

import MuiAlert from "@mui/material/Alert";

const UpdateClientProfile = (props) => {
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cNumber, setCNumber] = React.useState("");
  const [image, setImage] = React.useState("");
  const [imageAlert, setImageAlert] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const id = props.match.params.id;

  const handleImageAlert = () => {
    setImageAlert(false);
  };
  const handleSuccessAlert = () => {
    setSuccess(false);
  };

  React.useEffect(() => {
    axios
      .get(" /api/getClient/" + id, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const data = res.data.data;
        setFName(data.fName);
        setLName(data.lName);
        setEmail(data.email);
        setCNumber(data.cNumber);
      });
  }, [id]);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(fName === "" || lName === "" || email === "" || cNumber === "")) {
      var formData = new FormData();
      formData.append("fName", fName);
      formData.append("lName", lName);
      formData.append("email", email);
      formData.append("cNumber", cNumber);
      formData.append("portrait", image);
      axios({
        method: "put",
        url: "/api/profile/" + id,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": localStorage.getItem("token"),
        },
      })
        .then(() => {
          setSuccess(true);
          window.location.href = "/handle-users";
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please enter all the fields");
    }
  };
  return (
    <div className="container mt-5">
      <h1
        className="center mt-5"
        style={{
          color: "#228B22",
          fontFamily: "Times New Roman",
          fontWeight: "bold",
        }}
      >
        Update Your Client's Profile
      </h1>
      <div className=" mt-4  container-fluid ">
        <div
          className="d-flex pb-5  justify-content-center  container"
          style={{ backgroundColor: "white" }}
        >
          <form
            className=" mt-5 justify-content-center"
            onSubmit={handleSubmit}
          >
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                marginBottom: "2em",
              }}
            >
              <TextField
                value={fName || ""}
                fullWidth
                label="First Name"
                required
                type="text"
                id="fullWidth"
                onChange={(e) => {
                  setFName(e.target.value);
                }}
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
                value={lName || ""}
                fullWidth
                label="Last Name"
                required
                type="text"
                id="fullWidth"
                onChange={(e) => {
                  setLName(e.target.value);
                }}
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
                value={email || ""}
                fullWidth
                label="Email address"
                required
                type="text"
                id="fullWidth"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                value={cNumber || ""}
                fullWidth
                label="Contact Number"
                required
                type="text"
                id="fullWidth"
                onChange={(e) => {
                  setCNumber(e.target.value);
                }}
              />
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={imageAlert}
                TransitionComponent={Slide}
              >
                <Alert
                  severity="error"
                  sx={{ width: "50em" }}
                  onClose={handleImageAlert}
                >
                  <AlertTitle>Alert</AlertTitle>
                  Only Images Are Allowed
                </Alert>
              </Snackbar>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={success}
                TransitionComponent={Slide}
              >
                <Alert
                  severity="success"
                  sx={{ width: "50em" }}
                  onClose={handleSuccessAlert}
                >
                  <AlertTitle>Success</AlertTitle>
                  Client's Profile has been updated successfully!!
                </Alert>
              </Snackbar>
              <input
                className="mt-4"
                type="file"
                onChange={(e) => {
                  e.preventDefault();
                  var files = e.target.files;
                  for (let i = 0; i < files.length; i++) {
                    if (!/image/.test(files[i].type)) {
                      setImageAlert(true);
                      e.target.value = null;
                      return;
                    }
                    setImage(e.target.files[0]);
                  }
                }}
              />
            </Box>
            <Button variant="outlined" onClick={handleSubmit}>
              Update & Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateClientProfile;
