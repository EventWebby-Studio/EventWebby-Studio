"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../../page.module.scss";

export default function WordScrollingSection() {
  //set the paragraph value
  const value =
    "EventWebby is a creative studio that designs custom event websites — built to tell your story, guide your guests, and simplify reservations. From a beautiful landing page and event narrative to venue details and a seamless RSVP system, we help you create a digital experience that flows effortlessly from invitation to attendance.";

  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  // useEffect(() => {
  //     scrollYProgress.on("change", e => console.log(e))
  // }, []);

  const words = value.split(" ");

  console.log("checking: " + words);

  return (
    <div className="relative bg-[#F6F1E9]">
      <div style={{ height: "30vh" }}></div>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <motion.p className={styles.paragraph} ref={element}>
          {/* map the word */}
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            console.log([start, end]);
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </motion.p>
        {/* Bottom-right text */}
        {/* <div className="absolute bottom-6 right-8 text-lg lg:text-3xl text-gray-600 pr-10">
          Built with care — 2026
        </div> */}
      </div>
      <div style={{ height: "30vh" }}></div>
    </div>
  );
}

const Word = ({ children, range, progress }) => {
  //adding framer motion to animate the word one by one
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }} className={styles.word}>
        {children}
      </motion.span>
    </span>
  );
};
