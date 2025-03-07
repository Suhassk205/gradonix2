"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export const BtnGetStarted = () => {
  const router = useRouter();
  return (
    <>
      <motion.button
        className="btn-cta"
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.2}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            delay: 1,
            duration: 1,
          },
        }}
        whileHover={{ y: -2 }}
        whileDrag={{
          scale: 1.1,
        }}
        onClick={() => router.push("/beta")}
      >
        Try Beta
      </motion.button>
    </>
  );
};

export const HeroTitle = ({ children }: { children: string }) => {
  return (
    <>
      <motion.h1
        initial={{ backgroundPositionY: "100%", y: 32, opacity: 0 }}
        animate={{ backgroundPositionY: "80%", y: 0, opacity: 1 }}
        transition={{
          duration: 0.256,
          repeatType: "reverse",
        }}
      >
        {children}
      </motion.h1>
    </>
  );
};

export const HeroDescription = ({ children }: { children: string }) => {
  return (
    <>
      <p className="description">
        {children.split("").map((letter, index) => {
          return letter === " " ? (
            <span key={index}> </span>
          ) : (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.256, delay: index * 0.01 }}
            >
              {letter}
            </motion.span>
          );
        })}
      </p>
    </>
  );
};
