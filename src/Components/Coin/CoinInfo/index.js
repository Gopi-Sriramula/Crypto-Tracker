import React, { useState } from 'react'
import "./style.css";
function CoinInfo({heading,desc}) {
     const [toggle,setToggle] = useState(true);
     const shortDesc = desc.slice(0,300)+`<span style='color:var(--grey)'>Read More...</span>`;
     const longDesc = desc;
  return (
    <div className='grey-wrapper grey-wrapper2'>
     <h2>{heading}</h2>
     <p onClick={()=>{setToggle(!toggle)}} dangerouslySetInnerHTML={{__html:toggle?shortDesc:longDesc}}/>
    </div>
  )
}

export default CoinInfo