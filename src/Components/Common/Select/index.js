import React from "react";
import { useState } from "react";
import "./style.css";
function Select({setDays}) {
  return (
    <div className="selectContainer">
     <label htmlFor="select">Price change in the last</label>
      <select className="select" id="select" onChange={(e) => setDays(e.target.value)}>
        <option value="7">7 Days</option>
        <option value="30">30 Days</option>
        <option value="60">60 Days</option>
        <option value="90">90 Days</option>
        <option value="120">120 Days</option>
        <option value="150">150 Days</option>
      </select>
    </div>
  );
}

export default Select;
