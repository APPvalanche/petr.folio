import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";
import Lottie, { lottieRefCurrentProps } from "lottie-react";
import animationData from "../../assets/Logo-animation.json";
import { useRef } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const logoRef = useRef < lottieRefCurrentProps > null;

  return (
    <nav className="app__navbar glassmorphism__light">
      <div className="app__navbar-animation">
        <Lottie
          onComplete={() => {
            console.log("complete");
          }}
          lottieRef={logoRef}
          loop={false}
          animationData={animationData}
          style={{ height: "50px", width: "50px", margin: "0 0.5rem" }}
        />
      </div>
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <Link to={item} smooth={true} offset={1} duration={800}>
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
