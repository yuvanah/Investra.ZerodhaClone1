require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Holdings = require("./model/HoldingsModel");
const Positions = require("./model/PositionsModel")
const Orders = require("./model/OrdersModel");
const authRoute = require("./Routes/AuthRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const { checkVerify } = require("./Middlewares/AuthMiddleware");
const port = process.env.PORT || 8080; // NEED to put port like this, cause it will be used for aws deployment
const url = process.env.MONGO_URL;

main().catch(err => console.log(`${err.message} !! DataBased not connected `));

async function main() {
  await mongoose.connect(url); 
  console.log("Database connected");
}



app.use(
  cors({
    origin: [
      `http://localhost:${port}`,
      "http://localhost:5173",


    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);




app.get('/allHoldings',checkVerify,async(req,res)=>{
   let allHoldings = await Holdings.find({});

   res.send(allHoldings)
});

app.get('/allPositions',checkVerify,async(req,res)=>{
   let allPositions = await Positions.find({});
  
   res.send(allPositions);
});

app.get("/Orders",checkVerify,async(req,res)=>{
  let allOrders = await Orders.find({});
  res.send(allOrders)

})

app.post("/newOrder",checkVerify, async (req, res) => {
  let newOrder = new Orders({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  let newHolding = await Holdings.findOne({ name: newOrder.name });

  if (newOrder.mode == "BUY") {
    if (newHolding != null) {
      newHolding.qty = newHolding.qty + newOrder.qty;
      await newHolding.save();
    } else {
      let holdings = new Holdings(newOrder);
      await holdings.save();
    }
  }

  if (newOrder.mode == "SELL") {
    if (newHolding == null) {
      return res.status(400).json({
        message: "Stock not found",
      });
    }

    if (newHolding.qty < newOrder.qty) {
      return res.status(400).json({
        message: "You dont have enough Stocks",
      });
    }

    newHolding.qty -= newOrder.qty;
    await newHolding.save();
  }

  await newOrder.save();

  res.send("Order Saved");
});

app.listen(port,(req,res)=>{
    console.log();

});





