import React from "react";

import { Button, Grid } from "@mui/material";

const Service = (props) => {
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
  const moveToBuyerGuide = (e) => {
    e.preventDefault();
    props.history.push("/service-buyer-guide");
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
                  color: "white",
                  backgroundColor: "#228B22",

                  cursor: "pointer",

                  fontFamily: "Times New Roman",
                  fontSize: "2em",
                }}
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
                onClick={moveToBuyerGuide}
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
              <h2
                style={{
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                Our Advantages
              </h2>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <h1 className="mt-3" style={{ color: "#228B22 " }}>
                    <strong>.01</strong>
                  </h1>
                  <h3
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                    className="mt-3"
                  >
                    Actual Information
                  </h3>
                  <h5
                    className="mt-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    Using both open source and government databases, we can form
                    a complete vehicle report filled with actual information.
                  </h5>
                  <h1 className="mt-5" style={{ color: "#228B22 " }}>
                    <strong>.03</strong>
                  </h1>
                  <h3
                    className="mt-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    Affordable Price
                  </h3>
                  <h5
                    className="mt-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    While many companies offer reports at high prices, our
                    customers get a considerable discount on the facts about
                    their car.
                  </h5>
                </Grid>
                <Grid item xs={6}>
                  <h1 className="mt-3" style={{ color: "#228B22" }}>
                    <strong>.02</strong>
                  </h1>
                  <h3
                    className="mt-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    Reliability
                  </h3>
                  <h5
                    className="mt-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    As we offer cars from checked manufacturers, we also supply
                    them with reliable facts about each vehicle.
                  </h5>
                  <h1 className="mt-5" style={{ color: "#228B22" }}>
                    <strong>.04</strong>
                  </h1>
                  <h3
                    className="mt-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    Easy-to-read
                  </h3>
                  <h5
                    className="mt-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    Our reports are formed in a single document so that you
                    could get all the necessary information at once using our
                    services.
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
                Check available Cars
              </Button>
              <img
                className="mt-5 img-fluid"
                src="https://livedemo00.template-help.com/wt_59051/images/services-01-770x485.jpg"
                alt=""
              />
              <h5
                className="mt-4"
                style={{
                  fontFamily: "Times New Roman",
                }}
              >
                At AutoTraider, you can easily order any type of vehicle report
                to find out more about the car you are going to buy. Regardless
                of the vehicle model and classification, our experts will
                provide you with a highly professional report on your vehicle’s
                history. It includes the unique AutoTraider score to help you
                assess your vehicle’s durability including various insights
                necessary for a drive.
              </h5>
              <h5
                className="mt-1"
                style={{
                  fontFamily: "Times New Roman",
                }}
              >
                {" "}
                We also provide deep analysis of your car’s public and
                government records, offering the ability to decide whether the
                car you selected is the one you would like to buy or not. We use
                the freshest data for our reports so you can be sure you will
                get actual information on every aspect of your car.
              </h5>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Service;
