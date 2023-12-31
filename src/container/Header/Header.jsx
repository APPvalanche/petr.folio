import React from "react";
import "./Header.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { GrSecure } from "react-icons/gr";
import { TfiStatsUp } from "react-icons/tfi";

const Header = () => {
  return (
    <div id="home">
      <div className="wrapper">
        <div className="grid1">
          <h2>
            <span>APP</span><br />
            valan- <br />
            che
          </h2>
        </div>
        <div className="grid2">
            <img src={images.bento_profile} alt="profile picture" />
        </div>

        <div className="grid3 grid_shadow">
          <div className="description">
            <h2>Hello,</h2>
            <p> Unlock the potential for your business with a professional website! Boost your online visibility, attract more customers, and stay ahead of the competition.</p>
            <button><a href="#contact">Get in Touch!</a></button>
          </div>
        </div>

        <div className="grid4 grid_shadow">
          <div className="phone">
            <img src={images.phone} alt="phone image" />
          </div>
        </div>
        <div className="grid5 grid_shadow">
          <div>
            <TfiStatsUp />
          </div>
            <h3>Business<br />
                Solution.
            </h3>
        </div>
        <div className="grid6 grid_shadow">
          <img src={images.city_bg} alt="night city" /> 
        </div>
        <div className="grid7 grid_shadow">
              <div>
                <GrSecure />
                <h3>Security</h3>
              </div>
              
        </div>
      </div>
    </div>
  );
};

export default Header;
