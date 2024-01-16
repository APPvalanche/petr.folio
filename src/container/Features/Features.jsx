import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import Lottie from "lottie-react";
import animationData from "../../assets/Feature_animation.json";

import "./Features.scss";

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="features__animation">
          <Lottie animationData={animationData} />
        </div>


        <div className="features__text">
          <h2 className="head-text">Save Money, Drive Success: Optimize Your Web Presence Now!</h2>
          <button>
            <a href="#contact">Book a Free Call!</a>
          </button>

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
