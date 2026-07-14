import { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [wallet, setWallet] = useState(0);
  const [username, setUsername] = useState("");
  const [allHoldings, setAllHoldings] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_API_URL}/wallet`, {
      withCredentials: true,
    })
    .then((res) => {
      setWallet(res.data.wallet);
      setUsername(res.data.username);
    })
    .catch((err) => console.log(err));

  axios
    .get(`${import.meta.env.VITE_API_URL}/allHoldings`, {
      withCredentials: true,
    })
    .then((res) => setAllHoldings(res.data))
    .catch((err) => console.log(err));

  axios
    .get(`${import.meta.env.VITE_API_URL}/Orders`, {
      withCredentials: true,
    })
    .then((res) => setAllOrders(res.data))
    .catch((err) => console.log(err));
}, []);

  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );

  const pnl = currentValue - totalInvestment;

  const pnlClass = pnl >= 0 ? "profit" : "loss";

  const totalStocks = allHoldings.reduce(
    (sum, stock) => sum + stock.qty,
    0
  );

  return (
    <>
      <div className="username">
        <h6>Hi, {username} 👋</h6>
        <hr className="divider" />
      </div>

      {/* Wallet */}

      <div className="section">
        <span>
          <p>Wallet</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹{wallet.toFixed(2)}</h3>
            <p>Available Balance</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Account Status <span>Active</span>
            </p>

            <p>
              Orders <span>{allOrders.length}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      {/* Portfolio */}

      <div className="section">
        <span>
          <p>Portfolio</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnlClass}>
              ₹{pnl.toFixed(2)}
            </h3>

            <p>Total P&amp;L</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Current Value
              <span>₹{currentValue.toFixed(2)}</span>
            </p>

            <p>
              Investment
              <span>₹{totalInvestment.toFixed(2)}</span>
            </p>

            <p>
              Holdings
              <span>{allHoldings.length}</span>
            </p>

            <p>
              Stocks Owned
              <span>{totalStocks}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;