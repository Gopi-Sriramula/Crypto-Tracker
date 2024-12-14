import axios from "axios"

export const getCoinData = (id)=>{
     console.log(id)
     const myData = axios(`https://api.coingecko.com/api/v3/coins/${id}`).then((respondse)=>{
          return respondse.data;
     }).catch((err)=>{
          console.log(err);
     })
     return myData;
}