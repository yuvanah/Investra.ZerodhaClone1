import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios"
const Orders = () => {
  const [allOrders,setAllOrders] = useState([]);
useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_API_URL}/Orders`, {
      withCredentials: true,
    })
    .then((res) => {
      setAllOrders(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

  

  return (
    <div className="orders">

      {
      allOrders.length == 0 ?
       (<div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to="/" className="btn">
          Get started
        </Link>
      </div> )
      :
      (
           <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price </th>
              <th>Mode</th>
              
            </tr>
          </thead>

          <tbody>
            {allOrders.map((stock, index) => {
            

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{stock.mode}</td>
                 

                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      )


     }


     
    </div>
  );
};

export default Orders;