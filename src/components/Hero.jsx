import {motion} from "framer-motion";

import {styles} from "../styels.js";
import {ComputersCanvas} from "./canvas"

const Hero = () => {
  return (
    <section className="ralative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Max</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces, web applications using React.js and Next.js
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero