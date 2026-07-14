const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
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
    default: 0,
  },

  avg: {
    type: Number,
    default: 0,
  },

  price: {
    type: Number,
    default: function () {
      return this.avg;
    },
  },

  net: {
    type: String,
    default: () => `${(Math.random() * 20 - 10).toFixed(2)}%`, // -10% to +10%
  },

  day: {
    type: String,
    default: () => `${(Math.random() * 6 - 3).toFixed(2)}%`, // -3% to +3%
  },
});

module.exports = HoldingsSchema;