import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import {styles} from "../styels.js";
import {experiences} from "../constants/index.js";
import {SectionWrapper} from "../hoc/index.js";
import {textVariant} from "../utils/motion.js";
import React from "react";

// eslint-disable-next-line react/prop-types
const ExperienceCard = ({experience}) => {
  return (
      <VerticalTimelineElement
          contentStyle={{background: "#1d1836", color: "#fff"}}
          contentArrowStye={{borderRight: "7px solid #232631"}}
          date={experience.date}
          iconStyle={{background: experience.iconBg}}
          icon={
            <div>
              <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain"/>
            </div>
          }>
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.date}
          </h3>
        </div>
      </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I&apos;ve done so far</p>
        <h2 className={styles.sectionHeadText}>Work experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return (<ExperienceCard key={index} experience={experience}/>)
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience