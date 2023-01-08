import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "mui-image";
import Display from "./Images/Display.jpg";
import Button from "@mui/material/Button";
import FeaturedCars from "./FeaturedCars";
import { useHistory } from "react-router-dom";
import "./TopButton";

import SearchBar from "./SearchBar";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Chat from "./Chat";
import Search from "./Search";
import TopButton from "./TopButton";

const Home = (props) => {
  const [show, setShow] = React.useState(false);
  const history = useHistory();
  return (
    <div style={{ marginTop: "3rem" }}>
      <div>
        <figure className="position-relative">
          <Image
            src={Display}
            className="img-fluid position-relative"
            style={{ height: "54rem" }}
            duration={0}
            shiftDuration={0}
          />
          <Chat />

          <div className="top-right">
            <h1>Grow Your Business with HM Motors</h1>

            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={(e) => {
                props.history.push("/products");
              }}
            >
              Get Started
            </Button>
          </div>
        </figure>
      </div>

      <div className="">
        <br />

        <div
          className="m-auto"
          style={{ backgroundColor: "#F7F9F9", height: "100%"}}
        >
          <h1
            className="container text-decoration-underline"
            style={{
              color: "black",
              fontFamily: "Times New Roman",
              fontWeight: "bold",
            }}
          >
            Search
          </h1>
          <div className=" container d-flex justify-content-center">
            <SearchBar />
          </div>
          <div style={{ display: "flex", justifyContent: "center"}}>
            <h5
              className="text-decoration-underline mb-5"
              style={{
                color: "#228B22",
                cursor: "pointer",
                fontFamily: "Times New Roman",
              }}
              onClick={() => {
                setShow(!show);
              }}
            >
              {show === true ? "Hide Advanced Search" : " Advanced Search"}
            </h5>
          </div>
        </div>

        {show && (
          <div
            className="mt-5"
            style={{
              backgroundColor: "#F7F9F9",
            }}
          >
            <div className="container  ">
              <Search />
            </div>
          </div>
        )}

        <div className="mt-5" style={{ backgroundColor: "#F7F9F9" }}>
          <div className="container">
            <h1
              className=" mt-5 text-decoration-underline"
              style={{
                color: "black",
                fontFamily: "Times New Roman",
                fontWeight: "bold",
              }}
            >
              Featured Cars
            </h1>
            <FeaturedCars />
          </div>
        </div>

        <div className="mt-5" style={{ backgroundColor: "#F7F9F9", width: "100%"}}>
          <div className="container">
            <h1
              className=" mt-5 text-decoration-underline"
              style={{
                color: "black",
                fontFamily: "Times New Roman",
                fontWeight: "bold",
              }}
            >
              {" "}
              Our Services
            </h1>

            <Grid
              style={{ marginTop: "2rem" }}
              className=" mb-5 res-sm"
              container
              spacing={2}
            >
              <Grid item xs={12} md={4}>
                <Card
                  sx={{ maxWidth: 385 }}
                  onClick={() => {
                    history.push("/service");
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      className="img-fluid"
                      component="img"
                      height="250"
                      image="https://livedemo00.template-help.com/wt_59051/images/services/service-01-370x250.jpg"
                      alt="green iguana"
                    />
                    <CardContent
                      style={{ backgroundColor: "#228B22", opacity: "0.9" }}
                      className="d-flex justify-content-center"
                    >
                      <h4
                        style={{
                          color: "white",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        History Check
                      </h4>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card
                  className="mt-5"
                  sx={{ maxWidth: 385 }}
                  onClick={() => {
                    history.push("/service-car-check");
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      className="img-fluid"
                      component="img"
                      height="250"
                      image="https://livedemo00.template-help.com/wt_59051/images/services/service-04-370x250.jpg"
                      alt="green iguana"
                    />
                    <CardContent
                      style={{ backgroundColor: "#228B22", opacity: "0.9" }}
                      className="d-flex justify-content-center"
                    >
                      <h4
                        style={{
                          color: "white",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Car Check Programs
                      </h4>
                    </CardContent>
                  </CardActionArea>
                </Card>
                {/* 
                <Card
                  className="mt-5"
                  sx={{ maxWidth: 385 }}
                  onClick={() => {
                    history.push("/service-car-check");
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      className="img-fluid"
                      component="img"
                      height="250"
                      image="https://livedemo00.template-help.com/wt_59051/images/services/service-04-370x250.jpg"
                      alt="green iguana"
                    />
                    <CardContent
                      style={{ backgroundColor: "#228B22", opacity: "0.9" }}
                      className="d-flex justify-content-center"
                    >
                      <h4
                        style={{
                          color: "white",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Car Check
                      </h4>
                    </CardContent>
                  </CardActionArea>
                </Card> */}
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{ maxWidth: 385 }}
                  onClick={() => {
                    history.push("/service-buyer-guide");
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      className="img-fluid"
                      component="img"
                      height="250"
                      image="https://livedemo00.template-help.com/wt_59051/images/services/service-02-370x250.jpg"
                      alt="green iguana"
                    />
                    <CardContent
                      style={{ backgroundColor: "#228B22", opacity: "0.9" }}
                      className="d-flex justify-content-center"
                    >
                      <h4
                        style={{
                          color: "white",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Buyer's Guide
                      </h4>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card
                  className="mt-5"
                  sx={{ maxWidth: 385 }}
                  onClick={() => {
                    history.push("/service-warrenty-programe");
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      className="img-fluid"
                      component="img"
                      height="250"
                      image="https://livedemo00.template-help.com/wt_59051/images/services/service-05-370x250.jpg"
                      alt="green iguana"
                    />
                    <CardContent
                      style={{ backgroundColor: "#228B22", opacity: "0.9" }}
                      className="d-flex justify-content-center"
                    >
                      <h4
                        style={{
                          color: "white",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Warrenty Programs
                      </h4>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card
                  sx={{ maxWidth: 385 }}
                  onClick={() => {
                    history.push("/service-car-insurance");
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      className="img-fluid"
                      component="img"
                      height="250"
                      image="https://livedemo00.template-help.com/wt_59051/images/services/service-03-370x250.jpg"
                      alt="green iguana"
                    />
                    <CardContent
                      style={{ backgroundColor: "#228B22", opacity: "0.9" }}
                      className="d-flex justify-content-center"
                    >
                      <h4
                        style={{
                          color: "white",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Car Insurance
                      </h4>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card
                  className="mt-5"
                  sx={{ maxWidth: 385 }}
                  onClick={() => {
                    history.push("/service-customer-support");
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      className="img-fluid"
                      component="img"
                      height="250"
                      image="https://livedemo00.template-help.com/wt_59051/images/services/service-06-370x250.jpg"
                      alt="green iguana"
                    />
                    <CardContent
                      style={{ backgroundColor: "#228B22", opacity: "0.9" }}
                      className="d-flex justify-content-center"
                    >
                      <h4
                        style={{
                          color: "white",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Customer Support
                      </h4>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="mt-5" style={{ backgroundColor: "#F7F9F9" }}>
          <div className="container">
            <h1
              className=" mt-5 text-decoration-underline"
              style={{
                color: "black",
                fontFamily: "Times New Roman",
                fontWeight: "bold",
              }}
            >
              Professional Team
            </h1>
            <Grid className="small-margin" style={{ marginTop: "2rem" }} container spacing={2}>
              <Grid item xs={12} md={3} className="">
                <Card
                  sx={{ maxWidth: 320 }}
                  onClick={(e) => {
                    history.push("/owner-profile");
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      className="img-fluid"
                      component="img"
                      height="270"
                      image="https://livedemo00.template-help.com/wt_59051/images/users/user-alan-smith-270x270.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        style={{
                          color: "#228B22",
                          fontFamily: "Times New Roman",
                        }}
                        variant="h5"
                        component="div"
                      >
                        Alan Smith
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="h6"
                        style={{
                          color: "#D0D3D4 ",
                          fontFamily: "Times New Roman",
                        }}
                        component="div"
                      >
                        Owner/ Partner
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        style={{
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Alan’s rich experience includes car sales, rental car
                        management, and service.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={3} className="">
                <Card
                  sx={{ maxWidth: 320 }}
                  onClick={(e) => {
                    history.push("/sales-manager-profile");
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      className="img-fluid"
                      height="270"
                      image="https://livedemo00.template-help.com/wt_59051/images/users/user-laura-stegner-270x270.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        style={{
                          color: "#228B22",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Laura Stegner
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="h6"
                        style={{
                          color: "#D0D3D4 ",
                          fontFamily: "Times New Roman",
                        }}
                        component="div"
                      >
                        Sales Manager
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        style={{
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Alan’s rich experience includes car sales, rental car
                        management, and service.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={12} md={3} className="">
                <Card
                  sx={{ maxWidth: 320 }}
                  onClick={(e) => {
                    history.push("/technician-profile");
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      className="img-fluid"
                      height="270"
                      image="https://livedemo00.template-help.com/wt_59051/images/users/user-john-franklin-270x270.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        style={{
                          color: "#228B22",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        John Franklin
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="h6"
                        style={{
                          color: "#D0D3D4 ",
                          fontFamily: "Times New Roman",
                        }}
                        component="div"
                      >
                        Certified Technician
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        style={{
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Alan’s rich experience includes car sales, rental car
                        management, and service.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={3} className="">
                <Card
                  sx={{ maxWidth: 320 }}
                  onClick={(e) => {
                    history.push("/advisor-profile");
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      className="img-fluid"
                      height="270"
                      image="https://livedemo00.template-help.com/wt_59051/images/users/user-martha-healy-270x270.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        style={{
                          color: "#228B22",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Martha Healy
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="h6"
                        style={{
                          color: "#D0D3D4 ",
                          fontFamily: "Times New Roman",
                        }}
                        component="div"
                      >
                        Service Advisor
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        style={{
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Alan’s rich experience includes car sales, rental car
                        management, and service.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <TopButton />
    </div>
  );
};

export default Home;
