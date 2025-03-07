"use client";
import React, { useEffect, useState } from "react";
import "../../../styles/home/page.css";

const BenefitsSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardsContainer = document.querySelector(".cards-container");
      if (!cardsContainer) return;

      const containerRect = cardsContainer.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.5; // Trigger when the container is halfway in view

      if (
        containerRect.top <= triggerPoint &&
        containerRect.bottom >= triggerPoint
      ) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="benefits-wrapper">
      <h1 className="benefits-heading">Transformative Benefits</h1>
      <div className={`cards-container ${isScrolled ? "scrolled" : ""}`}>
        {/* Time Management Card */}
        <div className="card">
          <div className="card-face card-back">
            <div className="card-icon">⏳</div>
          </div>
          <div className="card-face card-front">
            <div className="card-icon">⏳</div>
            <h3 className="card-title">Time Management</h3>
            <p className="card-text">
              Reduce grading time by 70% with automated workflows.
            </p>
          </div>
        </div>

        {/* Accuracy Improvement Card */}
        <div className="card">
          <div className="card-face card-back">
            <div className="card-icon">🎯</div>
          </div>
          <div className="card-face card-front">
            <div className="card-icon">🎯</div>
            <h3 className="card-title">Accuracy Improvement</h3>
            <p className="card-text">
              Achieve consistent evaluations with reduced human error.
            </p>
          </div>
        </div>

        {/* Student Success Card */}
        <div className="card">
          <div className="card-face card-back">
            <div className="card-icon">🏆</div>
          </div>
          <div className="card-face card-front">
            <div className="card-icon">🏆</div>
            <h3 className="card-title">Student Success</h3>
            <p className="card-text">
              Provide detailed feedback and track performance effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
