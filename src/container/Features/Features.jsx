import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Features.scss";

import Lottie from "lottie-react";
import animationData from "../../assets/Feature_animation.json";
import {
  MdOutlineSecurity,
  MdSpeed,
  MdOutlineRocketLaunch,
  MdOutlineScreenSearchDesktop,
  MdStarRate,
} from "react-icons/md";

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="features__animation">
          <Lottie animationData={animationData} />
        </div>
        <div className="features__text">
          <h2 className="head-text">Why Choose Our Services?</h2>
          <div className="list">
            <ul>
              <li>
                <MdOutlineRocketLaunch />
                <p className="p-text">
                  <span>Comprehensive Full-Stack Support:</span> Our all-in-one service,
                  covering everything from website design and creation to
                  testing, hosting, and deployment.
                </p>
              </li>
              <li>
                <MdOutlineSecurity />
                <p className="p-text">
                  <span>Security:</span> Implement robust security measures to protect user
                  data and ensure the safety of online transactions. Communicate
                  clearly about security features to build trust with users.
                </p>
              </li>
              <li>
                <MdSpeed />
                <p className="p-text">
                <span>Fast Loading Speed:</span> Optimize website performance to minimize
                  loading times. Customers appreciate websites that load
                  quickly, as it contributes to a positive user experience and
                  can impact search engine rankings.
                </p>
              </li>
              <li>
                <MdOutlineScreenSearchDesktop />
                <p className="p-text">
                <span>SEO-Friendly Practices:</span> Incorporate search engine optimization
                  (SEO) best practices to improve the website's visibility on
                  search engines. This includes optimizing content, meta tags,
                  and other elements for better search engine rankings.
                </p>
              </li>
              <li>
                <MdStarRate />
                <p className="p-text">
                <span>Outstanding Communication and Customer Service:</span> Benefit from
                  excellent communication and dedicated customer service
                  throughout your engagement with us.
                </p>
              </li>
            </ul>
          </div>
          <button>
            <a href="#contact">Book A Free Consultation!</a>
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
