import React from "react";
import { motion } from "framer-motion";

// const opacityAnimation = {
//   initial: {
//     opacity: 0,
//     scale: 0,
//   },
//   animate: {
//     opacity: 1,
//     scale: 1,
//   },
//   exit: {
//     opacity: 0,
//     scale: 0,
//   },
// };

// const rotateAnimation = {
//   initial: {
//     rotateY: 90,
//   },
//   animate: {
//     rotateY: 0,
//   },
//   exit: {
//     rotateY: -90,
//   },
// };

const zoomAnimation = {
  initial: {
    scale: 0.7,
    opacity: 1,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0.7,
    opacity: 0,
  },
};

// const widthAnimation = {
//   initial: {
//     width: "30%",
//   },
//   animate: {
//     width: "100%",
//   },
//   exit: {
//     width: "100%",
//     x: window.innerWidth,
//   },
// };

function PageTransition({ children, className }) {
  return (
    <motion.section
      className={className}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={zoomAnimation}
    >
      {children}
    </motion.section>
  );
}

export default PageTransition;
