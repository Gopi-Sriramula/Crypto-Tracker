import axios from "axios";
export const getCoinPrices = (id,days,priceType)=>{
     const prices = axios(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&currency=usd&days=${days}&interval=daily`)
     .then((respondse)=>{
          console.log(respondse.data)
          return respondse.data[priceType];
     }).catch((error)=>{console.log(error)})
     return prices;
}