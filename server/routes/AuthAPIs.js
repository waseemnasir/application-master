const app = require("express").Router();
const jwt = require("jsonwebtoken");
const Car = require("../models/CarModel");
const Users = require("../models/UsersModel");
const Chats = require("../models/ChatModel");
const multer = require("multer");
const { secret } = require("../utils/utils");
const IMAGE_FOLDER = "../client/public/uploads/";
const fs = require("fs");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "--" + file.originalname);
  },
});
const upload = multer({
  storage: fileStorageEngine,
});
const deleteImage = (image) => {
  try {
    if (fs.existsSync(IMAGE_FOLDER + image)) {
      //file exists
      fs.unlink(IMAGE_FOLDER + image, function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log("File deleted!");
      });
    } else {
      console.log("File Don't exist");
      return;
    }
  } catch (err) {
    console.log(err);
    return;
  }
  return;
};

// Users APIs

app.get("/getRole", (req, res) => {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        console.log(err);
        return res.json({
          status: "Error",
          error: "Invalid Token",
        });
      }
      email = decoded.email;
      let user = await Users.findOne({
        email: email,
      });
      if (user)
        return res.json({
          status: "OK",
          role: user.role,
        });
      else
        return res.json({
          statusCode: 404,
          status: "Error",
          message: "User Not Found",
        });
    });
  } else {
    return res.json({
      status: "Error",
      error: "No Token Found",
    });
  }
});
app.delete("/profile/:id", async (req, res) => {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        return res.json({
          status: "Error",
          error: "Invalid Token",
        });
      }
      requesting_user = await Users.find({
        email: decoded.email,
      }).exec();
      let user = await Users.findById(req.params.id);
      if (
        decoded.email === user.email ||
        requesting_user[0].role.toLowerCase() === "admin"
      ) {
        console.log("Deleting user with id: " + req.params.id);
        try {
          if (fs.existsSync(IMAGE_FOLDER + user.portrait)) {
            //file exists
            fs.unlink(IMAGE_FOLDER + user.portrait, function (err) {
              if (err) throw err;
              // if no error, file has been deleted successfully
              console.log(`Profile picture of user${user.fName}! Deleted`);
            });
          }
          await Chats.findOneAndDelete({ client_id: req.params.id });
        } catch (err) {
          console.log("can't find portrait from user :" + user._id);
          console.log(err);
        }
        await Users.findByIdAndDelete(req.params.id);
        return res.json({
          status: "Ok",
        });
      } else {
        return res.json({
          status: "Error",
          message: "Could not Delete User",
        });
      }
    });
  } else {
    return res.json({
      status: "Error",
      error: "No Token Found",
    });
  }
});
app.put("/profile/:id", upload.array("portrait"), async function (req, res) {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    try {
      const decoded = jwt.verify(token, secret);
      requesting_user = await Users.find({
        email: decoded.email,
      }).exec();
      let user = await Users.findById(req.params.id);
      if (
        decoded.email === user.email ||
        requesting_user[0].role.toLowerCase() === "admin"
      ) {
        let user = await Users.findById(req.params.id);
        user.fName = req.body.fName;
        user.lName = req.body.lName;
        user.email = req.body.email;
        user.cNumber = req.body.cNumber;
        if (req.files[0]) {
          deleteImage(user.portrait);
          user.portrait = req.files[0].filename;
        }
        await user.save();
        console.log("Updated User with Id: " + req.params.id);
        return res.status(200).send({
          user: user,
        });
      } else {
        return res.send({
          status: "Error",
          message: "Could not Update user",
        });
      }
    } catch (error) {
      console.log(error);
      return res.json({
        status: "Error",
        error: "Invalid Token",
      });
    }
  } else {
    return res.json({
      status: "Error",
      error: "No Token Found",
    });
  }
});
app.get("/getProfile", async function (req, res) {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    try {
      const decoded = jwt.verify(token, secret);
      email = decoded.email;
      let user = await Users.findOne(
        {
          email: email,
        },
        "fName lName email cNumber portrait"
      );
      return res.json({
        status: "OK",
        profile: user,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        status: "Error",
        error: "Invalid Token",
      });
    }
  } else {
    return res.json({
      status: "Error",
      error: "No Token Found",
    });
  }
});

// Admin API's

app.post("/searchClients", async function (req, res) {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    try {
      const decoded = jwt.verify(token, secret);
      email = decoded.email;
      let user = await Users.findOne({
        email: email,
      });
      if (user.role.toLowerCase() === "admin") {
        users = await Users.find(
          {
            $and: [
              { role: "client" },
              {
                email: {
                  $regex: req.body.email ?? "",
                  $options: "i",
                },
              },
            ],
          },
          "fName lName email cNumber portrait"
        ).sort([["createdAt", -1]]);
        return res.json({
          users,
        });
      }
    } catch (error) {
      console.log(error);
      return res.json({
        status: "Error",
        error: "Invalid Token",
      });
    }
  } else {
    return res.json({
      status: "Error",
      error: "No Token Found",
    });
  }
});
app.get("/getClients", async function (req, res) {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    try {
      const decoded = jwt.verify(token, secret);
      email = decoded.email;
      let user = await Users.findOne({
        email: email,
      });
      if (user.role.toLowerCase() === "admin") {
        const page = parseInt(req.query.page || "0");
        const PAGE_SIZE = 10;
        users = await Users.find(
          {
            role: "client",
          },
          "fName lName email cNumber portrait"
        )
          .limit(PAGE_SIZE)
          .skip(PAGE_SIZE * page);
        return res.json({
          status: "OK",
          data: users,
        });
      }
    } catch (error) {
      console.log(error);
      return res.json({
        status: "Error",
        error: "Invalid Token",
      });
    }
  } else {
    return res.json({
      status: "Error",
      error: "No Token Found",
    });
  }
});
app.get("/getClient/:id", async function (req, res) {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    try {
      const decoded = jwt.verify(token, secret);
      email = decoded.email;
      let user = await Users.findOne({
        email: email,
      });
      if (user.role.toLowerCase() === "admin") {
        client = await Users.findById(
          req.params.id,
          "fName lName email cNumber"
        );
        return res.json({
          status: "OK",
          data: client,
        });
      }
    } catch (error) {
      console.log(error);
      return res.json({
        status: "Error",
        error: "Invalid Token",
      });
    }
  } else {
    return res.json({
      status: "Error",
      error: "No Token Found",
    });
  }
});
app.post("/cars", upload.array("images"), async (req, res) => {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    try {
      const decoded = jwt.verify(token, secret);
      email = decoded.email;
      let user = await Users.findOne({
        email: email,
      });
      if (user.role.toLowerCase() === "admin") {
        try {
          var car = new Car();
          car.model = req.body.model;
          car.price = req.body.price;
          car.modelYear = req.body.modelYear;
          car.registeredYear = req.body.registeredYear;
          car.color = req.body.color;
          car.description = req.body.description;
          car.version = req.body.version;
          car.city = req.body.city;
          car.mileage = req.body.mileage;
          car.images = req.files.map((file) => {
            return file.filename;
          });
          car.engine = req.body.engine;
          car.assembly = req.body.assembly;
          car.engineType = req.body.engineType;
          car.transmission = req.body.transmission;
          car.manufacturer = req.body.manufacturer;
          await car.save();
          return res.send(car);
        } catch (error) {
          console.log(error);
          return res.json({
            status: "Error",
            message: "Conflict in data type",
          });
        }
      }
    } catch (error) {
      return res.json({
        status: "Error",
        message: "Invalid Token",
      });
    }
  } else {
    return res.json({
      status: "Error",
      message: "No Token Found",
    });
  }
});
app.put("/cars/:id", upload.array("newImages"), async (req, res) => {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    try {
      const decoded = jwt.verify(token, secret);
      email = decoded.email;
      let user = await Users.findOne({
        email: email,
      });
      if (user.role.toLowerCase() === "admin") {
        try {
          var car = await Car.findById(req.params.id);
          car.model = req.body.model;
          car.price = req.body.price;
          car.model = req.body.model;
          car.color = req.body.color;
          car.description = req.body.description;
          car.make = req.body.make;
          car.version = req.body.version;
          car.city = req.body.city;
          car.mileage = req.body.mileage;
          car.engine = req.body.engine;
          car.engineType = req.body.engineType;
          car.assembly = req.body.assembly;
          car.transmission = req.body.transmission;
          if (req.body?.salePrice) {
            car.salePrice = req.body.salePrice;
            car.status = false;
          } else {
            car.status = true;
          }
          if (req.files) {
            newImages = req.files.map((file) => {
              return file.filename;
            });
          }
          if (newImages) {
            car.images = JSON.parse(req.body.oldImages).concat(newImages);
          } else {
            car.images = JSON.parse(req.body.oldImages);
          }
          JSON.parse(req.body.deleteImages).forEach((image) => {
            if (fs.existsSync(IMAGE_FOLDER + image)) {
              //file exists
              fs.unlink(IMAGE_FOLDER + image, function (err) {
                if (err) throw err;
                // if no error, file has been deleted successfully
                console.log("File deleted!");
              });
            } else {
              console.log("File Don't exist");
            }
          });
          await car.save();
          console.log("updated successfully");
          return res.json({
            status: "OK",
            data: car,
          });
        } catch (error) {
          console.log(error);
          return res.json({
            status: "error",
            message: "Could not update record",
          });
        }
      }
    } catch (error) {
      return res.json({
        status: "error",
        message: "Invalid Token",
      });
    }
  } else {
    return res.json({
      status: "Error",
      error: "No Token Found",
    });
  }
});
app.delete("/cars/:id", async (req, res) => {
  if (req.header("x-access-token")) {
    const token = req.header("x-access-token");
    try {
      const decoded = jwt.verify(token, secret);
      email = decoded.email;
      let user = await Users.findOne({
        email: email,
      });
      if (!(user.role === "admin")) {
        return res.status(401).send({ message: "Unauthorized Request" });
      }
      var car = await Car.findById(req.params.id);
      car.images.forEach((image) => {
        deleteImage(image);
      });
      car = await Car.findByIdAndDelete(req.params.id);
      console.log("Record deleted For id:" + req.params.id);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.json({
        status: "error",
        message: "Invalid Token",
      });
    }
  } else {
    return res.json({
      status: "error",
      message: "No Token Found",
    });
  }
});

module.exports = app;
