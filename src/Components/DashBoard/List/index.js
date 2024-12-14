import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { convertNumber } from "../../../functions/convertNumber";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function List({ item, i }) {
  return (
    <Link to={`/coin/${item.id}`} className="grid-link">
      <motion.tr
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0, delay: i * 0.1 }}
        className={`list-container`}
        loading="lazy"
      >
        <td className="grid-div1 list-div1">
          <img src={item.image} className="logo list-logo" />
        </td>
        <td className="coin-names list-coin-names">
          <p>{item.symbol}</p>
          <p>{item.id}</p>
        </td>
        <td className="chip-flex list-chip-flex">
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
            className={`chip-flex-p2 list-chip2 ${
              item.price_change_percentage_24h > 0 ? "green1" : "red1"
            }`}
          >
            {item.price_change_percentage_24h > 0 ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
          </p>
        </td>
        <td
          className={`price list-price ${
            item.price_change_percentage_24h > 0 ? "green2" : "red2"
          }`}
        >
          ${item.current_price.toLocaleString()}
        </td>
        <td className="total-volume list-volume">
          <p className="list-volume-p1">
            ${item.total_volume.toLocaleString()}
          </p>
          <p className="list-volume-p2">${item.market_cap.toLocaleString()}</p>
          <p className="list-volume-p3">{convertNumber(item.market_cap)}</p>
        </td>
      </motion.tr>
    </Link>
  );
}

export default List;
