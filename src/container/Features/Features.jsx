import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Features.scss";
import Lottie from "lottie-react";
import animationData from "../../assets/Feature_animation.json";

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="features__animation">
          <Lottie animationData={animationData} />
        </div>
        <div className="features__text">
          <h2 className="head-text">Features</h2>
          <p className="p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            rerum placeat! Ratione sint officiis facilis ea neque hic quae nisi.
          </p>
          <ul>
            <li>
              <p className="p-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae, tempore excepturi illum repellat assumenda
                officiis!
              </p>
            </li>
            <li>
              <p className="p-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae, tempore excepturi illum repellat assumenda
                officiis!
              </p>
            </li>
            <li>
              <p className="p-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae, tempore excepturi illum repellat assumenda
                officiis!
              </p>
            </li>
            <li>
              <p className="p-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae, tempore excepturi illum repellat assumenda
                officiis!
              </p>
            </li>
          </ul>
          <button>Book Free Consultation</button>
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
