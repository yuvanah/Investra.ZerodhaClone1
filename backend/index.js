require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Holdings = require("./model/HoldingsModel");
const Positions = require("./model/PositionsModel")

const app = express();

const port = process.env.PORT || 8080; // NEED to put port like this, cause it will be used for aws deployment
const url = process.env.MONGO_URL;

main().catch(err => console.log(`${err.message} !! DataBased not connected `));

async function main() {
  await mongoose.connect(url);
  console.log("Database connected");
}




// app.get("/addHoldings", async (req, res) => {
//     let tempHoldings = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
//   try {
//     console.log("Route hit");

//     const result = await Positions.insertMany(tempHoldings);

//     console.log(result);
//     res.send("Inserted");
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err.message);
//   }
// });



app.listen(port,(req,res)=>{
    console.log();

});


