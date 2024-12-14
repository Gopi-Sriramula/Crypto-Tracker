import { Link } from "react-router-dom";
import "./style.css";
import Button from "../Button";
import TemporaryDrawer from "./Drawer";
import Drawer from "./Drawer";
function Header() {
  return (
    <div className="header-bar">
      <h1 className="header-head">
        CryptoTracker<span>.</span>
      </h1>
      <div className="header-links">
        <Link to="/" className="link">Home</Link>
        <Link to="/compare" className="link">Compare</Link>
        <Link to="/watchlist" className="link">Watchlist</Link>
        <Link to="/dashboard" className="link"><Button text={"Dashboard"} bool={"btn1"}/></Link>
      </div>
      <div className="header-OpenClose">
        <Drawer/>
      </div>
    </div>
  );
}

export default Header;
