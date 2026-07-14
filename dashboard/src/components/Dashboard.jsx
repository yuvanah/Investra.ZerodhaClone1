import { Routes, Route } from "react-router-dom";

import News from "./News"
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Position from "./Position";
import Summary from "./Summary";
import Watchlist from "./Watchlist";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <Watchlist  />
 </GeneralContextProvider>
        <div className="content">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Position />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/news" element={< News/>} />
          </Routes>
        </div>
     
    </div>
  );
};

export default Dashboard;