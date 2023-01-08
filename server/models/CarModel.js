const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    model: {
      type: String,
      require,
    },
    price: {
      type: String,
      require,
    },
    modelYear: {
      type: String,
      require,
    },
    registeredYear: {
      type: String,
      require,
    },
    color: {
      type: String,
      require,
    },
    description: String,

    version: {
      type: String,
      require,
    },
    city: String,
    mileage: String,
    images: Array,
    engine: String,
    transmission: String,
    status: { type: Boolean, default: true },
    salePrice: Number,
    engineType: { type: String, default: "Petrol" },
    assembly: { type: String, default: "Local" },
    manufacturer: String,
  },
  { timestamps: true }
);

const car = mongoose.model("car", carSchema);
module.exports = car;
