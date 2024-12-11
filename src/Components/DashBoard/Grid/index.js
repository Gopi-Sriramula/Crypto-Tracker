import React from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Link, useNavigate } from "react-router-dom";
function Grid({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 ? "border-red" : "border-green"
        }`}
      >
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>
        <div className="chip-flex">
          <div
            className={`chip-price ${
              coin.price_change_percentage_24h < 0 ? "red" : "green"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div
            className={`chip-price edit ${
              coin.price_change_percentage_24h < 0 ? "red" : "green"
            }`}
          >
            {coin.price_change_percentage_24h > 0 ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
          </div>
        </div>
        <h3
          className={`coin-price ${
            coin.price_change_percentage_24h < 0 ? "red1" : "green1"
          }`}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
        <div className="total-volume">
          <p>Total Volume : {coin.total_volume.toLocaleString()}</p>
          <p>Market Cap : {coin.market_cap.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
}

export default Grid;
