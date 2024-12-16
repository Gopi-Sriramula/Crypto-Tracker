import { convertDate } from "./convertDate";

export const settingChartData = function (setChartData,graphData,graphData2) {
  if(graphData2){
    setChartData({
      labels: graphData.map((item) => convertDate(item[0])),
      datasets: [
        {
          label:"Crypto1",
          data: graphData.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: false,
          width: "100%",
          tension: 0.25,
          pointRadius: 1,
          yAxisID:"crypto1"
        },
        {
          label:"Crypto2",
          data: graphData2.map((price) => price[1]),
          borderColor: "#61c96f",
          borderWidth: 2,
          fill: false,
          width: "100%",
          tension: 0.25,
          pointRadius: 1,
          yAxisID:"crypto2"
        },
      ],
    });
  }
  else{
    setChartData({
      labels: graphData.map((item) => convertDate(item[0])),
      datasets: [
        {
          data: graphData.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: true,
          width: "100%",
          tension: 0.25,
          backgroundColor: "rgba(58,128,233,0.1)",
          pointRadius: 1,
          yAxisID:"crypto1"
        },
      ],
    });
  }
};
