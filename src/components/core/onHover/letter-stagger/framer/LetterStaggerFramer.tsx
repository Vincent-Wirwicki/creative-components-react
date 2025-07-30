"use client";

import { motion, type Variants } from "framer-motion";

export default function LetterStaggerFramer({
  text = "stagger",
  delay = 0.05,
  duration = 0.3,
  easing = "cubic-bezier(0.5, 1, 0.89, 1)",
}: {
  text: string;
  delay?: number;
  duration?: number;
  easing?: string;
}) {
  return (
    <motion.div
      className="relative uppercase"
      initial="initial"
      whileHover="hover"
    >
      <Letters
        text={text}
        origin="top"
        delay={delay}
        duration={duration}
        easing={easing}
      />
      <Letters
        text={text}
        origin="bottom"
        delay={delay}
        duration={duration}
        easing={easing}
      />
    </motion.div>
  );
}

function Letters({
  text,
  origin,
  delay,
  duration,
  easing,
}: {
  text: string;
  origin: "top" | "bottom";
  delay: number;
  duration: number;
  easing: string;
}) {
  // you can add more fancy anim here
  const letterVariants: Variants = {
    initial: {
      rotateX: origin === "top" ? 0 : 90,
    },
    hover: {
      rotateX: origin === "top" ? -90 : 0,
    },
  };

  return (
    <div className="absolute flex">
      {text.split("").map((letter, i) => (
        <motion.span
          key={`${origin}-${letter}-${i}`}
          className="inline-block"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: origin,
          }}
          variants={letterVariants}
          transition={{
            duration: duration,
            delay: i * delay,
            easings: easing,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}
