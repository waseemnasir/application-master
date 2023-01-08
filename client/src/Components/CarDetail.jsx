import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const CarDetail = (props) => {
  const [detailCar, setDetailCar] = useState({});
  var [carImages, setCarImages] = useState([]);

  const id = props.match.params.id;
  useEffect(() => {
    axios
      .get("/api/cars/" + id, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setDetailCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  useEffect(() => {
    if (detailCar.images) {
      let images = [];
      for (var i = 0; i < detailCar.images.length; i++) {
        images.push(detailCar.images[i]);
      }
      setCarImages(images);
    }
  }, [detailCar]);
  return (
    <div style={{ backgroundColor: "#F5F5F5", marginTop: "6rem" }}>
      <div className="container ">
        <Grid className="mt-5" container spacing={2}>
          <Grid
            className="mb-5"
            style={{ backgroundColor: "white" }}
            item
            xs={7}
          >
            <h2
              className="pt-3"
              style={{
                color: "#228B22",
                fontFamily: "Times New Roman",
                fontWeight: "bold",
              }}
            >
              {" "}
              {detailCar.manufacturer} {detailCar.model}
            </h2>
            <h4 style={{ color: "#228B22" }}>{detailCar.city}</h4>

            <div
              id="carouselExampleIndicators"
              className="carousel slide pt-5 pr-3"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                ></button>
                {carImages.slice(1).map((image, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={index + 1}
                    ></button>
                  );
                })}
              </div>
              <div className="carousel-inner">
                {carImages.map((image, key) => {
                  if (key === 0)
                    return (
                      <div key={key} className="carousel-item active">
                        <img
                          src={`/uploads/${image}`}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    );
                  else
                    return (
                      <div key={key} className="carousel-item ">
                        <img
                          src={`/uploads/${image}`}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    );
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <FaArrowLeft />
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <FaArrowRight />
              </button>
            </div>
            <h3
              className="pt-4"
              style={{
                color: "#228B22",
                fontFamily: "Times New Roman",
                fontWeight: "bold",
              }}
            >
              Car's Specifications
            </h3>
            <Grid className="pt-4" container spacing={2}>
              <Grid item xs={6}>
                <h5
                  style={{
                    fontFamily: "Times New Roman ",
                    fontWeight: "bold",
                  }}
                >
                  Model Year : {detailCar.modelYear}
                </h5>
                <hr />
                <h5
                  style={{
                    fontFamily: "Times New Roman ",
                    fontWeight: "bold",
                  }}
                >
                  Registered Year : {detailCar.registeredYear}
                </h5>
                <hr />
                <h5
                  style={{
                    fontFamily: "Times New Roman ",
                    fontWeight: "bold",
                  }}
                >
                  Version of Car : {detailCar.version}
                </h5>
                <hr />

                <h5
                  style={{
                    fontFamily: "Times New Roman ",
                    fontWeight: "bold",
                  }}
                >
                  Color of Car : {detailCar.color}
                </h5>
                <hr />

                <h5
                  style={{
                    fontFamily: "Times New Roman ",
                    fontWeight: "bold",
                  }}
                >
                  Engine Type : {detailCar.engineType}
                </h5>
              </Grid>
              <Grid item xs={6}>
                <h5
                  style={{
                    fontFamily: "Times New Roman ",
                    fontWeight: "bold",
                  }}
                >
                  Registerd Location : {detailCar.city}
                </h5>
                <hr />
                <h5
                  style={{
                    fontFamily: "Times New Roman ",
                    fontWeight: "bold",
                  }}
                >
                  Engine Capacity : {`${detailCar.engine}cc`}
                </h5>
                <hr />
                <h5
                  style={{
                    fontFamily: "Times New Roman ",
                    fontWeight: "bold",
                  }}
                >
                  Car's Mileage : {`${detailCar.mileage} KM`}
                </h5>
                <hr />
                <h5
                  style={{
                    fontFamily: "Times New Roman ",
                    fontWeight: "bold",
                  }}
                >
                  Car's Transmission : {detailCar.transmission}
                </h5>
                <hr />

                <h5
                  style={{
                    fontFamily: "Times New Roman ",
                    fontWeight: "bold",
                  }}
                >
                  Assembly of Car : {detailCar.assembly}
                </h5>
              </Grid>
            </Grid>
            <hr />

            <h4
              style={{
                color: "#228B22",
                fontFamily: "Times New Roman ",
                fontWeight: "bold",
              }}
              className=" pt-4 "
            >
              Description of Car
            </h4>

            <p className="container mb-5">{detailCar.description}</p>
          </Grid>
          <Grid
            className="ml-3 container"
            style={{ backgroundColor: "white", height: "35em" }}
            item
            xs={4}
          >
            <div className="">
              <h2
                style={{
                  color: "#228B22",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                Car's Price
              </h2>
              <h4 style={{ color: "#228B22", fontFamily: "Times New Roman" }}>
                {detailCar.price}
              </h4>
              {detailCar.salePrice ? (
                <p>
                  <strong style={{ color: "#880808" }}>
                    {detailCar.salePrice ? "Sold @ " + detailCar.salePrice : ""}
                  </strong>
                </p>
              ) : (
                ""
              )}
            </div>
            <hr className="mr-3" style={{ color: "#32CD32" }} />
            <div className="container center  ">
              {" "}
              <h4 style={{ fontFamily: "Times New Roman", color: "black" }}>
                0306-1212123
              </h4>
            </div>

            <hr className="mr-3" style={{ color: "#32CD32" }} />

            <h3
              className=""
              style={{
                color: "#228B22",
                fontFamily: "Times New Roman",
                fontWeight: "bold",
              }}
            >
              {" "}
              Seller's Information
            </h3>

            <hr className="mr-3" style={{ color: "#32CD32" }} />

            <h4 style={{ color: "black", fontFamily: "Times New Roman" }}>
              43-Main Boulevard-Samnabad Town, Lahore.{" "}
            </h4>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CarDetail;
