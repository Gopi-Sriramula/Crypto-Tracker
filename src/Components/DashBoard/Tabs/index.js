import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./style.css";
import Grid from "../Grid";
import List from "../List";
const style = {
  color: "var(--white)",
  fontWeight: 600,
  fontSize: "1.1rem",
};
export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>
        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={coin.id} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list" >
          <table className="table-row">
            {coins.map((coin, i) => {
              return <List coin={coin} key={coin.id} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
