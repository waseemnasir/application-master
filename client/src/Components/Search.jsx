import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useHistory } from "react-router-dom";
import { AlertTitle, Box, Button, Grid, Slide, Snackbar } from "@mui/material";
import axios from "axios";

import MuiAlert from "@mui/material/Alert";
function clean(obj) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
  return obj;
}
const manufacturerOptions = [
  "KIA",
  "Honda",
  "Toyota",
  "Suzuki",
  "MG",
  "Hyundai",
];
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
const Search = () => {
  const history = useHistory();
  const [manufacturer, setManufacturer] = React.useState(
    manufacturerOptions[0]
  );
  const [transmission, setTransmission] = React.useState(
    transmissionOptions[0]
  );
  const [assembly, setAssembly] = React.useState(assemblyOptions[0]);
  const [inputValueAssembly, setInputValueAssembly] = React.useState();
  const [city, setCity] = React.useState(cityOptions[0]);
  const [inputValueManufacturer, setInputValueManufacturer] = React.useState();
  const [inputValueCity, setInputValueCity] = React.useState();
  const [inputValueTransmission, setInputValueTransmission] = React.useState();
  const [inputValueEngineType, setInputValueEngineType] = React.useState();
  const [engineType, setEngineType] = React.useState(engineTypeOptions[0]);
  const [maxModelYear, setMaxModelYear] = React.useState(
    new Date().getFullYear()
  );
  const [minModelYear, setMinModelYear] = React.useState(2000);
  const [registeredYear, setRegisteredYear] = React.useState();
  const [model, setModel] = React.useState();
  const [color, setColor] = React.useState();
  const [version, setVersion] = React.useState();
  const [minEngine, setMinEngine] = React.useState();
  const [maxEngine, setMaxEngine] = React.useState();
  const [minPrice, setMinPrice] = React.useState();
  const [maxPrice, setMaxPrice] = React.useState();
  const [minMileage, setMinMileage] = React.useState();
  const [maxMileage, setMaxMileage] = React.useState();
  const [engineAlert, setEngineAlert] = React.useState(false);
  const [mileageAlert, setMileageAlert] = React.useState(false);
  const [priceAlert, setPriceAlert] = React.useState(false);
  const [modelAlert, setModelAlert] = React.useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(maxEngine) < parseInt(minEngine)) {
      setEngineAlert(true);
      return;
    }
    if (maxMileage < minMileage) {
      setMileageAlert(true);
      return;
    }
    if (maxPrice < minPrice) {
      setPriceAlert(true);
      return;
    }
    if (maxModelYear < minModelYear) {
      setModelAlert(true);
      return;
    }
    axios({
      method: "post",
      url: "/api/advanced_search",
      data: clean({
        minModelYear,
        maxModelYear,
        minMileage,
        maxMileage,
        registeredYear,
        version,
        color,
        model,
        minEngine,
        maxEngine,
        minPrice,
        maxPrice,
        city: inputValueCity,
        transmission: inputValueTransmission,
        manufacturer: inputValueManufacturer,
        assembly: inputValueAssembly,
      }),
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((res) => {
      const cars = res.data;
      history.push("/products", { state: { cars } });
    });
  };
  const handleCloseEngine = () => {
    setEngineAlert(false);
  };

  const handleCloseMileage = () => {
    setMileageAlert(false);
  };

  const handleClosePrice = () => {
    setPriceAlert(false);
  };

  const handleCloseModel = () => {
    setModelAlert(false);
  };
  return (
    <div>
      <h1
        className=" mt-5 text-decoration-underline"
        style={{
          color: "black",
          fontFamily: "Times New Roman",
          fontWeight: "bold",
        }}
      >
        Advanced Search
      </h1>
      <h5 className="mt-5" style={{ fontFamily: "Times New Roman" }}>
        Please Complete and fill this form to search your desired Car. Thank
        You!
      </h5>
      <form onSubmit={handleSubmit}>
        <Grid className="mt-5" container spacing={2}>
          <Grid item xs={4}>
            <Autocomplete
              value={manufacturer}
              onChange={(event, newValue) => {
                setManufacturer(newValue);
              }}
              inputValue={inputValueManufacturer}
              onInputChange={(event, newInputValue) => {
                setInputValueManufacturer(newInputValue);
              }}
              id="controllable-states-demo"
              options={manufacturerOptions}
              sx={{ width: 300, maxWidth: "100%" }}
              renderInput={(params) => (
                <TextField fullWidth {...params} label="Manufacturer Company" />
              )}
            />

            <Box
              className="mt-5"
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={minModelYear}
                onChange={(e) => {
                  setMinModelYear(e.target.value);
                }}
                fullWidth
                label="Minimum Model Year"
                type="number"
              />
            </Box>

            <Box
              className="mt-5"
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={minEngine}
                onChange={(e) => {
                  setMinEngine(e.target.value);
                }}
                fullWidth
                label="Minimum Engine Power (cc)"
                type="number"
              />
            </Box>

            <Box
              className="mt-5"
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={minMileage}
                onChange={(e) => {
                  setMinMileage(e.target.value);
                }}
                fullWidth
                label="Minimum Mileage (KM)"
                type="number"
              />
            </Box>

            <Box
              className="mt-5"
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                }}
                fullWidth
                label="Minimum Price"
                type="number"
              />
            </Box>
            <Autocomplete
              className="mt-5"
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
              sx={{ width: 300, maxWidth: "100%" }}
              renderInput={(params) => (
                <TextField {...params} fullWidth label="Transmission" />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={model}
                onChange={(e) => {
                  setModel(e.target.value);
                }}
                fullWidth
                label="Model Name"
                type="text"
              />
            </Box>

            <Box
              className="mt-5"
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={maxModelYear}
                onChange={(e) => {
                  setMaxModelYear(e.target.value);
                }}
                fullWidth
                label="Maximum Model Year"
                type="number"
              />
            </Box>

            <Box
              className="mt-5"
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={maxEngine}
                onChange={(e) => {
                  setMaxEngine(e.target.value);
                }}
                fullWidth
                label="Maximum Engine Power (cc)"
                type="number"
              />
            </Box>
            <Box
              className="mt-5"
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={maxMileage}
                onChange={(e) => {
                  setMaxMileage(e.target.value);
                }}
                fullWidth
                label="Maximum Mileage (KM)"
                type="number"
              />
            </Box>
            <Box
              className="mt-5"
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                }}
                fullWidth
                label="Maximum Price"
                type="number"
              />
            </Box>
            <Autocomplete
              className="mt-5"
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
              sx={{ width: 300, maxWidth: "100%" }}
              renderInput={(params) => (
                <TextField fullWidth {...params} label="City" />
              )}
            />
          </Grid>

          <Grid item xs={4}>
            <Box
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={version}
                onChange={(e) => {
                  setVersion(e.target.value);
                }}
                fullWidth
                label="Version"
                type="text"
              />
            </Box>
            <Box
              className="mt-5"
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={registeredYear}
                onChange={(e) => {
                  setRegisteredYear(e.target.value);
                }}
                fullWidth
                label="Registered Year"
                type="number"
              />
            </Box>

            <Box
              className="mt-5"
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                fullWidth
                label="color"
                type="text"
              />
            </Box>

            <Autocomplete
              className="mt-5"
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
              sx={{ width: 300, maxWidth: "100%" }}
              renderInput={(params) => (
                <TextField fullWidth {...params} label="Assembly Type" />
              )}
            />

            <Autocomplete
              className="mt-5"
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
              sx={{ width: 300, maxWidth: "100%" }}
              renderInput={(params) => (
                <TextField fullWidth {...params} label="Engine Type" />
              )}
            />
          </Grid>
        </Grid>
        <Button
          className="mt-4 mb-5"
          variant="contained"
          color="success"
          size="large"
          type="submit"
        >
          Advanced Search
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={engineAlert}
        TransitionComponent={Slide}
      >
        <Alert
          severity="error"
          sx={{ width: "50em" }}
          onClose={handleCloseEngine}
        >
          <AlertTitle>Error</AlertTitle>
          Invalid Engine Values
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={mileageAlert}
        TransitionComponent={Slide}
      >
        <Alert
          severity="error"
          sx={{ width: "50em" }}
          onClose={handleCloseMileage}
        >
          <AlertTitle>Error</AlertTitle>
          Invalid Mileage Values
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={priceAlert}
        TransitionComponent={Slide}
      >
        <Alert
          severity="error"
          sx={{ width: "50em" }}
          onClose={handleClosePrice}
        >
          <AlertTitle>Error</AlertTitle>
          Invalid Price Values
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={modelAlert}
        TransitionComponent={Slide}
      >
        <Alert
          severity="error"
          sx={{ width: "50em" }}
          onClose={handleCloseModel}
        >
          <AlertTitle>Error</AlertTitle>
          Invalid Model Year Values
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Search;
