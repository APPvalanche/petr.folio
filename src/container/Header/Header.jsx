import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <>
    <div className="app__header app__flex" id="home">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-description"
      >
        <div className="description">
          <h2>Hi, Welcome!</h2>
          <p className="p-text">
            Unlock the potential for your business with a professional website!
            Boost your online visibility, attract more customers, and stay ahead
            of the competition.
          </p>
          <button className="button1">
            <a href="#contact">Get in Touch!</a>
          </button>
          </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
      </motion.div>
    </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Header, "app__header"),
  "home",
  "app__primarybg"
);
