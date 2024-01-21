import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import Lottie from "lottie-react";
import animationData from "../../assets/Feature_animation.json";
import { useTranslation } from "react-i18next";

import "./Features.scss";

const Features = () => {

  const { t } = useTranslation()

  return (
    <>
    <div className="app__features">
      <div className="features">
        <div className="features__animation">
          <Lottie animationData={animationData} />
        </div>


        <div className="features__text">
          <h2 className="head-text">{t("feature_heading")}</h2>
          <button>
            <a href="#contact">{t("feature_button")}</a>
          </button>

        </div>
      </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Features, "app__features"),
  "features",
  "app__primarybg"
);
