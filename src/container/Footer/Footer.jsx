import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { FaFacebookSquare, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiTrustpilot, SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">{t("footer_heading")}</h2>
      <div className="div-bar" />

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:petrzajkas@gmail.com" className="p-text">
            petrzajkas@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel: +44 (0)7754593800" className="p-text">
            +44 (0)7754593800
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex neumorphism__white">
            <input
              className="p-text"
              type="text"
              placeholder={t("footer_your_name")}
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex neumorphism__white">
            <input
              className="p-text"
              type="email"
              placeholder={t("footer_your_email")}
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text neumorphism__white"
              placeholder={t("footer_your_message")}
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? `${t("footer_sent_button")}` : ""}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">{t("footer_message_sent")}</h3>
        </div>
      )}
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
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
