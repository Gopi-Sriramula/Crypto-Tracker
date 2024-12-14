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
function CoinPage() {
  const [coin, setCoin] = useState(null);
  // const [days,setDays] = useState(10);
  const [chartData1, setChartData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getData();
    }
  }, []);
  console.log(chartData1);
  const getData = async function () {
    const data = await getCoinData(id);
    const graphData = await getCoinPrices(id, 10);
    if (graphData) {
      setChartData({
        labels: graphData.map((item) => convertDate(item[0])),
        datasets: [
          {
            data: graphData.map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth:2,
            fill:true,
            tension:0.25,
            backgroundColor: "rgba(58,128,233,0.1)",
            pointRadius:1,
          },
        ],
      });
      coinObject(setCoin, data);
    }
  };
  if (!coin && !chartData1) {
    return <Loader />;
  }
  return (
    <div>
      <Header />
      <div className="singleCoin">
        <List item={coin} i={0} />
      </div>
      <div className="graph"><LineChart chartData={chartData1}/></div>
      <CoinInfo id={coin.id} desc={coin.desc} />
    </div>
  );
}

export default CoinPage;
