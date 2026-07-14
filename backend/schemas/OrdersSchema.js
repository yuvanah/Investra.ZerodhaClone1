const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  qty: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  mode: {
    type: String,
    required: true,
    enum: ["BUY", "SELL"],
  },
});

module.exports = OrdersSchema;