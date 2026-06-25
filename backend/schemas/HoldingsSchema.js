const mongoose = require("mongoose");
const { Schema } = mongoose;

const HoldingsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  qty: {
    type: Number,
    required: true,
    default: 0,
  },

  avg: {
    type: Number,
    default: 0,
  },

  price: {
    type: Number,
    default: 0,
  },

  net: {
    type: String,
    default: "0%",
  },

  day: {
    type: String,
    default: "0%",
  },
});

module.exports = HoldingsSchema;