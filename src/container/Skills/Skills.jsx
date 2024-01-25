import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

import "./Skills.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const Skills = () => {
  const { t } = useTranslation();
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const isMobile = useMediaQuery({ query: "(max-width:700px)" });

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => setExperiences(data));
    client.fetch(skillsQuery).then((data) => setSkills(data));
  }, []);

  return (
    <>
      <h2 className="head-text">{t("skills_heading")}</h2>
      <div className="div-bar" />

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
        {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.25 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex neumorphism__white"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <motion.div className="app__skills-exp-works">
              {experience.works?.map((work) => (
                  <div className="app__skills-tooltip" key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.25 }}
                      data-tooltip-id={work.name}
                      className="app__skills-exp-work"
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work._key}
                      place={isMobile ? "top" : "right"}
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
