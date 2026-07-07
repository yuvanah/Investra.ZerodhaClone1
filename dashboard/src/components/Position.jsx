
import { useState,useEffect } from "react";
import axios from 'axios';

const Positions = () => {
    const [allpositions,setAllPositions] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:8080/allPositions",{ withCredentials: true}).then((res)=>{
        setAllPositions(res.data);
      })
    })
  return (
    <>
      <h3 className="title">Positions ({allpositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allpositions.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const pnl = currValue - stock.avg * stock.qty;

              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>

                  <td className={profClass}>
                    {pnl.toFixed(2)}
                  </td>

                  <td className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;