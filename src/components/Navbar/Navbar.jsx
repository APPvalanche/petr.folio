import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Lottie, { lottieRefCurrentProps } from "lottie-react";
import animationData from "../../assets/Logo-animation.json";
import { useRef } from "react";
import { IoIosGlobe } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import i18next from "i18next";

import "./Navbar.scss";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "cs",
    name: "Čeština",
    country_code: "cz",
  },
  {
    code: "es",
    name: "Español",
    country_code: "es",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [openLanguages, setOpenLanguges] = useState(false);

  const logoRef = useRef < lottieRefCurrentProps > null;

  return (
    <nav className="app__navbar">
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

      <div className="app__navbar-languages">
        <button onClick={() => setOpenLanguges(true)} >
          <IoIosGlobe />
          <RiArrowDropDownLine />
        </button>
        

        {openLanguages && (
          <motion.div
            className="app__languages-div"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setOpenLanguges(false)} />
            <ul>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <button onClick={() => i18next.changeLanguage(code)}>
                    <span className={`flag-icon flag-icon-${country_code}`}></span>
                    <span onClick={() => setOpenLanguges(false)}>{name}</span>
                  </button>
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
