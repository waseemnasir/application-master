import { Grid } from "@mui/material";
import React from "react";
const AdvisorProfile = () => {
  return (
    <div
      className="container"
      style={{ marginTop: "6rem", marginBottom: "5em" }}
    >
      <h2
        className="text-decoration-underline"
        style={{
          fontFamily: "Times New Roman",
          fontWeight: "bolder",
          marginTop: "1em",
        }}
      >
        MARTHA HEALY'S PROFILE
      </h2>
      <Grid className="mt-5 " container spacing={2}>
        <Grid item xs={3}>
          <img
            className="img-fluid"
            style={{ height: "21em", width: "19em" }}
            src="https://livedemo00.template-help.com/wt_59051/images/users/user-martha-healy-270x270.jpg"
            alt="onwerpic"
          />
        </Grid>
        <Grid className="mt-2" item xs={7}>
          <h3 style={{ fontFamily: "Times New Roman", color: "#228B22" }}>
            Martha Healy
          </h3>
          <h4 style={{ fontFamily: "Times New Roman" }}>Advisor</h4>
          <h5 style={{ fontFamily: "Times New Roman", marginTop: "2em" }}>
            Martha started working at his dad’s car dealership at 12 years old &
            was helping his father buy cars at auction by 17.
          </h5>
          <h5 className="pt-2" style={{ fontFamily: "Times New Roman" }}>
            He has worked in every facet of a car dealership - from detail, to
            being head purchaser for top dealers, to General Sales Manager of a
            Nissan store. After graduating from the University in 1983, he chose
            to continue the family business – selling used and new cars.
          </h5>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdvisorProfile;
