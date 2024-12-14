import { useState } from "react";
import "./style.css";
function CoinInfo({ id, desc }) {
  const [bool, setBool] = useState(false);
  const short = desc.slice(0,desc.length/2);
  return (
    <div className="coinInfo">
      <h1>{id}</h1>
      <p dangerouslySetInnerHTML={{ __html:bool?desc:short}} />
      <span onClick={()=>{setBool(!bool)}}>{bool?"Read less":"Read More..."}</span>
    </div>
  );
}

export default CoinInfo;
