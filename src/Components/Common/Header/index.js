import React from "react";
import "./style.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link to="/" className="link">
          <p>Home</p>
        </Link>
        <Link to="/watchlist" className="link">
          <p>Watchlist</p>
        </Link>
        <Link to="/dashboard" className="link">
          <Button text={"Dashboard"} outlined={false}/>
        </Link>
      </div>
      <div className="mobile-drawer"><TemporaryDrawer/></div>
    </div>
  );
}

export default Header;
