
import { useState,useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data.js";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


import GeneralContext from "./GeneralContext";


const WatchList = () => {
  
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search "
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (<WatchListItem stock={stock} key={index} />);
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {

  const [showWatchlistActions, setShowWatchlistActions] = useState(false);


  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>

        <div className="item-info ">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? ( <KeyboardArrowDown className="down" />  ) : ( <KeyboardArrowUp className="up" /> )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};


const WatchListActions = ({ uid }) => {
  const { openBuyWindow,openSellWindow } = useContext(GeneralContext);

  return (
    <span className="actions ">
      <span>
        <Tooltip
          title="Buy"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button
            className="buy"
            onClick={() => openBuyWindow(uid)}
          >
            Buy
          </button>
        </Tooltip>

        <Tooltip
          title="Sell"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="sell"
           onClick={()=>openSellWindow(uid)}
          >
            Sell
            </button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="action">
            <BarChartOutlinedIcon className="icon" />
          </button>
        </Tooltip>

        <Tooltip
          title="More"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="action">
            <MoreHorizIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};