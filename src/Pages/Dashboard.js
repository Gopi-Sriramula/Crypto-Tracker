import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import BasicTabs from "../Components/Dashboard/Tabs";
import Tabs from "../Components/Dashboard/Tabs";
import { get100Coins } from "../functions/get100Coins";
import Loader from "../Components/Common/Loader";
import PaginationControlled from "../Components/Dashboard/Pagination";
import SearchBar from "../Components/Dashboard/SearchBar";

function DashBoard() {
  const [text,setText] = useState("")
  const [coin, setCoin] = useState(null);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  let coins10;
  let searchCoins;
  if(coin){
    coins10 = coin.slice((page-1)*10,(page*10));
    searchCoins = coins10.filter(item=>item.symbol.toLowerCase().includes(text.toLowerCase()) || item.id.toLowerCase().includes(text.toLowerCase()));
  }
  useEffect(() => {
    get100Coins(setCoin);
  }, []);
  if (!coin) {
    return <Loader />;
  }
  return (
    <div>
      <Header />
      <SearchBar text={text} setText={setText}/>
      <Tabs coin={searchCoins} />
      <PaginationControlled page={page} handleChange={handleChange} />
    </div>
  );
}

export default DashBoard;
