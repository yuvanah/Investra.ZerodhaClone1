const mongoose = require("mongoose");
const PositionsSchema = require("../schemas/PositionsSchema.js");

const PositionsModel = mongoose.model("position", PositionsSchema);

module.exports = PositionsModel;