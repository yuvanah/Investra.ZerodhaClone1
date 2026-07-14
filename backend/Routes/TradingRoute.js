const express = require("express");
const router = express.Router();

const { checkVerify } = require("../Middlewares/AuthMiddleware");

const {
  getAllHoldings,
  getAllPositions,
  getAllOrders,
  createOrder,
  getWallet,
   getMarketNews,
} = require("../Controllers/TradingController");

router.get("/allHoldings", checkVerify, getAllHoldings);

router.get("/allPositions", checkVerify, getAllPositions);

router.get("/Orders", checkVerify, getAllOrders);

router.post("/newOrder", checkVerify, createOrder);

router.get("/wallet", checkVerify, getWallet);

router.get("/news", getMarketNews);

module.exports = router;