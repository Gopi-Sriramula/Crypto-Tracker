import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Key } from "@mui/icons-material";
export default function TemporaryDrawer() {
  const [state, setState] = useState(false);
  return (
    <div>
      {["right"].map((anchor, i) => (
        <>
          <Button onClick={() => setState(true)}>
            <MenuIcon className="link" />
          </Button>
          <Drawer key={i}
            anchor={"right"}
            open={state}
            onClose={() => {
              setState(false);
            }}
          >
            <div className="mobile-div">
              <Link to="/" className="link">
                <p>Home</p>
              </Link>
              <Link to="/watchlist" className="link">
                <p>Watchlist</p>
              </Link>
              <Link to="/dashboard" className="link">
                <p>Dashboard</p>
              </Link>
            </div>
          </Drawer>
        </>
      ))}
    </div>
  );
}
