import React from "react";

import { Grid } from "@mui/material";

const ServiceWarrenty = (props) => {
  function changeBackGround(e) {
    e.target.style.background = "#228B22";
    e.target.style.color = "white";
    e.target.style.fontSize = "2em";
  }
  function originalPosition(e) {
    e.target.style.background = "white";
    e.target.style.color = "black";
  }
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
                onMouseEnter={changeBackGround}
                onMouseLeave={originalPosition}
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/service-customer-support");
                }}
              >
                Customer Support
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
                  props.history.push("/service-warrenty-programe");
                }}
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
                Warrenty Programs
              </h2>

              <h3
                style={{ color: "#228B22 ", fontFamily: "Times New Roman" }}
                className="mt-5"
              >
                Save your car from any trouble on the road
              </h3>
              <h5
                style={{
                  fontFamily: "Times New Roman",
                }}
              >
                Every driver wants his car to function as long as possible.
                However, there are some factors that may come in the way of
                trouble-free usage of your car. To eliminate them, car
                dealerships and manufacturers offer their customers various car
                warranty programs. AutoTraider is no exception. We provide our
                clients with extended warranty programs for both new and used
                vehicles. Even if your car is already warranted by the
                manufacturer, we can extend its warranty period and make sure it
                will receive proper coverage and maintenance as a part of the
                following programs
              </h5>
              <ul>
                <h5
                  style={{
                    fontFamily: "Times New Roman",
                  }}
                >
                  <li>New Vehicle Warranty Program</li>
                </h5>
                <h5
                  style={{
                    fontFamily: "Times New Roman",
                  }}
                >
                  <li>Premium Warranty Program</li>
                </h5>
                <h5
                  style={{
                    fontFamily: "Times New Roman",
                  }}
                >
                  <li>Used Vehicle Warranty Program</li>
                </h5>
                <h5
                  style={{
                    fontFamily: "Times New Roman",
                  }}
                >
                  <li>Car Care Warranty Program.</li>
                </h5>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ServiceWarrenty;
