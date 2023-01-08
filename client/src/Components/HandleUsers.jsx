import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import SingleUser from "./SingleUser";
const HandleUsers = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const showPerPage = 5;
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const getData = () => {
    axios
      .get("/api/getClients", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ marginTop: "6rem" }}>
      <h1 className="mt-5 center" style={{ color: "#228B22" }}>
        All Records of Registered Users
      </h1>
      <div className="mt-5 container">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                fullWidth
                label=" Search by email"
                type="email"
              />
            </Box>
          </Grid>
        </Grid>
        <Button
          className="mt-4 mb-5"
          variant="contained"
          color="success"
          size="large"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            axios({
              method: "post",
              headers: {
                "x-access-token": localStorage.getItem("token"),
              },
              url: "/api/searchClients",
              data: {
                email,
              },
            })
              .then((res) => setUsers(res.data.users))
              .catch((err) => console.log(err));
          }}
        >
          Search
        </Button>
      </div>

      {users.length === 0 ? (
        <Stack
          className="d-flex justify-content-center mb-5"
          sx={{ color: "grey.500" }}
          spacing={2}
          direction="row"
        >
          <CircularProgress color="success" />
        </Stack>
      ) : (
        <div>
          {users.slice(pagination.start, pagination.end).map((user, index) => (
            <SingleUser key={index} user={user} onDelete={getData} />
          ))}
        </div>
      )}
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={users.length}
      />
    </div>
  );
};

export default HandleUsers;
