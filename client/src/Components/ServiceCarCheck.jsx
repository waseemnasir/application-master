import React from "react";

import { Grid } from "@mui/material";

const ServiceCarCheck = (props) => {
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
                  color: "white",
                  backgroundColor: "#228B22",

                  cursor: "pointer",

                  fontFamily: "Times New Roman",
                  fontSize: "2em",
                }}
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
                Detailed Features
              </h2>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <img
                    style={{ width: "25em" }}
                    className="mt-3 img-fluid"
                    src="https://livedemo00.template-help.com/wt_59051/images/services-05-370x250.jpg"
                    alt=""
                  />
                  <h3
                    className="mt-4"
                    style={{
                      color: "#228B22 ",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    Why Consider Our Car Check?
                  </h3>
                  <h5
                    className="mt-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    If you prefer buying a used car instead of a new one, you
                    can certainly save a lot. But don’t forget that car check
                    becomes more than just a recommended procedure in such case.
                    Our car check service is perfectly designed for checking
                    both modern cars (manufactured since 2010) and used cars of
                    previous years.
                  </h5>
                </Grid>
                <Grid item xs={6}>
                  <img
                    style={{ width: "25em" }}
                    className="mt-3 ml-3 img-fluid"
                    src="https://livedemo00.template-help.com/wt_59051/images/services-06-370x250.jpg"
                    alt=""
                  />
                  <h3
                    className="mt-4 ml-3"
                    style={{
                      color: "#228B22",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    Make sure car drive is safe
                  </h3>
                  <h5
                    className="mt-3 ml-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    While some companies limit their range of services to a
                    simple vehicle history check, we go further and offer our
                    clients technical inspection and check of every car unit. It
                    is done for deeper understanding that we provide our clients
                    with high-quality cars without any breakages that can limit
                    their performance.
                  </h5>
                </Grid>
              </Grid>
              <h3
                style={{ color: "#228B22 ", fontFamily: "Times New Roman" }}
                className="mt-5"
              >
                Checking Your Car’s State
              </h3>
              <h5
                style={{
                  fontFamily: "Times New Roman",
                }}
              >
                In order to be sure you are buying a legal car that has no
                violations, we offer you our car check services that not only
                include extensive vehicle history check but also complete
                technical examination of the car. This service allows our
                customers to make a reasonable choice based on correct
                information provided by our specialists. We hire certified
                experts to make a detailed estimate of your car which includes:
              </h5>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ServiceCarCheck;
