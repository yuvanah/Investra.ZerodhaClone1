import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Funds = () => {
  const [wallet, setWallet] = useState(0);
  const [allHoldings, setAllHoldings] = useState([]);
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/wallet", {
        withCredentials: true,
      })
      .then((res) => setWallet(res.data.wallet))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8080/allHoldings", {
        withCredentials: true,
      })
      .then((res) => setAllHoldings(res.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8080/Orders", {
        withCredentials: true,
      })
      .then((res) => setAllOrders(res.data))
      .catch((err) => console.log(err));

    axios
    .get("http://localhost:8080/wallet", {
      withCredentials: true,
    })
    .then((res) => {
      setWallet(res.data.wallet);
    })
    .catch((err) => console.log(err));
  }, []);

  const totalHoldings = allHoldings.length;

  const totalStocks = allHoldings.reduce(
    (sum, stock) => sum + stock.qty,
    0
  );

  const totalOrders = allOrders.length;

  const buyOrders = allOrders.filter(
    (order) => order.mode === "BUY"
  ).length;

  const sellOrders = allOrders.filter(
    (order) => order.mode === "SELL"
  ).length;

  return (
    <>
      <h3 className="title">Funds</h3>

      {/* Wallet */}

      <div
        style={{
          background: "linear-gradient(135deg,#387ed1,#5ba4ff)",
          borderRadius: "12px",
          padding: "30px",
          color: "white",
          marginBottom: "40px",
          boxShadow: "0 10px 25px rgba(0,0,0,.12)",
        }}
      >
        <h5 style={{ color: "#f5f5f5", marginBottom: "10px" }}>
          Wallet Balance
        </h5>

        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "25px",
          }}
        >
          ₹{wallet.toFixed(2)}
        </h1>

        <Link
          to="#"
          className="btn btn-green"
          style={{ marginRight: "15px" }}
        >
          Add Funds
        </Link>

        <Link to="#" className="btn btn-light">
          Withdraw
        </Link>
      </div>

    

      <div className="row">
        <div className="col">
          <h4 style={{ marginBottom: "20px" }}>
            Portfolio Summary
          </h4>

          <div className="table">
            <div className="data">
              <p>Total Holdings</p>
              <p className="imp">{totalHoldings}</p>
            </div>

            <div className="data">
              <p>Stocks Owned</p>
              <p className="imp">{totalStocks}</p>
            </div>

            <div className="data">
              <p>Total Orders</p>
              <p className="imp">{totalOrders}</p>
            </div>

            <hr />

            <div className="data">
              <p>Buy Orders</p>
              <p className="profit">{buyOrders}</p>
            </div>

            <div className="data">
              <p>Sell Orders</p>
              <p className="loss">{sellOrders}</p>
            </div>

            <div className="data">
              <p>Portfolio Status</p>
              <p className="profit">Active</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "10px",
              padding: "25px",
              background: "#fff",
              boxShadow: "0 5px 15px rgba(0,0,0,.05)",
            }}
          >
            <h4 style={{ marginBottom: "20px" }}>
              Trading Insights
            </h4>

            <div className="data">
              <p>Holdings Diversification</p>
              <p>{totalHoldings} Stocks</p>
            </div>

            <div className="data">
              <p>Trading Activity</p>
              <p>{totalOrders} Orders</p>
            </div>

            <div className="data">
              <p>Most Used Action</p>
              <p>
                {buyOrders >= sellOrders ? "Buying" : "Selling"}
              </p>
            </div>

            <hr />

            <p style={{ color: "#777", lineHeight: "1.8" }}>
              Your wallet is used for buying stocks. Whenever
              you sell a stock, the amount is automatically
              credited back to your wallet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;