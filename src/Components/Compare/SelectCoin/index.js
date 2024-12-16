import { useCallback, useEffect, useState } from "react";
import { get100Coins } from "../../../functions/get100Coins";
import "./style.css";
function SelectCoin({crypto1,crypto2,onChange}) {
  const [coins,setCoins] = useState(null);
  console.log(coins);
  useEffect(()=>{
    get100Coins(setCoins);
  },[])
  if(!coins){
    return <h1>Loading...</h1>;
  }
  return (
    <div className="twoCoins">
      <div className="selectContainer">
        <label htmlFor="select">Crypto1</label>
        <select className="select" id="select" onChange={(e)=>{onChange(e,true)}}>
          {coins.map((item)=>{
            if(item.id!==crypto2){
              return <option value={item.id} className="option">{item.id}</option>
            }
          })}
        </select>
      </div>
      <div className="selectContainer">
        <label htmlFor="select">Crypto2</label>
        <select className="select" id="select" onChange={(e)=>{onChange(e,false)}}>
          {coins.map((item)=>{
            if(item.id!==crypto1){
              return <option value={item.id} className="option">{item.id}</option>
            }
          })}
        </select>
      </div>
    </div>
  );
}

export default SelectCoin;
