import { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "../Grid";
import "./style.css";
import List from "../List";
const styles = {
  color: "var(--white)",
  fontWeight: 600,
};
export default function Tabs({ coin }) {
  const [value, setValue] = useState("grid");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={styles} />
          <Tab label="List" value="list" sx={styles} />
        </TabList>
        <TabPanel value="grid">
          <div className="grid">
            {coin.map((item,i) => {
              return <Grid item={item} key={item.id} i={i}/>;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <div className="list">
            {coin.map((item,i) => {
              return <List item={item} key={item.symbol} i={i} />;
            })}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
