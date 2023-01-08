import { Grid } from "@mui/material";
import React from "react";
const InsuranceDetail = (props) => {
  const price = props.location.state.price;
  return (
    <div
      className="container-fluid"
      style={{ marginTop: "6rem", backgroundColor: "#F7F9F9" }}
    >
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10} className="pt-5 ml-3 pb-3">
            <div
              className="border d-flex justify-content-center"
              style={{ backgroundColor: "white", height: "3.7em" }}
            >
              <h2
                className="pl-4 pt-2"
                style={{
                  color: "#228B22 ",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                Insurance Packages
              </h2>
            </div>

            <div
              style={{ backgroundColor: "white" }}
              className="mt-5 border-bottom border-top"
            >
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img
                    className="pl-3 pb-3 img-fluid"
                    src="https://www.pakistaninspection.com.pk/images/Clients/26.png"
                    alt=""
                    style={{ height: "15em ", width: "27em" }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <div className="pt-2 pb-2">
                    <h3
                      style={{
                        color: "#228B22",
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      UBL Insurers Limited
                    </h3>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Car's Name : {props.location.state.name}{" "}
                    </p>

                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Car's Price : {props.location.state.price}{" "}
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Rate : 1.65%
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Final Amount(Without tracker) : {(1.65 / 100) * price}
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Final Amount(With tracker) :{" "}
                      {(1.65 / 100) * price + 11000}{" "}
                      <p
                        style={{
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        }}
                        className="text-black-50"
                      >
                        (11000Rs extra charges for tracker services)
                      </p>
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div
              style={{ backgroundColor: "white" }}
              className="mt-5 border-bottom border-top"
            >
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img
                    className="pl-3  img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEVEkNsPZQv4BBhhW4TPg6ZpXzD1fp6XVZg&usqp=CAU"
                    alt=""
                    style={{ height: "15em ", width: "27em" }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <div className="pt-2 pb-2">
                    <h3
                      style={{
                        color: "#228B22 ",
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Jubilee Insurance
                    </h3>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Car's Name : {props.location.state.name}{" "}
                    </p>

                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Car's Price : {props.location.state.price}{" "}
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Rate : 1.75%
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Final Amount(Without tracker) : {(1.75 / 100) * price}
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Final Amount(With tracker) :{" "}
                      {(1.75 / 100) * price + 11000}
                      <p
                        style={{
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        }}
                        className="text-black-50"
                      >
                        (11000Rs extra charges for tracker services)
                      </p>
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div
              style={{ backgroundColor: "white" }}
              className="mt-5 border-bottom border-top"
            >
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img
                    className="pl-3 pb-3 img-fluid"
                    src="data:image/png;base64,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"
                    alt=""
                    style={{ height: "15em ", width: "27em" }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <div className="pt-2 pb-2">
                    <h3
                      style={{
                        color: "#228B22 ",
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Asia Insurance
                    </h3>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Car's Name : {props.location.state.name}{" "}
                    </p>

                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Car's Price : {props.location.state.price}{" "}
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Rate : 2.4%
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Final Amount(Without tracker) : {(2.4 / 100) * price}
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Final Amount(With tracker) : {(2.4 / 100) * price + 11000}{" "}
                      <p
                        style={{
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        }}
                        className="text-black-50"
                      >
                        (11000Rs extra charges for tracker services)
                      </p>
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div
              style={{ backgroundColor: "white" }}
              className="mt-5 border-bottom border-top"
            >
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img
                    className="pl-3 pb-3 img-fluid"
                    src="https://cdn.bolnews.com/wp-content/uploads/2021/07/paak.jpg"
                    alt=""
                    style={{ height: "15em ", width: "27em" }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <div className="pt-2 pb-2">
                    <h3
                      style={{
                        color: "#228B22 ",
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Pak Qatar General Takaful
                    </h3>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Car's Name : {props.location.state.name}{" "}
                    </p>

                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Car's Price : {props.location.state.price}{" "}
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Rate : 2%
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Final Amount(Without tracker) : {(2 / 100) * price}
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Final Amount(With tracker) : {(2 / 100) * price + 11000}{" "}
                      <p
                        style={{
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        }}
                        className="text-black-50"
                      >
                        (11000Rs extra charges for tracker services)
                      </p>
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div
              style={{ backgroundColor: "white" }}
              className="mt-5 border-bottom border-top"
            >
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img
                    className="pl-3 pb-3 img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbGWfHs4Lm0IGPaLahYwO5sEPxeH7K93MoUeF3PnXqW7ZxFKvnpBy1aY_XHOuzC-4nHc&usqp=CAU"
                    alt=""
                    style={{ height: "15em ", width: "27em" }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <div className="pt-2 pb-2">
                    <h3
                      style={{
                        color: "#228B22",
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Salam Takaful
                    </h3>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Car's Name : {props.location.state.name}{" "}
                    </p>

                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Car's Price : {props.location.state.price}{" "}
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Rate : 2.25%
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Final Amount(Without tracker) : {(2.25 / 100) * price}
                    </p>
                    <p
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      }}
                    >
                      Final Amount(With tracker) :{" "}
                      {(2.25 / 100) * price + 11000}{" "}
                      <p
                        style={{
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        }}
                        className="text-black-50"
                      >
                        (11000Rs extra charges for tracker services)
                      </p>
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InsuranceDetail;
