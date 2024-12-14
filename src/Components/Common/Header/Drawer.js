import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
export default function Drawer() {
  const [state, setState] = useState(false);
  return (
    <div>
      {["right"].map((anchor,i) => (
        <div key={i}>
          <Button
            onClick={() => {
              setState(true);
            }}
          >
            <MenuRoundedIcon className="link"/>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state}
            onOpen={()=>{setState(true)}}
            onClose={() => {
              setState(false);
            }}
          >
            <div className="header-drawer">
              <Link to="/" className="link">
                Home
              </Link>
              <Link to="/compare" className="link">
                Compare
              </Link>
              <Link to="/watchlist" className="link">
                Watchlist
              </Link>
              <Link to="/dashboard" className="link">
                Dashboard
              </Link>
            </div>
          </SwipeableDrawer>
        </div>
      ))}
    </div>
  );
}
