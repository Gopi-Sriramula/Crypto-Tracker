import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header";
import Loader from "../Components/Common/Loader";
import { coinObject } from "../Functions/convertObject";
import List from "../Components/DashBoard/List";
import CoinInfo from "../Components/Coin/CoinInfo";
import { getCoinData } from "../Functions/getCoinData";
import { getCoinPrices } from "../Functions/getCoinPrices";
import LineChart from "../Components/Coin/LineChart";
import { convertDate } from "../Functions/convertDate";
import { borderColor } from "@mui/system";
import SelectDays from "../Components/Coin/Select";
import { settingChartData } from "../Functions/settingChartData";
import TogglePriceType from "../Components/Coin/PriceType";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);
  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      console.log(data);
      const prices = await getCoinPrices(id, days,priceType);
      if (prices) {
        settingChartData(setChartData,prices)
        setisLoading(false);
      }
    }
  }
  const handleDaysChange =async (event) => {
    setisLoading(true)
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value,priceType);
    if(prices){
      settingChartData(setChartData,prices);
      setisLoading(false);
    }
  };
  const handlePriceTypeChange =async (event, newType) => {
    setisLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id,days,newType);
    if(prices){
      settingChartData(setChartData,prices);
      setisLoading(false);
    }
  };
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>
            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
