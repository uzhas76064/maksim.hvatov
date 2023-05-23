import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styels.js";
import {services} from "../constants/index.js";
import {fadeIn,textVariant} from "../utils/motion.js";

const About = () => {
  return (
      <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

       <motion.p
           variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
           I&apos;m beginner frontend developer with experience in Typescript and JavaScript,
           and I also can work with React.js, Next.js, Node.js, I can study quickly and in short time
           I can learn technologies which can be useful for the project. I can good cooperate with clients and
           easily can find the common language with the team. I want to work with you right now!
       </motion.p>


      </>
  )
}

export default About