import { convertDate } from "./convertDate";

export const settingChartData = function (setChartData,graphData) {
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
      },
    ],
  });
};
