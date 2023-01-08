import React from "react";

import { Button, Grid } from "@mui/material";

import Alert from "@mui/material/Alert";
// import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const ServiceInsurance = (props) => {
  console.log(props.location.state);
  function changeBackGround(e) {
    e.target.style.background = "#228B22";
    e.target.style.color = "white";
    e.target.style.fontSize = "2em";
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push("/service-car-insurance/insurance-detail", {
      name,
      price,
    });
  };
  function originalPosition(e) {
    e.target.style.background = "white";
    e.target.style.color = "black";
  }
  const [name, setName] = React.useState("");

  const [price, setPrice] = React.useState("");

  return (
    <div className="mb-5" style={{ marginTop: "6rem" }}>
      <div className="container">
        <h1
          style={{
            fontSize: "50px",
            fontFamily: "Times New Roman",
            fontWeight: "bold",
          }}
        >
          Our Services
        </h1>
        <hr />
        <Grid container spacing={2}>
          <Grid item xs={5.5}>
            <div className="container">
              <h3
                className="center"
                style={{
                  cursor: "pointer",

                  fontFamily: "Times New Roman",
                }}
                onMouseEnter={changeBackGround}
                onMouseLeave={originalPosition}
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/service");
                }}
              >
                History Check
              </h3>
            </div>
            <div className="container">
              <h3
                className="center"
                style={{
                  cursor: "pointer",

                  fontFamily: "Times New Roman",
                }}
                onMouseEnter={changeBackGround}
                onMouseLeave={originalPosition}
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/service-buyer-guide");
                }}
              >
                Buyer's Guide
              </h3>
            </div>
            <div className="container">
              <h3
                className="center"
                style={{
                  cursor: "pointer",

                  fontFamily: "Times New Roman",
                }}
                onMouseEnter={changeBackGround}
                onMouseLeave={originalPosition}
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/service-car-check");
                }}
              >
                Car Check
              </h3>
            </div>
            <div className="container">
              <h3
                className="center"
                style={{
                  color: "white",
                  backgroundColor: "#228B22",

                  cursor: "pointer",

                  fontFamily: "Times New Roman",
                  fontSize: "2em",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/service-car-insurance");
                }}
              >
                Car Insurance
              </h3>
            </div>
            <div className="container">
              <h3
                className="center"
                style={{
                  cursor: "pointer",

                  fontFamily: "Times New Roman",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/service-customer-support");
                }}
                onMouseEnter={changeBackGround}
                onMouseLeave={originalPosition}
              >
                Customer Support
              </h3>
            </div>
            <div className="container">
              <h3
                className="center"
                style={{
                  cursor: "pointer",

                  fontFamily: "Times New Roman",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/service-warrenty-programe");
                }}
                onMouseEnter={changeBackGround}
                onMouseLeave={originalPosition}
              >
                Warrenty Programs
              </h3>
            </div>
          </Grid>

          <Grid item xs={6.5}>
            <div className="container">
              <form
                style={{ backgroundColor: "smoke white " }}
                onSubmit={handleSubmit}
              >
                <h1 style={{ fontFamily: "Times New Roman" }}>
                  Car Insurance Calculator
                </h1>
                <Box
                  className="mt-5"
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginBottom: "0.5em",
                  }}
                >
                  <TextField
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    fullWidth
                    required
                    label="Car Name"
                  />
                </Box>
                <Box
                  className="mt-4"
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    fullWidth
                    required
                    label="Car Price"
                  />
                </Box>
                <Button
                  className="mt-4"
                  type="submit"
                  variant="contained"
                  color="success"
                  size="large"
                >
                  Calculate
                </Button>
              </form>
              <h2
                className="mt-5"
                style={{
                  fontFamily: "Times New Roman",

                  color: "#228B22",
                }}
              >
                Benifits of Car Insurance
              </h2>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <h5 style={{ fontFamily: "Times New Roman" }}>
                    Comprehensive car insurance protects your car from any
                    man-made or natural calamities like terrorist attacks,
                    theft, riots, earthquakes, cyclones, hurricanes etc.
                    Additionally, it also saves your car from third party’s
                    claims/damages. At times car insurance can be confusing and
                    difficult to understand. However, there are strict
                    guidelines that should be followed by the Car Insurance
                    buyers while choosing the policy.
                  </h5>
                </Grid>
                <Grid item xs={6}>
                  <img
                    style={{ width: "25em" }}
                    className="mt-1 ml-5 img-fluid"
                    src="https://livedemo00.template-help.com/wt_59051/images/services-07-350x220.jpg"
                    alt=""
                  />
                </Grid>
              </Grid>
              <h2
                style={{
                  fontFamily: "Times New Roman",
                  color: " #228B22",
                }}
                className="mt-5"
              >
                How Car Insurance works?
              </h2>
              <h5 className="mt-5" style={{ fontFamily: "Times New Roman" }}>
                Car insurance is inherently tricky to navigate because you don't
                find out just how well it works (or doesn't) until you have an
                accident. And if you're lucky, that doesn't happen too often. So
                how do you know if you have the right kind of car insurance for
                your budget and lifestyle? We decided to answer this question by
                offering our customers professional car insurance to deliver
                them from any hardship.
              </h5>
              <h5 style={{ fontFamily: "Times New Roman" }}>
                Our services are perfectly suited for the cars we provide. After
                buying a car at AutoTraider, we will instantly settle all the
                questions connected with insuring your car from any financial
                problems you can have after an accident. We also help you find
                the right coverage at the best price and make it clear which
                insurance plan is suitable for you.
              </h5>
              <Alert className="mt-5" variant="filled" severity="info">
                <h5 style={{ fontFamily: "Times New Roman" }}>
                  Your insurance services provide reliability to any car driver,
                  I am now sure of it! I didn’t buy my vehicle at AutoTraider,
                  but you offered a perfect insurance plan that saved me from
                  possible financial problems on the road when I happened to be
                  in an unpleasant car accident.
                </h5>
                <h5
                  className="mt-2 ml-3"
                  style={{ fontFamily: "Times New Roman" }}
                >
                  - Dennis Williams
                </h5>
              </Alert>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ServiceInsurance;
