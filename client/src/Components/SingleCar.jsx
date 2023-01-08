import axios from "axios";
import React from "react";
import { Grid, AlertTitle, Snackbar, Slide } from "@mui/material";

import { withRouter } from "react-router";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";

const SingleCar = (props) => {
  const role = localStorage.getItem("userRole");
  const { product, history, onDelete } = props;

  const [open, setOpen] = React.useState(false);

  const [success, setSuccess] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAgree = (e) => {
    e.preventDefault();
    axios
      .delete("/api/cars/" + product._id, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        onDelete();
        setSuccess(true);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  function getSource() {
    let images = product.images;
    if (product.images.length > 1)
      return window.location.origin + "/uploads/" + images[0];
    else return window.location.origin + "/uploads/" + images[0];
  }

  return (
    <div className="container-fluid mb-5">
      <div
        className="border border-1 container mt-5"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <Grid container spacing={2}>
          <Grid
            style={{ cursor: "pointer" }}
            item
            xs={3}
            onClick={(e) => {
              e.preventDefault();
              props.history.push("products/car-details/" + product._id);
            }}
          >
            <img
              className="img-fluid"
              style={{ height: "15em ", width: "20em" }}
              src={getSource()}
              alt="...."
            />
          </Grid>
          <Grid item xs={8}>
            {role === "admin" && (
              <div className="d-flex justify-content-end">
                <i
                  className="bi bi-pencil-square fa-2x"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    history.push("/products/update-car/" + product._id);
                  }}
                ></i>
                <i
                  className="fas fa-times-circle fa-2x pt-2"
                  style={{
                    marginLeft: "0.5em",
                    cursor: "pointer",
                    color: "black",
                  }}
                  onClick={handleClickOpen}
                ></i>
              </div>
            )}

            <div className="">
              {product.salePrice && (
                <h3>
                  <strong style={{ color: "#880808" }}>
                    {product.salePrice ? "Sold @ " + product.salePrice : ""}
                  </strong>
                </h3>
              )}
              <h4 className="pt-2">{product.city}</h4>
              <h5 className="pt-2" style={{ color: "#999999" }}>
                {" "}
                {product.model} | {product.color} | {product.version} |{" "}
                {`${product.engine}cc`} | {product.engine_type}
              </h5>

              <h5 className="pt-2" style={{ color: "#999999" }}>
                {" "}
                {`${product.price} PKR`} | {`${product.mileage} KM`} |{" "}
                {product.transmission}{" "}
              </h5>
            </div>
          </Grid>
        </Grid>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={success}
        onClose={(event, reason) => {
          setSuccess(false);
        }}
        TransitionComponent={Slide}
      >
        <Alert severity="success" sx={{ width: "50em" }}>
          <AlertTitle>Success</AlertTitle>
          Your Car's Record has been deleted successfully!!
        </Alert>
      </Snackbar>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Confirmation Message?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are You sure , You want to delete this record!!!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withRouter(SingleCar);
