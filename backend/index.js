require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");
const tradingRoute = require("./Routes/TradingRoute");

const app = express();

const port = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

async function main() {
  await mongoose.connect(url);
  console.log("Database connected");
}

main().catch((err) =>
  console.log(`${err.message} !! Database not connected`)
);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://investra-zerodha-clone1.vercel.app",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);
app.use("/", tradingRoute);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});