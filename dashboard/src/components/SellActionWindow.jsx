import { useState } from "react";
import axios from "axios";
import "./BuyActionWindow.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function SellActionWindow({ uid, closeSellWindow }) {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSellClick = async () => {
    try {
      await axios.post(
  `${import.meta.env.VITE_API_URL}/newOrder`,
  {
    name: uid,
    qty: Number(stockQuantity),
    price: Number(stockPrice),
    mode: "SELL",
  },
  {
    withCredentials: true,
  }
);

      closeSellWindow();
    } catch (err) {
      const message =
        err.response?.data?.message || "Something went wrong";

      setMessage(message);
      setOpen(true);

      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons mb-5">
        <span>Estimated Value ₹{stockQuantity * stockPrice}</span>

        <div>
          <button
            className="btn btn-red"
            onClick={handleSellClick}
          >
            Sell
          </button>

          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>

      {open && (
        
          <Alert severity="error">
            {message}
          </Alert>
        
      )}
    </div>
  );
}

export default SellActionWindow;