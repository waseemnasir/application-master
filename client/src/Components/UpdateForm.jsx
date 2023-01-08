import React from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./home.css";

import MuiAlert from "@mui/material/Alert";

import DeleteIcon from "@mui/icons-material/Delete";
import {
  AlertTitle,
  Autocomplete,
  Button,
  Grid,
  InputAdornment,
  Slide,
  Snackbar,
} from "@mui/material";
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

const UpdateForm = (props) => {
  const [model, setModel] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [soldPrice, setSoldPrice] = React.useState("");
  const [modelYear, setModelYear] = React.useState("");
  const [color, setColor] = React.useState("");
  const [registeredYear, setRegisteredYear] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [version, setVersion] = React.useState("");
  const [inputValueCity, setInputValueCity] = React.useState("");
  const [city, setCity] = React.useState(cityOptions[0]);
  const [mileage, setMileage] = React.useState("");
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

  const [deleteImages, setDeleteImages] = React.useState([]);
  const [oldImages, setOldImages] = React.useState([]);
  const [images, setImages] = React.useState([]);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = () => {
    setOpenAlert(false);
  };
  const handleSuccessAlert = () => {
    setSuccess(false);
  };
  const id = props.match.params.id;
  React.useEffect(() => {
    axios
      .get(" /api/cars/" + id, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const data = res.data;
        setModel(data.model);
        setPrice(data.price);
        setModelYear(data.modelYear);
        setColor(data.color);
        setRegisteredYear(data.registeredYear);
        setDescription(data.description);
        setVersion(data.version);
        setCity(cityOptions[cityOptions.findIndex((v) => v === data.city)]);
        setMileage(data.mileage);
        setEngine(
          engineOptions[engineOptions.findIndex((v) => v === data.engine)]
        );
        setEngineType(
          engineTypeOptions[
            engineTypeOptions.findIndex((v) => v === data.engineType)
          ]
        );
        setManufacturer(data.manufacturer);
        setAssembly(
          assemblyOptions[assemblyOptions.findIndex((v) => v === data.assembly)]
        );
        setTransmission(
          transmissionOptions[
            transmissionOptions.findIndex((v) => v === data.transmission)
          ]
        );
        setOldImages(data.images);
      });
  }, [id]);

  const handleUpdateRequest = (e) => {
    e.preventDefault();
    if (
      !(
        model === "" ||
        price === "" ||
        modelYear === "" ||
        color === "" ||
        registeredYear === "" ||
        description === "" ||
        version === "" ||
        inputValueCity === "" ||
        mileage === "" ||
        inputValueEngine === "" ||
        inputValueEngineType === "" ||
        manufacturer === "" ||
        inputValueAssembly === "" ||
        inputValueTransmission === ""
      )
    ) {
      let formData = new FormData();
      formData.append("model", model);
      formData.append("price", price);
      formData.append("modelYear", modelYear);
      formData.append("color", color);
      formData.append("registeredYear", registeredYear);
      formData.append("description", description);
      formData.append("version", version);
      formData.append("city", inputValueCity);
      formData.append("mileage", mileage);
      formData.append("engine", inputValueEngine);
      formData.append("engineType", inputValueEngineType);
      formData.append("manufacturer", manufacturer);
      formData.append("assembly", inputValueAssembly);
      formData.append("transmission", inputValueTransmission);
      formData.append("salePrice", soldPrice);
      formData.append("oldImages", JSON.stringify(oldImages));
      formData.append("deleteImages", JSON.stringify(deleteImages));
      for (let i = 0; i < images.length; i++) {
        formData.append("newImages", images[i]);
      }
      axios({
        method: "put",
        url: "/api/cars/" + id,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": localStorage.getItem("token"),
        },
      })
        .then(() => {
          setSuccess(true);
          window.location.href = "/products";
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      alert("Please enter all the required fields");
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#F7F9F9",
        marginTop: "8rem",
      }}
    >
      <div
        className="container-fluid my-5"
        style={{ backgroundColor: "#DCDCDC", height: "15em" }}
      >
        <h1 className="center pt-4" style={{ color: "#00008B" }}>
          Update Your Car's Record With Simple & Easy Steps
        </h1>
        <h4 className="pt-3 center">It will take less than a minute</h4>
        <div className="d-flex justify-content-center pt-3">
          <img
            className="img-fluid"
            style={{ height: "4em", width: "4em" }}
            src="https://wsa1.pakwheels.com/assets/sell-icons/car-221614dec8c0f3717dede556a5daad01.svg"
            alt=""
          />
          <h4 className="mt-3 ml-3 mr-3">Update Your Car Information</h4>

          <img
            className="img-fluid"
            style={{ height: "4em", width: "4em" }}
            src="https://wsa1.pakwheels.com/assets/sell-icons/photos-708994063564767acaca738e1261f90d.svg"
            alt=""
          />
          <h4 className="mt-3 ml-3 mr-3">Update Photos </h4>

          <img
            className="img-fluid"
            style={{ height: "4em", width: "4em" }}
            src="https://wsa4.pakwheels.com/assets/sell-icons/tag-3ba531fca999b37f89be28609fe9e9c0.svg"
            alt=""
          />
          <h4 className="mt-3 ml-3 mr-3">Update Selling Price</h4>
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
        Update Car's Record
      </h1>

      <div className="mt-4">
        <form
          className=" mt-5 container"
          onSubmit={handleUpdateRequest}
          encType="multipart/form-data"
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
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              marginBottom: "2em",
            }}
          >
            <TextField
              value={soldPrice || ""}
              onChange={(e) => {
                setSoldPrice(e.target.value);
              }}
              fullWidth
              label="Sold Price Of Car (if sold)"
              type="number"
            />
          </Box>
          {oldImages.map((image, index) => {
            return (
              <div key={index} className="mb-4">
                <img
                  key={index}
                  style={{ height: "10em", width: "15em" }}
                  src={`/uploads/${image}`}
                  alt="pic"
                />
                <div>
                  <Button
                    className="mt-2"
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={(e) => {
                      var imageName =
                        e.target.parentNode.parentNode.childNodes[0].attributes[0].nodeValue.split(
                          "/"
                        );
                      setDeleteImages([
                        ...deleteImages,
                        imageName[imageName.length - 1],
                      ]);
                      setOldImages(
                        oldImages.filter(
                          (image) => image !== imageName[imageName.length - 1]
                        )
                      );
                    }}
                  >
                    {" "}
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
          <div className="mb-4">
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={openAlert}
              TransitionComponent={Slide}
            >
              <Alert
                severity="error"
                sx={{ width: "50em" }}
                onClose={handleClose}
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
                Record has been updated successfully!!!!
              </Alert>
            </Snackbar>
            <input
              multiple
              type="file"
              onChange={(e) => {
                e.preventDefault();
                var files = e.target.files;
                for (let i = 0; i < files.length; i++) {
                  if (!/image/.test(files[i].type)) {
                    setOpenAlert(true);
                    e.target.value = null;
                    return;
                  }
                  setImages(e.target.files);
                }
              }}
            />
          </div>
          <div className="mb-5">
            <Button variant="outlined" size="large" type="submit">
              Update & Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
