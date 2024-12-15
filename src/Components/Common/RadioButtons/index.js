import React from "react";
import "./style.css";
function RadioButton({setState,state}) {
  return (
    <form onChange={(e)=>{setState(e.target.value)}}>
      <div className="radioContainer">
        <input type="radio" name="radio" value="prices" id="a" checked={state==="prices"}/>
        <label htmlFor="a" className="label1">
          PRICE
        </label>
        <input type="radio" name="radio" value="market_caps" id="b" checked={state==="market_caps"}/>
        <label htmlFor="b">MKT CAP</label>
        <input type="radio" name="radio" value="total_volumes" id="c" checked={state==="total_volumes"}/>
        <label htmlFor="c" className="label2">
          VOLUME
        </label>
      </div>
    </form>
  );
}

export default RadioButton;
