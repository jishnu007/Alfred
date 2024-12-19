"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaHeadset, FaUserTie, FaShieldAlt } from "react-icons/fa"; // Icons for cards
import { FaArrowRight } from "react-icons/fa"; // Button icon
import throttle from "lodash/throttle";
import styles from "./page.module.scss";
import Link from "next/link";

const cardData = [
  {
    icon: <FaHeadset className={styles.cardIcon} />,
    title: "Always Available",
    description: "Connect with understanding listeners any time, day or night",
  },
  {
    icon: <FaUserTie className={styles.cardIcon} />,
    title: "Expert Support",
    description: "Access to trained professionals who genuinely care",
  },
  {
    icon: <FaShieldAlt className={styles.cardIcon} />,
    title: "Safe Space",
    description: "Your privacy and security are our top priorities",
  },
];

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Optimized scroll event handler with throttling
  const handleScroll = useCallback(
    throttle(() => {
      const element = document.getElementById("second-viewport");
      if (element) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const elementPosition = element.offsetTop;
        setIsVisible(scrollPosition > elementPosition);
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={styles.landingPage}>
      {/* First Viewport */}
      <div className={styles.firstViewport}>
        <div className={styles.content}>
          <h1 className={styles.title}>3am Friend</h1>
          <p className={styles.subtitle}>
            Your companion whenever you need one
          </p>
          <div className={styles.buttons}>
            <Link className={styles.primaryButton} href={"/chat"}>
              Give it a try, It&apos;s free
              <FaArrowRight className={styles.icon} />
            </Link>
            <Link className={styles.secondaryButton} href={"/auth/login"}>
              Sign In to enjoy all benefits
            </Link>
          </div>
        </div>
      </div>

      {/* Second Viewport */}
      <motion.div
        id="second-viewport"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className={styles.secondViewport}
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}>Why Choose 3am Friend?</h2>
            <p className={styles.sectionSubtitle}>
              Because everyone needs someone to talk to
            </p>
          </div>
          <div className={styles.cards}>
            {cardData.map(({ icon, title, description }, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardIconWrapper}>{icon}</div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
