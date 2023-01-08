import React from "react";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { width } from "@mui/system";

const FeaturedCars = (props) => {
  const [car, setCar] = useState([]);
  const getData = () => {
    axios
      .get("/api/cars", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        let data = res.data;
        setCar(data.cars);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  function getSource(item) {
    let images = item.images;
    if (item.images.length > 1)
      return window.location.origin + "/uploads/" + images[0];
    else return window.location.origin + "/uploads/" + images[0];
  }

  return (
    <div className="clearfix mb-5 ml-4 ml-md-0" style={{ marginTop: "2rem", width: '100%'}}>
      <div className="row ml-4 ml-lg-0" style={{ width: "100%"}}>
        {Array.isArray(car) ? (
          car.map((item, index) =>
            index <= 5 ? (
              <div className="col-sm-12 col-md-6 col-lg-4 animated fadIn" key={index}>
                <div className="card mt-3">
                  <div className="card-body">
                    <div className="avatar">
                      <img
                        style={{ cursor: "pointer", position: 'relative', height: "18rem",}}
                        src={getSource(item)}
                        alt=""
                        className="card-img-top"
                        onClick={(e) => {
                          e.preventDefault();
                          props.history.push(
                            "products/car-details/" + item._id
                          );
                        }}
                      />
                    </div>
                    <strong>
                      <h4
                        className=" mt-2 card-title"
                        style={{
                          fontFamily: "Times New Roman",
                          color: "#228B22",
                        }}
                      >
                        {item.manufacturer} {item.model}
                      </h4>
                    </strong>
                    {item.salePrice ? (
                      <p>
                        <strong style={{ color: "#880808" }}>
                          {item.salePrice ? "Sold @ " + item.salePrice : ""}
                        </strong>
                      </p>
                    ) : (
                      <h5
                        className="mt-2 car-price"
                        style={{
                          fontFamily: "Times New Roman",
                          color: "#228B22",
                        }}
                      >
                        {item.price}
                      </h5>
                    )}

                    <p
                      className="mt-2 card-text"
                      style={{ fontFamily: "Times New Roman" }}
                    >
                      {item.description.substr(0, 15) + "..."}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )
        ) : (
          <h1
            className=" mt-5 container d-flex justify-content-center"
            style={{
              color: "black",
              fontFamily: "Times New Roman",
              fontWeight: "bold",
            }}
          >
            No Data Available
          </h1>
        )}
      </div>
    </div>
  );
};

export default withRouter(FeaturedCars);
