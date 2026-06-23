const mongoose = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchema.js");

const HoldingsModel = mongoose.model( "holding", HoldingsSchema);

module.exports = HoldingsModel;