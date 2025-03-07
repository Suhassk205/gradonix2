"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { FaClock } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoBook } from "react-icons/io5";

export const InnovationTitle = () => {
  return (
    <>
      <h2>Our Innovation: Teacher-Like AI</h2>
    </>
  );
};

export const InnovationDesc = ({ children }: { children: string }) => {
  return (
    <>
      <p>{children}</p>
    </>
  );
};
export const CardList = () => {
  return (
    <>
      <CardView
        index={1}
        icon={
          <div>
            <FaClock />
          </div>
        }
        title={<div className="title">70%</div>}
        subtitle="Time Saved"
        description="Significantly cut down grading time with our AI-powered assistance."
      />
      <CardView
        index={2}
        icon={
          <div>
            <IoIosCheckmarkCircle />
          </div>
        }
        title={<div className="title">90%</div>}
        subtitle="Accuracy"
        description="Consistent and reliable grading results."
      />
      <CardView
        index={3}
        icon={
          <div>
            <IoBook />
          </div>
        }
        title={<div className="title">24/7 Support</div>}
        subtitle="Always Available"
        description="Round-the-clock assistance whenever you need it."
      />
    </>
  );
};

const CardView = ({
  index,
  title,
  subtitle,
  description,
  icon,
}: {
  index: number;
  title: ReactNode;
  subtitle: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <>
      <motion.div
        className="innovation-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.128, type: "spring" }}
      >
        {icon}
        {title}
        <h5>{subtitle}</h5>
        <p>{description}</p>
      </motion.div>
    </>
  );
};
