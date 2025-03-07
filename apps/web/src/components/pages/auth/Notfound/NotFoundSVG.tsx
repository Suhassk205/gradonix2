"use client";

import { motion } from "motion/react";

const NotFoundSVG = () => {
  return (
    <motion.svg
      viewBox="0 0 500 300"
      className="notfound-svg"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 2, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.circle
        cx="250"
        cy="150"
        r="120"
        className="pulse-circle"
        animate={{ scale: [10, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.rect
        x="150"
        y="80"
        width="200"
        height="140"
        className="frame-rect"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, type: "spring" }}
      />
      <circle cx="150" cy="80" r="25" className="circle-purple" />
      <circle cx="350" cy="220" r="20" className="circle-blue" />
      <motion.path
        d="M400 100 L420 80 L440 100 L420 120 Z"
        className="floating-shape"
        animate={{ y: [-5, 50, -5] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M80 180 L100 160 L120 180 L100 200 Z"
        className="floating-shape purple"
        animate={{ y: [-5, 50, -5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
      />
      <path d="M120 120 C 140 100, 160 140, 180 120" className="line-blue" />
      <path d="M320 180 C 340 160, 360 200, 380 180" className="line-purple" />
      <circle cx="100" cy="100" r="4" className="dot-blue" />
      <circle cx="400" cy="200" r="4" className="dot-purple" />
      <circle cx="250" cy="50" r="4" className="dot-dark" />
      <circle cx="250" cy="250" r="4" className="dot-blue" />
    </motion.svg>
  );
};

export default NotFoundSVG;
