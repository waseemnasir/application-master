import React from "react";
import axios from "axios";

import SendIcon from "@mui/icons-material/Send";
import {
  AlertTitle,
  Autocomplete,
  Button,
  Grid,
  Slide,
  Snackbar,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
// import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./home.css";

import MuiAlert from "@mui/material/Alert";

const transmissionOptions = ["Automatic", "Manual"];

const engineTypeOptions = ["Petrol", "Diesel"];

const assemblyOptions = ["Local", "Imported"];
const cityOptions = [
  "Islamabad",
  "Karachi",
  "Lahore",
  "Multan",
  "Peshawar",
  "Kohat",
  "Sialkot",
];
const engineOptions = [
  "660",
  "800",
  "1000",
  "1300",
  "1500",
  "1800",
  "2000",
  "2700",
  "3000",
  "4500",
];

const AddCar = (props) => {
  const [model, setModel] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [modelYear, setModelYear] = React.useState("");
  const [color, setColor] = React.useState("");
  const [registeredYear, setRegisteredYear] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [version, setVersion] = React.useState("");
  const [inputValueCity, setInputValueCity] = React.useState("");
  const [city, setCity] = React.useState(cityOptions[0]);
  const [mileage, setMileage] = React.useState("");
  const [images, setImages] = React.useState();
  const [engine, setEngine] = React.useState(engineOptions[0]);
  const [inputValueEngine, setInputValueEngine] = React.useState("");
  const [engineType, setEngineType] = React.useState(engineTypeOptions[0]);
  const [inputValueEngineType, setInputValueEngineType] = React.useState("");
  const [manufacturer, setManufacturer] = React.useState("");
  const [assembly, setAssembly] = React.useState(assemblyOptions[0]);
  const [inputValueAssembly, setInputValueAssembly] = React.useState(
    assemblyOptions[0]
  );
  const [transmission, setTransmission] = React.useState(
    transmissionOptions[0]
  );
  const [inputValueTransmission, setInputValueTransmission] =
    React.useState("");
  const [success, setSuccess] = React.useState(false);

  const [imageAlert, setImageAlert] = React.useState(false);
  const [openWarning, setOpenWarning] = React.useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleImageAlert = () => {
    setImageAlert(false);
  };
  const handleChange = (e) => {
    e.preventDefault();
    var files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      if (!/image/.test(files[i].type)) {
        setImageAlert(true);
        e.target.value = null;
        return;
      }
      setImages(e.target.files);
    }
  };
  const handlePostRequest = async (e) => {
    e.preventDefault();
    if (
      !(
        model === "" ||
        price === "" ||
        modelYear === "" ||
        color === "" ||
        description === "" ||
        version === "" ||
        inputValueCity === "" ||
        mileage === "" ||
        images === "" ||
        inputValueEngine === "" ||
        inputValueEngineType === "" ||
        inputValueAssembly === "" ||
        inputValueTransmission === "" ||
        manufacturer === ""
      )
    ) {
      let formData = new FormData();
      formData.append("model", model);
      formData.append("price", price);
      formData.append("modelYear", modelYear);
      formData.append("color", color);
      formData.append("description", description);
      formData.append("version", version);
      formData.append("city", inputValueCity);
      formData.append("mileage", mileage);
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      formData.append("engine", parseInt(inputValueEngine));
      formData.append("engineType", inputValueEngineType);
      formData.append("assembly", inputValueAssembly);
      formData.append("transmission", inputValueTransmission);
      formData.append("manufacturer", manufacturer);
      formData.append("registeredYear", registeredYear);
      try {
        const res = await axios({
          method: "post",
          url: "/api/cars",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": localStorage.getItem("token"),
          },
        });
        if (res) {
          setSuccess(true);

          window.location.href = "/products";
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      setOpenWarning(true);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#F7F9F9",
        marginTop: "8rem",
        marginBottom: "5rem",
      }}
    >
      <div
        className="container-fluid my-5"
        style={{ backgroundColor: "#DCDCDC", height: "15em" }}
      >
        <h1
          className="center pt-4"
          style={{
            color: "#228B22",
            fontFamily: "Times New Roman",
            fontWeight: "bold",
          }}
        >
          Sell Your Car With Simple & Easy Steps
        </h1>
        <h4 className="pt-3 center">It will take less than a minute</h4>
        <div className="d-flex justify-content-center pt-3">
          <img
            className="img-fluid"
            style={{ height: "4em", width: "4em" }}
            src="https://wsa1.pakwheels.com/assets/sell-icons/car-221614dec8c0f3717dede556a5daad01.svg"
            alt=""
          />
          <h4 className="mt-3 ml-3 mr-3">Enter Your Car Information</h4>

          <img
            className="img-fluid"
            style={{ height: "4em", width: "4em" }}
            src="https://wsa1.pakwheels.com/assets/sell-icons/photos-708994063564767acaca738e1261f90d.svg"
            alt=""
          />
          <h4 className="mt-3 ml-3 mr-3">Upload Photos </h4>

          <img
            className="img-fluid"
            style={{ height: "4em", width: "4em" }}
            src="https://wsa4.pakwheels.com/assets/sell-icons/tag-3ba531fca999b37f89be28609fe9e9c0.svg"
            alt=""
          />
          <h4 className="mt-3 ml-3 mr-3">Enter Selling Price</h4>
        </div>
      </div>

      <h1
        className="pt-3 center text-decoration-underline"
        style={{
          color: "#228B22",
          fontFamily: "Times New Roman",
          fontWeight: "bold",
        }}
      >
        Post New Record
      </h1>

      <div className=" mt-4   ">
        <form
          className="mt-5 container"
          encType="multipart/form-data"
          onSubmit={handlePostRequest}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  marginBottom: "2em",
                }}
              >
                <TextField
                  value={manufacturer}
                  onChange={(e) => {
                    setManufacturer(e.target.value);
                  }}
                  fullWidth
                  required
                  label="Manufacturer Company"
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
                  value={modelYear}
                  onChange={(e) => {
                    setModelYear(e.target.value);
                  }}
                  fullWidth
                  required
                  label="Model Year"
                  type="number"
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
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  fullWidth
                  required
                  label="Exterior Color"
                  type="text"
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  marginBottom: "2em",
                }}
              >
                <TextField
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value);
                  }}
                  fullWidth
                  required
                  label="Model / Name"
                  type="text"
                />
              </Box>

              <Autocomplete
                value={transmission}
                onChange={(event, newValue) => {
                  setTransmission(newValue);
                }}
                inputValue={inputValueTransmission}
                onInputChange={(event, newInputValue) => {
                  setInputValueTransmission(newInputValue);
                }}
                id="controllable-states-demo"
                options={transmissionOptions}
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  marginBottom: "2em",
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Transmission of Car" />
                )}
              />

              <Autocomplete
                value={engine}
                onChange={(event, newValue) => {
                  setEngine(newValue);
                }}
                inputValue={inputValueEngine}
                onInputChange={(event, newInputValue) => {
                  setInputValueEngine(newInputValue);
                }}
                id="controllable-states-demo"
                options={engineOptions}
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  marginBottom: "2em",
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Engine Displacement (cc)" />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  marginBottom: "2em",
                }}
              >
                <TextField
                  value={version}
                  onChange={(e) => {
                    setVersion(e.target.value);
                  }}
                  fullWidth
                  required
                  label="Version of Car"
                  type="text"
                />
              </Box>
              <Autocomplete
                value={city}
                onChange={(event, newValue) => {
                  setCity(newValue);
                }}
                inputValue={inputValueCity}
                onInputChange={(event, newInputValue) => {
                  setInputValueCity(newInputValue);
                }}
                id="controllable-states-demo"
                options={cityOptions}
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  marginBottom: "2em",
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Registered City" />
                )}
              />

              <Autocomplete
                value={engineType}
                onChange={(event, newValue) => {
                  setEngineType(newValue);
                }}
                inputValue={inputValueEngineType}
                onInputChange={(event, newInputValue) => {
                  setInputValueEngineType(newInputValue);
                }}
                id="controllable-states-demo"
                options={engineTypeOptions}
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  marginBottom: "2em",
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Engine Type" />
                )}
              />
            </Grid>

            <Grid item xs={3}>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  marginBottom: "2em",
                }}
              >
                <TextField
                  value={registeredYear}
                  onChange={(e) => {
                    setRegisteredYear(e.target.value);
                  }}
                  fullWidth
                  required
                  label="Registered Year"
                  type="number"
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
                  value={mileage}
                  onChange={(e) => {
                    setMileage(e.target.value);
                  }}
                  label="Mileage of car"
                  fullWidth
                  required
                  type="number"
                  // sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">KM</InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Autocomplete
                value={assembly}
                onChange={(event, newValue) => {
                  setAssembly(newValue);
                }}
                inputValue={inputValueAssembly}
                onInputChange={(event, newInputValue) => {
                  setInputValueAssembly(newInputValue);
                }}
                id="controllable-states-demo"
                options={assemblyOptions}
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  marginBottom: "2em",
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Assembly Type" />
                )}
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              width: 1200,
              maxWidth: "100%",
              marginBottom: "2em",
            }}
          >
            <TextField
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              fullWidth
              required
              label="Price of Car"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">PKR</InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            sx={{
              width: 1200,
              maxWidth: "100%",
              marginBottom: "2em",
            }}
          >
            <TextField
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              fullWidth
              multiline
              rows={4}
              required
              label="Description of car"
              type="text"
            />
          </Box>
          <div className="mb-4">
            <input type="file" required onChange={handleChange} multiple />
          </div>
          <Button
            size="large"
            variant="contained"
            color="success"
            endIcon={<SendIcon />}
            type="submit"
          >
            Submit & Continue
          </Button>

          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            autoHideDuration={6000}
            open={success}
            TransitionComponent={Slide}
          >
            <Alert
              severity="success"
              sx={{ width: "50em" }}
              // onClose={handleClose}
            >
              <AlertTitle>Success</AlertTitle>
              Record has been Posted successfully!!
            </Alert>
          </Snackbar>

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
              <AlertTitle>Error</AlertTitle>
              Only Images are allowed
            </Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            onClose={(event, reason) => {
              setOpenWarning(false);
            }}
            autoHideDuration={6000}
            open={openWarning}
            TransitionComponent={Slide}
          >
            <Alert
              severity="success"
              sx={{ width: "50em" }}
              // onClose={handleClose}
            >
              <AlertTitle>Warning</AlertTitle>
              Please fill all the fields to continue!!
            </Alert>
          </Snackbar>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
