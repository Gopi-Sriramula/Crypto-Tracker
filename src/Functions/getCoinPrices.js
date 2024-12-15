import axios from "axios";
export const getCoinPrices = (id,days,state)=>{
     console.log(state);
     const prices = axios(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&currency=usd&days=${days}&interval=daily`)
     .then((respondse)=>{
          return respondse.data[state];
     }).catch((error)=>{console.log(error)})
     return prices;
}