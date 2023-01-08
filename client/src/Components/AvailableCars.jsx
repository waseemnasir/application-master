import React from "react";
import { useState, useEffect } from "react";
import SingleCar from "./SingleCar";
import axios from "axios";
import { CircularProgress, Stack } from "@mui/material";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
const AvailableCars = (props) => {
  const [cars, setCars] = useState([]);

  const showPerPage = 4;
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const getData = () => {
    if (
      props.location.state &&
      props.location.state.state &&
      props.location.state.state.cars
    ) {
      setCars(
        props.location.state.state.cars.cars.length !== 0
          ? props.location.state.state.cars.cars
          : "No Record"
      );

      return;
    }
    axios
      .get("/api/cars", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCars(res.data.cars !== 0 ? res.data.cars : "No Record");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getData, []);
  
  return (
    <div style={{ marginTop: "10rem" }}>
      <div className=" container d-flex justify-content-center">
        <SearchBar />
      </div>

      <Stack
        className=" "
        sx={{
          color: "grey.500",
          position: "absolute",
          left: " 50%",
          top: "40%",
          transform: "translate(-50%, -50%)",
          padding: "10px",
        }}
        spacing={2}
        direction="row"
      >
        {(typeof cars === "object") & (cars.length < 1) ? (
          <CircularProgress color="success" />
        ) : (
          typeof cars === "string" && <h1>No Record</h1>
        )}
      </Stack>
      {
        <div>
          {Array.isArray(cars) &&
            cars
              .slice(pagination.start, pagination.end)
              .map((product, index) => (
                <SingleCar key={index} product={product} onDelete={getData} />
              ))}
          {Array.isArray(cars) && (
            <Pagination
              showPerPage={showPerPage}
              onPaginationChange={onPaginationChange}
              total={cars.length}
            />
          )}
        </div>
      }
    </div>
  );
};

export default AvailableCars;
