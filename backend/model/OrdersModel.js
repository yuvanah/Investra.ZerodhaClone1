const mongoose = require("mongoose");
const OrdersSchema = require("../schemas/OrdersSchema.js");

const OrdersModel = mongoose.model(
  "order",
  OrdersSchema
);

module.exports = OrdersModel;