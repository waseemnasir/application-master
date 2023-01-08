import React from "react";

import { Grid } from "@mui/material";

const ServiceCustomerSupport = (props) => {
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
                  color: "white",
                  backgroundColor: "#228B22",

                  cursor: "pointer",
                  fontSize: "2em",

                  fontFamily: "Times New Roman",
                }}
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
                Customer Support
              </h2>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <img
                    style={{ width: "20em" }}
                    className="mt-3 img-fluid"
                    src="https://livedemo00.template-help.com/wt_59051/images/services-08-370x220.jpg"
                    alt=""
                  />
                  <h3
                    className="mt-4"
                    style={{ color: "#228B22 ", fontFamily: "Times New Roman" }}
                  >
                    Getting Free Online Support
                  </h3>
                  <h5
                    className="mt-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    After buying a car at AutoTraider, you may have some
                    questions regarding additional service and support for your
                    vehicle. Members of our online support department will be
                    glad to answer any question concerning payments, warranty
                    programs, vehicle check, insurance and other services you
                    can get from AutoTrader.
                  </h5>
                  <img
                    style={{ width: "20em" }}
                    className="mt-5 img-fluid"
                    src="https://livedemo00.template-help.com/wt_59051/images/services-10-370x220.jpg"
                    alt=""
                  />
                  <h3
                    className="mt-4"
                    style={{ color: "#228B22", fontFamily: "Times New Roman" }}
                  >
                    Auto Trader Loan Payment Programe
                  </h3>
                  <h5
                    className="mt-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    To simplify the procedure of paying out for your car, we
                    have recently introduced our Loan Payment Program. It allows
                    our customers to schedule their monthly loan payments to be
                    automatically withdrawn each month from their AutoTraider
                    account. Taking part in such a program also has a range of
                    benefits including discounts on technical inspection.
                  </h5>
                </Grid>
                <Grid item xs={6}>
                  <img
                    style={{ width: "20em" }}
                    className="mt-3 ml-3 img-fluid"
                    src="https://livedemo00.template-help.com/wt_59051/images/services-09-370x220.jpg"
                    alt=""
                  />
                  <h3
                    className="mt-4 ml-3"
                    style={{ color: "#228B22 ", fontFamily: "Times New Roman" }}
                  >
                    Customer's Experience
                  </h3>
                  <h5
                    className="mt-3 ml-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    We work for you and we try to get better with every vehicle
                    we sell. AutoTraider is always ready to help you with any
                    aspect of buying a car, regardless of its type and previous
                    usage. We would also like to hear from you about possible
                    ways of our services improvement. Contact us and share yours
                    experience!
                  </h5>
                  <img
                    style={{ width: "20em" }}
                    className="mt-5 ml-3 img-fluid"
                    src="https://livedemo00.template-help.com/wt_59051/images/services-11-370x220.jpg"
                    alt=""
                  />
                  <h3
                    className="mt-4 ml-3"
                    style={{ color: "#228B22 ", fontFamily: "Times New Roman" }}
                  >
                    Registering Your Account Programe
                  </h3>
                  <h5
                    className="mt-3 ml-3"
                    style={{
                      fontFamily: "Times New Roman",
                    }}
                  >
                    In order to receive additional services AutoTraider offers
                    to its customers, you must be a registered user and have an
                    account on our website. Every client of our company gets a
                    unique ID and password to login to our website. Having a
                    personal profile guarantees annual technical inspection at
                    AutoTraider authorized inspection centers throughout the
                    country.
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
                experts to make a detailed estimate of your car which includes
              </h5>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ServiceCustomerSupport;
