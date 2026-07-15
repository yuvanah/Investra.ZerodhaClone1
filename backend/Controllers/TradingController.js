const Holdings = require("../model/HoldingsModel");
const Positions = require("../model/PositionsModel");
const Orders = require("../model/OrdersModel");
const User = require("../model/UserModel");
const axios = require("axios");

// Get Holdings
const getAllHoldings = async (req, res) => {
  try {
    const allHoldings = await Holdings.find({
      user: req.user.id,
    });

    res.send(allHoldings);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching holdings",
    });
  }
};

// Get Positions
const getAllPositions = async (req, res) => {
  try {
    const allPositions = await Positions.find({});
    res.send(allPositions);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching positions",
    });
  }
};

// Get Orders
const getAllOrders = async (req, res) => {
  try {
    const allOrders = await Orders.find({
      user: req.user.id,
    });

    res.send(allOrders);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching orders",
    });
  }
};


// Create Buy/Sell Order
const createOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const totalAmount = qty * price;

    const newOrder = new Orders({
      user: req.user.id,
      name,
      qty,
      price,
      mode,
    });

    let newHolding = await Holdings.findOne({
      user: req.user.id,
      name,
    });

    // BUY
    if (mode === "BUY") {
      if (user.wallet < totalAmount) {
        return res.status(400).json({
          success: false,
          message: "Insufficient wallet balance",
        });
      }

      user.wallet -= totalAmount;

      if (newHolding) {
        const oldQty = newHolding.qty;
        const oldInvestment = newHolding.avg * oldQty;
        const newInvestment = price * qty;

        newHolding.qty = oldQty + qty;
        newHolding.avg =
          (oldInvestment + newInvestment) / newHolding.qty;

        // Update latest traded price
        newHolding.price = price;

        await newHolding.save();
      } else {
        newHolding = new Holdings({
          user: req.user.id,
          name,
          qty,
          avg: price,
          price,
        });

        await newHolding.save();
      }

      await user.save();
    }

    // SELL
    if (mode === "SELL") {
      if (!newHolding) {
        return res.status(400).json({
          success: false,
          message: "Stock not found",
        });
      }

      if (newHolding.qty < qty) {
        return res.status(400).json({
          success: false,
          message: "You don't have enough stocks",
        });
      }

      newHolding.qty -= qty;

      // Keep latest traded price updated
      newHolding.price = price;

      user.wallet += totalAmount;

      if (newHolding.qty === 0) {
        await Holdings.deleteOne({
          _id: newHolding._id,
        });
      } else {
        await newHolding.save();
      }

      await user.save();
    }

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      wallet: user.wallet,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get Wallet
const getWallet = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      wallet: user.wallet,
      username: user.username,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Error fetching wallet",
    });
  }
};


const getMarketNews = async (req, res) => {
  try {
    const response = await axios.get(
      "https://finnhub.io/api/v1/news",
      {
        params: {
          category: "general",
          token: process.env.FINNHUB_API_KEY,
        },
      }
    );

    // Send only the data React needs
    const news = response.data.map((article) => ({
      title: article.headline,
      description: article.summary,
      image: article.image,
      source: article.source,
      date: new Date(article.datetime * 1000).toLocaleDateString(),
      url: article.url,
    }));

    res.json(news);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Error fetching market news",
    });
  }
};

module.exports = {
  getAllHoldings,
  getAllPositions,
  getAllOrders,
  createOrder,
  getWallet,
  getMarketNews,
};