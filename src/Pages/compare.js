import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/convertObject";
import List from "../Components/Dashboard/List";
import Loader from "../Components/Common/Loader";
import CoinInfo from "../Components/Common/CoinInfo";
import { getCoinPrices } from "../functions/getCoinPrices";
import { settingChartData } from "../functions/settingChartData";
import LineChart from "../Components/Coin/LineChart";
import SelectCoin from "../Components/Compare/SelectCoin";
import Select from "../Components/Common/Select";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [cryptoData1, setCryptoData1] = useState(null);
  const [cryptoData2, setCryptoData2] = useState(null);
  const [days, setDays] = useState(7);
  const [chartData1, setChartData] = useState(null);
  const [state, setState] = useState("prices");
  console.log(cryptoData1, cryptoData2);
  useEffect(() => {
    getData();
  }, [days]);
  const onChange = async function(e,bool){
    if(bool){
      const graphData = await getCoinPrices(e.target.value, days, state);
      const graphData2 = await getCoinPrices(e.target.value, days, state);
      if (graphData && graphData2) {
        console.log(graphData,graphData2)
         await settingChartData(setChartData, graphData, graphData2);
      }
      setCrypto1(e.target.value);
    }
    else{
      const graphData = await getCoinPrices(e.target.value, days, state);
      const graphData2 = await getCoinPrices(e.target.value, days, state);
      if (graphData && graphData2) {
        await settingChartData(setChartData, graphData, graphData2);
      }
      setCrypto2(e.target.value);
    }
  }
  const getData = async function () {
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    if (data1 && data2) {
      const graphData = await getCoinPrices(crypto1, days, state);
      const graphData2 = await getCoinPrices(crypto2, days, state);
      if (graphData && graphData2) {
        settingChartData(setChartData, graphData, graphData2);
      }
      coinObject(setCryptoData1, data1);
      coinObject(setCryptoData2, data2);
    }
  };
  if (!cryptoData1 || !cryptoData2) {
    return <Loader />;
  }
  return (
    <div>
      <Header />
      <div className="changeCoin">
        <SelectCoin
          crypto1={crypto1}
          crypto2={crypto2}
          onChange={onChange}
        />
        <Select setDays={setDays} />
      </div>
      <div className="edit">
        <List item={cryptoData1} i={0} />
        <List item={cryptoData2} i={1} />
      </div>
      <div className="graph">
        <LineChart chartData={chartData1} multiAxis={true} />
      </div>
      <CoinInfo id={cryptoData1.id} desc={cryptoData1.desc} />
      <CoinInfo id={cryptoData2.id} desc={cryptoData2.desc} />
    </div>
  );
}

export default ComparePage;
