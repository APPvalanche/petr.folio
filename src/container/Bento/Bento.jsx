import React from "react";
import "./Bento.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

const Bento = () => {
  return (
    <div id="bento">
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

        <div className="grid3">
          <div className="description">
            <h2>Hi!</h2>
            <p> Do you need professional and modern website? If the answer is yes, don't need to look any further. Here starts your website journey. I am Petr and I am a website developer.</p>
          </div>
        </div>

        <div className="grid4 grid_shadow">4</div>
        <div className="grid5 grid_shadow">5</div>
        <div className="grid6 grid_shadow">6</div>
        <div className="grid7 grid_shadow">7</div>
      </div>
    </div>
  );
};

export default Bento;
