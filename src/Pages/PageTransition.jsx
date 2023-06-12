import React from "react";
import { motion } from "framer-motion";

const opacityAnimation = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const rotateAnimation = {
  initial: {
    rotateY: 90,
  },
  animate: {
    rotateY: 0,
  },
  exit: {
    rotateY: -90,
  },
};

function PageTransition({ children, className }) {
  return (
    <motion.section
      className={className}
      transition={{
        ease: "easeInOut",
        duration: 0.4,
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={rotateAnimation}
    >
      {children}
    </motion.section>
  );
}

export default PageTransition;
