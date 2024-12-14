import Button from "../Button";
import front from "../../../assets/front.png";
import back from "../../../assets/back.png";
import { motion } from "framer-motion";
import "./style.css";
import { Link } from "react-router-dom";
function MainComponent() {
  return (
    <div className="main-Container">
      <div className="main-heads">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="crypto-head"
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="realTime-head"
        >
          Real Time.
        </motion.h1>
        <motion.p className="main-para"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div className="main-buttons"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <Link to="/dashboard"><Button text={"Dashboard"} bool={"btn1"} /></Link>
          <Button text={"Share"} bool={"btn2"} />
        </motion.div>
      </div>
      <div className="main-images">
        <img className="img1" src={front} />
        <motion.img className="img2" initial={{y:-15}} animate={{y:15}} transition={{duration:1.5,repeat:Infinity,type:"smooth",repeatType:"mirror"}} src={back} />
      </div>
    </div>
  );
}

export default MainComponent;
