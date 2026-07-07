// import { holdings } from "../data/data";
// instead of hardcoding or getting data from data.js we can get data from api

import { useState,useEffect } from "react";
import axios from 'axios';
import  VerticalGraph from "./VerticalGraph";

const Holdings = () => {

  const [allholdings,setAllHoldings] = useState([]);
  
useEffect(() => {
  axios
    .get("http://localhost:8080/allHoldings", {
      withCredentials: true,
    })
    .then((res) => {
      setAllHoldings(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);


   const labels = allholdings.map((sub)=>sub["name"]);
    const data = {
  labels,
  datasets : [
         {
             label: 'Stock Price',
             data : allholdings.map((stock)=> stock.price),
             backgroundColor: 'rgba(255, 99, 132, 0.5)'

         }
  ]
 }

  return (
    <>
      <h3 className="title">Holdings ({allholdings.length || 0})</h3>

      <div className="order-table ">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
            {allholdings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index} >
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>

                  <td>{currValue.toFixed(2)}</td>

                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>

                  <td className={profClass}>{stock.net}</td>

                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </thead>

          <tbody></tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&amp;L</p>
        </div>
      </div>

     <VerticalGraph data = {data}/>
    </>
  );
};

export default Holdings;
