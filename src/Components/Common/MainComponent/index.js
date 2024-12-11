import React from "react";
import "./style.css";
import Button from "../Button";
import gradient from "../../../assets/gradient.png";
import phone from "../../../assets/phone.png";
import { motion } from "framer-motion";
function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          initial={{ opacity: 0,y:50}}
          animate={{ opacity: 1,y:0}}
          transition={{ duration: 0.3 }}
          className="crypto-tracker-heading"
        >
          Track Crypto
        </motion.h1>
        <motion.h1
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.3,delay:0.3}}
         className="real-time-heading">Real Time.</motion.h1>
        <motion.p
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.3,delay:0.6}}
         className="info-text">
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div 
        initial={{opacity:0,x:50}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.3,delay:0.9}}
        className="btn-flex">
          <Button text={"DashBoard"} />
          <Button text={"Share"} outlined={true} />
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img
        initial={{y:-15}}
        animate={{y:15}}
        transition={{duration:1.5,repeat:Infinity,type:"smooth",repeatType:"mirror"}}
         src={phone} className="phone" />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  );
}

export default MainComponent;
