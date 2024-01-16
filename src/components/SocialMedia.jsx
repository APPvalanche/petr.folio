import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div className="neumorphism__white">
        <a href="https://www.facebook.com/DesignRevolutionX/" target="blank">
          <FaFacebookF />
        </a>
      </div>
      <div className="neumorphism__white">
        <a
          href="https://www.linkedin.com/in/petr-zajkas-839592255"
          target="blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="neumorphism__white">
        <a href="https://github.com/PetrZajkasWebdesign" target="blank">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
