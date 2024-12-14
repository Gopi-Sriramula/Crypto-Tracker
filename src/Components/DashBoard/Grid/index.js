import React from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Grid({ item, i }) {
  return (
    <Link className="grid-link" to={`/coin/${item.id}`}>
      <motion.div
        initial={{ opacity: 0, y: +50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0, delay: i * 0.1 }}
        className={`grid-container ${
          item.price_change_percentage_24h > 0 ? "green3" : "red3"
        }`}
      >
        <div className="grid-div1">
          <img src={item.image} className="logo" />
          <div className="coin-names">
            <p>{item.symbol}</p>
            <p>{item.id}</p>
          </div>
        </div>
        <div className="chip-flex">
          <p
            className={`chip-flex-p1 ${
              item.price_change_percentage_24h > 0 ? "green1" : "red1"
            }`}
          >
            {item.price_change_percentage_24h > 0
              ? "+" + item.price_change_percentage_24h.toFixed(2) + " %"
              : item.price_change_percentage_24h.toFixed(2) + " %"}
          </p>
          <p
            className={`chip-flex-p2 ${
              item.price_change_percentage_24h > 0 ? "green1" : "red1"
            }`}
          >
            {item.price_change_percentage_24h > 0 ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
          </p>
        </div>
        <p
          className={`price ${
            item.price_change_percentage_24h > 0 ? "green2" : "red2"
          }`}
        >
          ${item.current_price.toLocaleString()}
        </p>
        <div className="total-volume">
          <p>Total Volume : ${item.total_volume.toLocaleString()}</p>
          <p>Market Cap : ${item.market_cap.toLocaleString()}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default Grid;
