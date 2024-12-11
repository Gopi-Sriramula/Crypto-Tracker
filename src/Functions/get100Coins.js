import axios from "axios";

export const get100Coins = () => {
  const myCoins = axios(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  )
    .then((respondse) => {
      return respondse.data;
    })
    .catch((err) => {
      console.log(err);
    });
    return myCoins;
};

export default get100Coins;
