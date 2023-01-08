import React from "react";

import { Button, Grid } from "@mui/material";

const ServiceBuyerGuide = (props) => {
  function changeBackGround(e) {
    e.target.style.background = "#228B22";
    e.target.style.color = "white";
    e.target.style.fontSize = "2em";
  }
  function originalPosition(e) {
    e.target.style.background = "white";
    e.target.style.color = "black";
  }
  const MoveToAvailableCars = (e) => {
    e.preventDefault();
    props.history.push("/products");
  };
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
                  color: "white",
                  backgroundColor: "#228B22",

                  cursor: "pointer",

                  fontFamily: "Times New Roman",
                  fontSize: "2em",
                }}
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
                  cursor: "pointer",

                  fontFamily: "Times New Roman",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/service-car-insurance");
                }}
                onMouseEnter={changeBackGround}
                onMouseLeave={originalPosition}
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
              <h2 style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}>
                Buyer's Guide
              </h2>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <img
                    style={{ width: "20em" }}
                    className="mt-3 img-fluid"
                    src="https://livedemo00.template-help.com/wt_59051/images/services-02-370x220.jpg"
                    alt=""
                  />
                  <img
                    style={{ width: "20em" }}
                    className="mt-5 img-fluid"
                    src="https://livedemo00.template-help.com/wt_59051/images/services-03-370x220.jpg"
                    alt=""
                  />
                  <img
                    style={{ width: "20em" }}
                    className="mt-5 img-fluid"
                    src="https://livedemo00.template-help.com/wt_59051/images/services-04-370x220.jpg"
                    alt=""
                  />
                </Grid>
                <Grid item xs={6}>
                  <h4
                    className="mt-2"
                    style={{
                      color: "#228B22",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    Select a car type
                  </h4>
                  <h5 style={{ fontFamily: "Times New Roman" }}>
                    To decide which car to buy, you need to select a car type
                    you would like to buy using our services. Afterward, gather
                    as much information as you can about each vehicle to compare
                    them in several important areas, such as driving experience,
                    reliability, fuel economy etc.
                  </h5>
                  <h4
                    className="mt-5"
                    style={{
                      color: "#228B22",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    Visit your Car Dealer
                  </h4>
                  <h5 style={{ fontFamily: "Times New Roman" }}>
                    To accurately compare one car with another, you should test
                    drive all of your candidate vehicles on the same day,
                    preferably on the same or similar roads. An auto mall is a
                    very efficient place to conduct your test drives, even if
                    you don’t end up buying from there.
                  </h5>
                  <h4
                    className="mt-5"
                    style={{
                      color: "#228B22",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    Negotiate a price
                  </h4>
                  <h5 style={{ fontFamily: "Times New Roman" }}>
                    The first thing to remember when negotiating your future car
                    price - don’t get easily manipulated with numbers – it can
                    result in overpaying for your vehicle. Using the monthly
                    payment as the focus, the salesperson can lump the whole
                    process together, including the price for the new vehicle.
                  </h5>
                </Grid>
              </Grid>
              <Button
                className="mt-3"
                variant="contained"
                color="success"
                onClick={MoveToAvailableCars}
                size="large"
              >
                Select a Car
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ServiceBuyerGuide;
