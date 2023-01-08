const app = require("express").Router();
const Car = require("../models/CarModel");
const jwt = require("jsonwebtoken");
const Users = require("../models/UsersModel");
const { secret } = require("../utils/utils");
const getCarsAdvancedSearch = async (body, status = true) => {
  try {
    if (status) {
      min_price = body.minPrice ? { price: { $gte: body.minPrice } } : {};
      min_engine = body.minEngine ? { engine: { $gte: body.minEngine } } : {};
      max_engine = body.maxEngine ? { engine: { $lte: body.maxEngine } } : {};
      max_price = body.maxPrice ? { price: { $lte: body.maxPrice } } : {};
      min_mileage = body.minMileage
        ? { mileage: { $gte: body.minMileage } }
        : {};
      max_mileage = body.maxMileage
        ? { mileage: { $lte: body.maxMileage } }
        : {};
      max_model_year = body.maxModelYear
        ? { modelYear: { $lte: body.maxModelYear } }
        : {};
      min_model_year = body.minModelYear
        ? { modelYear: { $gte: body.minModelYear } }
        : {};

      const cars = await Car.find({
        $and: [
          {
            manufacturer: {
              $regex: body.manufacturer ?? "",
              $options: "i",
            },
          },
          { model: { $regex: body.model ?? "", $options: "i" } },
          {
            version: {
              $regex: body.version ?? "",
              $options: "i",
            },
          },
          {
            assembly: {
              $regex: body.assembly ?? "",
              $options: "i",
            },
          },
          {
            transmission: {
              $regex: body.transmission ?? "",
              $options: "i",
            },
          },
          { color: { $regex: body.color ?? "", $options: "i" } },
          { city: { $regex: body.city ?? "", $options: "i" } },
          {
            engineType: {
              $regex: body.engineType ?? "",
              $options: "i",
            },
          },
          { $and: [max_price, min_price] },
          { $and: [max_engine, min_engine] },
          { $and: [max_mileage, min_mileage] },
          { $and: [max_model_year, min_model_year] },
          { status: true },
        ],
      }).sort([["createdAt", -1]]);
      return {
        cars,
      };
    } else {
      min_price = body.minPrice ? { price: { $gte: body.minPrice } } : {};
      min_engine = body.minEngine ? { engine: { $gte: body.minEngine } } : {};
      max_engine = body.maxEngine ? { engine: { $lte: body.maxEngine } } : {};
      max_price = body.maxPrice ? { price: { $lte: body.maxPrice } } : {};
      min_mileage = body.minMileage
        ? { mileage: { $gte: body.minMileage } }
        : {};
      max_mileage = body.maxMileage
        ? { mileage: { $lte: body.maxMileage } }
        : {};
      max_model_year = body.maxModelYear
        ? { modelYear: { $lte: body.maxModelYear } }
        : {};
      min_model_year = body.minModelYear
        ? { modelYear: { $gte: body.minModelYear } }
        : {};

      const cars = await Car.find({
        $and: [
          {
            manufacturer: {
              $regex: body.manufacturer ?? "",
              $options: "i",
            },
          },
          { model: { $regex: body.model ?? "", $options: "i" } },
          {
            version: {
              $regex: body.version ?? "",
              $options: "i",
            },
          },
          {
            assembly: {
              $regex: body.assembly ?? "",
              $options: "i",
            },
          },
          {
            transmission: {
              $regex: body.transmission ?? "",
              $options: "i",
            },
          },
          { color: { $regex: body.color ?? "", $options: "i" } },
          { city: { $regex: body.city ?? "", $options: "i" } },
          {
            engineType: {
              $regex: body.engineType ?? "",
              $options: "i",
            },
          },
          { $and: [max_price, min_price] },
          { $and: [max_engine, min_engine] },
          { $and: [max_mileage, min_mileage] },
          { $and: [max_model_year, min_model_year] },
        ],
      }).sort([["createdAt", -1]]);
      return {
        cars,
      };
    }
  } catch (error) {
    console.log(error);
    return "Unprocessable Entity";
  }
};

const getCarsBasicSearch = async (body, status = true) => {
  try {
    if (status) {
      max_model_year = body.maxModelYear
        ? { modelYear: { $lte: body.maxModelYear } }
        : {};
      min_model_year = body.minModelYear
        ? { modelYear: { $gte: body.minModelYear } }
        : {};
      cars = await Car.find({
        $and: [
          { model: { $regex: body.model ?? "", $options: "i" } },
          {
            version: {
              $regex: body.version ?? "",
              $options: "i",
            },
          },
          { $and: [max_model_year, min_model_year] },
          { status: true },
        ],
      }).sort([["createdAt", -1]]);
      return {
        cars,
      };
    } else {
      max_model_year = body.maxModelYear
        ? { modelYear: { $lte: body.maxModelYear } }
        : {};
      min_model_year = body.minModelYear
        ? { modelYear: { $gte: body.minModelYear } }
        : {};
      cars = await Car.find({
        $and: [
          { model: { $regex: body.model ?? "", $options: "i" } },
          {
            version: {
              $regex: body.version ?? "",
              $options: "i",
            },
          },
          { $and: [max_model_year, min_model_year] },
        ],
      }).sort([["createdAt", -1]]);
      return {
        cars,
      };
    }
  } catch (error) {
    console.log(error);
    return "Unprocessable Request";
  }
};
const getCars = async (status = true) => {
  return status
    ? (cars = await Car.find({ status }).sort([["createdAt", -1]]))
    : (cars = await Car.find().sort([["createdAt", -1]]));
};
// Get Specific Car Details
app.get("/cars/:id", async (req, res) => {
  car = await Car.findById(req.params.id);
  return res.send(car);
});

// Cars Search API's

// Basic Search wit 3 fields
app.post("/basic_search", async (req, res) => {
  const token = req.header("x-access-token");
  const body = req.body;

  if (token === "null" || !token) {
    const cars = await getCarsBasicSearch(body);
    return res.json(cars);
  }
  if (token !== "null") {
    const decoded = jwt.verify(token, secret);
    email = decoded?.email;
    let user = await Users.findOne({
      email: email,
    });
    if (user.role === "admin") {
      const cars = await getCarsBasicSearch(body, false);
      return res.json(cars);
    } else {
      const cars = await getCarsBasicSearch(body);
      return res.json(cars);
    }
  }
});
// Advanced Search with all fields
app.post("/advanced_search", async (req, res) => {
  const body = req.body;
  console.log(body);
  const token = req.header("x-access-token");
  if (token === "null" || !token) {
    cars = await getCarsAdvancedSearch(body);
    return res.json(cars);
  }
  if (token !== "null") {
    const decoded = jwt.verify(token, secret);
    email = decoded?.email;
    let user = await Users.findOne({
      email: email,
    });
    if (user.role === "admin") {
      cars = await getCarsAdvancedSearch(body, false);
      return res.json(cars);
    } else {
      const cars = await getCarsAdvancedSearch(body);
      return res.json(cars);
    }
  }
});

// Get all cars according to role
app.get("/cars", async (req, res) => {
  const token = req.header("x-access-token");
  if (token === "null" || !token) {
    cars = await getCars();
    return res.json({
      cars,
    });
  }
  if (token !== "null") {
    try {
      const decoded = jwt.verify(token, secret);
      email = decoded?.email;
      let user = await Users.findOne({
        email: email,
      });
      if (user.role === "admin") {
        cars = await getCars(false);
        return res.json({
          cars,
        });
      } else {
        cars = await getCars();
        return res.json({
          cars,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
});

module.exports = app;
