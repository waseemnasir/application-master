import React from "react";
import './SearchBar.css'
import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const SearchBar = () => {
  const history = useHistory();
  const [modelName, setModelName] = useState("");

  const [minModelYear, setMinModelYear] = useState();
  const [maxModelYear, setMaxModelYear] = useState();

  const [version, setVersion] = useState("");
  const handleSubmit = () => {
    axios({
      method: "post",
      url: "/api/basic_search",
      data: { model: modelName, maxModelYear, minModelYear, version },
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((res) => {
      const cars = res.data;
      history.push("/products", { state: { cars } });
    });
  };
  return (
    <div className="small-center">
      <Grid container spacing={2} className="sm-responsive">
        <Grid item sx={6} md={3}>
          <Box
            className="mt-2"
            sx={{
              width: 200,
              maxWidth: "100%",
            }}
          >
            <TextField
              value={modelName}
              onChange={(e) => {
                setModelName(e.target.value);
              }}
              fullWidth
              label="Model Name"
              type="text"
            />
          </Box>
        </Grid>
        <Grid item sx={6} md={3}>
          <Box
            className="mt-2"
            sx={{
              width: 200,
              maxWidth: "100%",
            }}
          >
            <TextField
              value={minModelYear || ""}
              onChange={(e) => {
                setMinModelYear(e.target.value);
              }}
              fullWidth
              label="From Model Year"
              type="number"
            />
          </Box>
        </Grid>
        <Grid item sx={6} md={3}>
          <Box
            className="mt-2"
            sx={{
              width: 200,
              maxWidth: "100%",
            }}
          >
            <TextField
              value={maxModelYear || ""}
              onChange={(e) => {
                setMaxModelYear(e.target.value);
              }}
              fullWidth
              label="To Model Year"
              type="number"
            />
          </Box>
        </Grid>
        <Grid item sx={6} md={3}>
          <Box
            className="mt-2"
            sx={{
              width: 200,
              maxWidth: "100%",
            }}
          >
            <TextField
              value={version}
              onChange={(e) => {
                setVersion(e.target.value);
              }}
              fullWidth
              label="Version"
              type="text"
            />
          </Box>
        </Grid>
      </Grid>
      <Button
        className="mt-4 button-sm"
        variant="contained"
        color="success"
        size="large"
        type="submit"
        onClick={handleSubmit}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
