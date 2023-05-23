import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styels.js";
import {services} from "../constants/index.js";
import {fadeIn,textVariant} from "../utils/motion.js";


const ServiceCard = ({title, index, icon}) => {
    const tiltOptions = {
        max: 45,
        scale: 1,
        speed: 450
    }

    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
                        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">

                <div options={tiltOptions} className="bg-tertiary rounde-[20px] py-5 px-12
                                                        min-h-[280px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>

            </motion.div>
        </Tilt>
    )
}
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

          <div className="mt-20 flex flex-wrap gap-10">
              {
                  services.map((service ,index) => {
                      return (
                          <ServiceCard key={service.title} index={index} {...service}/>
                      )
                  })
              }
          </div>

      </>
  )
}

export default About