import { motion } from "motion/react";

const transition = (Component) => {
    return () => (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <Component />
        </motion.div>
    );
}

export default transition