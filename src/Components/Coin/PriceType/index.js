import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import "./style.css";
export default function TogglePriceType({priceType,handlePriceTypeChange}) {
  const styles = {
    border: "1px solid var(--blue)",
    color: "var(--blue) !important",
  };
  return (
    <div className="toggle-prices">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
      >
        <ToggleButton value="prices" sx={styles}>
          Price
        </ToggleButton>
        <ToggleButton value="market_caps" sx={styles}>
          Market Cap
        </ToggleButton>
        <ToggleButton value="total_volumes" sx={styles}>
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
