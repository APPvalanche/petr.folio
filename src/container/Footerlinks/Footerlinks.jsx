import React from 'react'
import { useTranslation } from "react-i18next";
import { images } from "../../constants";
import { FaFacebookSquare, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiTrustpilot, SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

import "./Footerlinks.scss";

const Footerlinks = () => {

  const { t } = useTranslation();
  
  return (
    <>
       <div className="footer_columns">
        <div className="footer-col1">
          <h4>{t("footer_col1_heading")}</h4>
          <p className="p-text">
            {t("footer_col1_p")}
          </p>
        </div>
        <div className="footer-col2">
          <h4>{t("footer_col2_heading")}</h4>
          <ul className="p-text">
            <li>
              <a
                href="https://www.linkedin.com/in/petr-zajkas-839592255"
                target="blank"
              >
                <FaLinkedinIn />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/PetrZajkasWebdesign" target="blank">
                <FaGithub />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/DesignRevolutionX/"
                target="blank"
              >
                <FaFacebookSquare />
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_col3">
          <h4>{t("footer_col3_heading")}</h4>
          <ul className="p-text">
            <li>
              <a
                href="https://www.upwork.com/freelancers/~01182b7524b0b956ac"
                target="blank"
              >
                <SiUpwork />
                Upwork
              </a>
            </li>
            <li>
              <a href="https://www.fiverr.com/petrzajkas" target="blank">
                <TbBrandFiverr />
                Fiverr
              </a>
            </li>
            <li>
              <a
                href="https://uk.trustpilot.com/review/appvalanche.com"
                target="blank"
              >
                <SiTrustpilot />
                Trustpilot
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col4">
          <h4>{t("footer_col4_heading")}</h4>
          <div className="logos">
            <span>
              <img src={images.paypal} alt="paypal logo" />
            </span>
            <span>
              <img src={images.revolut} alt="revolut bank logo" />
            </span>
            <span>
              <img src={images.bitcoin} alt="bitcoin logo" />
            </span>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
          <p className="p-text">{t("footer_copyright_text")}</p>
      </div>
    </>
  )
}

export default Footerlinks
