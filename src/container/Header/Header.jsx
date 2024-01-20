import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

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

  const { t } = useTranslation()

  return (
    <>
    <div className="app__header app__flex" id="home">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-description"
      >
        <div className="description">
          <h2>{t("greeting")}</h2>
          <p className="p-text">
          {t("header_info")}
          </p>
          <div className="btns">
            <button className="btn_contact">
              <a href="#contact">{t("header_info_btn_contact")}</a>
            </button>
            <button className="btn_work">
              <a href="#work">{t("header_info_btn_work")}</a>
              <MdKeyboardDoubleArrowRight />
            </button>
          </div>
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
