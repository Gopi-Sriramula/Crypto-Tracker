import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header";
import { useEffect, useState } from "react";
import Loader from "../Components/Common/Loader";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/convertObject";
import List from "../Components/Dashboard/List";
import CoinInfo from "../Components/Common/CoinInfo";
import { getCoinPrices } from "../functions/getCoinPrices";
import { convertDate } from "../functions/convertDate";
import LineChart from "../Components/Coin/LineChart";
import Select from "../Components/Common/Select";
import RadioButton from "../Components/Common/RadioButtons";
import { settingChartData } from "../functions/settingChartData";
function CoinPage() {
  const [coin, setCoin] = useState(null);
  const [days,setDays] = useState(7);
  const [chartData1, setChartData] = useState(null);
  const [state,setState] = useState("prices")
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [days,state]);
  const getData = async function () {
    if(!coin){
      const data = await getCoinData(id);
      coinObject(setCoin, data);
    }
    const graphData = await getCoinPrices(id,days,state);
    if (graphData) {
      settingChartData(setChartData,graphData);
    }
  };
  if (!coin || !chartData1) {
    return <Loader />;
  }
  return (
    <div>
      <Header />
      <div className="singleCoin">
        <List item={coin} i={0} />
      </div>
      <div className="graph">
        <div><Select setDays={setDays}/></div>
        <div className="graphDiv2">
          <RadioButton setState={setState} state={state}/>
        </div>
        <LineChart chartData={chartData1}/>
      </div>
      <CoinInfo id={coin.id} desc={coin.desc} />
    </div>
  );
}

export default CoinPage;
