import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabsComponent from "../Components/DashBoard/Tabs";
import axios from "axios";
import Search from "../Components/DashBoard/Search";
import PaginationComponent from "../Components/DashBoard/Pagination";
import Loader from "../Components/Common/Loader";
import BackToTop from "../Components/Common/BackToTop";
import get100Coins from "../Functions/get100Coins";
function DashboardPage() {
  const [page, setPage] = useState(1);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );
  const pages = filteredCoins.slice(page * 10 - 10, page * 10);
  useEffect(() => {
    getData()
  }, []);
  const getData = async ()=>{
    const myCoins = await get100Coins();
    if(myCoins){
      setisLoading(false);
      setCoins(myCoins);
    }
  }
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader/>
      ) : (
        <>
          <Search search={search} onChangeSearch={onChangeSearch} />
          <TabsComponent coins={pages} />
          <PaginationComponent page={page} setPage={setPage} />
          <BackToTop/>
        </>
      )}
    </div>
  );
}

export default DashboardPage;
