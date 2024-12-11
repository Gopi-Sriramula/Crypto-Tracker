import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import SelectCoins from "../Components/Compare";
import SelectDays from "../Components/Coin/Select";
import { getCoinData } from "../Functions/getCoinData";
import { coinObject } from "../Functions/convertObject";
import { getCoinPrices } from "../Functions/getCoinPrices";
import Loader from "../Components/Common/Loader";
import List from "../Components/DashBoard/List";
import { settingChartData } from "../Functions/settingChartData";
import LineChart from "../Components/Coin/LineChart";
function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const handleDaysChange = function (e) {
    setDays(e.target.value);
  };
  useEffect(() => {
    getData();
    console.log(1);
  }, []);
  async function getData() {
    setisLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    if (data1) {
      coinObject(setCrypto1Data, data1);
    }
    if (data2) {
      coinObject(setCrypto1Data, data1);
    }
    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      if (prices1 && prices2) {
        console.log(prices1, prices2);
        setisLoading(false);
      }
    }
  }
  const handleCoinChange = async function (event, isCoin2) {
    setisLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      if (prices1 && prices2) {
        settingChartData(setChartData, prices1, prices2);
        console.log(prices1, prices2);
        setisLoading(false);
      }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }
  };
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="coins-days-flex">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto2Data} />
          </div>
          <div className="grey-wrapper">
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
        </>
      )}
    </div>
  );
}

export default ComparePage;
