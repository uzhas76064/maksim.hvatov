import {motion} from "framer-motion";
import {styles} from "../styels.js";
import {staggerContainer} from "../utils/motion.js";

const SectionWrapper = (Component, idName) => function HOC () {
    return (
        <motion.section>
            <Component/>
        </motion.section>
    )
}
export default SectionWrapper;