import axios from "axios";

export const getCoinData = (id) => {
  console.log(id);
  const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((repondse) => {
     return repondse.data;
    })
    .catch((error) => {
      console.log(error);
    });
    return myData;
};
