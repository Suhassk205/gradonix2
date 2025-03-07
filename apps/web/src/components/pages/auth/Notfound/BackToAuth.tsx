"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const BackToAuth = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/signin");
  };

  return (
    <div className="action">
      <motion.button
        className="back-to-auth-btn"
        onClick={handleClick}
        variants={{ hide: { y: 20 }, show: { y: 0 } }}
        initial="hide"
        animate="show"
      >
        SIGN IN
      </motion.button>
    </div>
  );
};

export default BackToAuth;
