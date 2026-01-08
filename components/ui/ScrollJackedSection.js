"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../../page.module.scss";

export default function ScrollJackedSection() {
  // Paragraph text
  const text =
    "EventWebby is a creative studio that designs custom event websites — built to tell your story, guide your guests, and simplify reservations. From a beautiful landing page and event narrative to venue details and a seamless RSVP system, we help you create a digital experience that flows effortlessly from invitation to attendance.";

  const words = text.split(" ");

  // Ref for scroll container
  const containerRef = useRef(null);

  // Scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // full section scroll
  });

  return (
    <section className="relative bg-[#F6F1E9]">
      {/* Spacer before section */}
      {/* <div className="h-[10dvh]" /> */}

      {/* Sticky / scroll-jacked section */}
      <div ref={containerRef} className="relative h-[220dvh] md:h-[200dvh]">
        <div className="sticky top-0 min-h-[100dvh] flex items-center">
          <div className="mx-auto max-w-2xl lg:max-w-7xl px-6">
            <motion.p className={styles.paragraph}>
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;

                return (
                  <Word
                    key={i}
                    range={[start, end]}
                    progress={scrollYProgress}
                  >
                    {word}
                  </Word>
                );
              })}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Spacer after section */}
      {/* <div className="h-[10dvh]" /> */}
    </section>
  );
}

// Word component: base visible + highlight on scroll
const Word = ({ children, range, progress }) => {
  // Highlight opacity
  const highlightOpacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.word}>
      {/* Base text (always visible, unhighlighted) */}
      <span className={styles.shadow}>{children}</span>

      {/* Highlight overlay */}
      <motion.span style={{ opacity: highlightOpacity }} className={styles.word}>
        {children}
      </motion.span>
    </span>
  );
};
