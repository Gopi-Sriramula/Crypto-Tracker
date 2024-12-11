import { convertDate } from "./convertDate";

export const settingChartData = (setChartData,prices1,prices2)=>{
  if(prices2){
    setChartData({
      labels: prices1.map(item=>convertDate(item[0])),
      datasets: [
        {
          data: prices1.map(item=>item[1]),
          borderColor: "#3a80e9",
          borderWidth:2,
          fill:false,
          tension:0.25,
          borderColor:"#3a80e9",
          pointRadius:0,
        },
        {
          data: prices2.map(item=>item[1]),
          borderColor: "#3a80e9",
          borderWidth:2,
          fill:false,
          tension:0.25,
          borderColor:"#limegreen",
          pointRadius:0,
        },
      ],
    });
  }
  else{
    setChartData({
      labels: prices1.map(item=>convertDate(item[0])),
      datasets: [
        {
          data: prices1.map(item=>item[1]),
          borderColor: "#3a80e9",
          borderWidth:2,
          fill:true,
          tension:0.25,
          backgroundColor: "rgba(58,128,233,0.1)",
          borderColor:"#3a80e9",
          pointRadius:0,
        },
      ],
    });
  }
}