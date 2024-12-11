import React from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { convertNumber } from "../../../Functions/convertNumber";
import { Link } from "react-router-dom";
function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list-row">
        <td>
          <img src={coin.image} className="coin-logo td-logo" />
        </td>
        <td className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </td>
        <td className="chip-flex">
          <div
            className={`chip-price td-price1 ${
              coin.price_change_percentage_24h < 0 ? "red" : "green"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div
            className={`chip-price edit td-icon ${
              coin.price_change_percentage_24h < 0 ? "red" : "green"
            }`}
          >
            {coin.price_change_percentage_24h > 0 ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
          </div>
        </td>
        <td>
          <h3
            className={`coin-price tdCoin-price ${
              coin.price_change_percentage_24h < 0 ? "red1" : "green1"
            }`}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
        <td className="total-volume td-volume">
          <p>{coin.total_volume.toLocaleString()}</p>
        </td>
        <td className="total-volume">
          <p className="volume1">${coin.market_cap.toLocaleString()}</p>
          <p className="volume2">${convertNumber(coin.market_cap)}</p>
        </td>
      </tr>
    </Link>
  );
}

export default List;
