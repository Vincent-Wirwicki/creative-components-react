"use client";

import { motion, type Variants } from "framer-motion";

export default function LetterStaggerFramer({
  letters,
  delay = 0.075,
  duration = 0.25,
  easing = "cubic-bezier(0.5, 1, 0.89, 1)",
}: {
  letters: string;
  delay?: number;
  duration?: number;
  easing?: string;
}) {
  return (
    <motion.div
      className="relative h-16 w-52 border cursor-pointer text-4xl uppercase"
      initial="initial"
      whileHover="hover"
    >
      <Letters
        letters={letters}
        origin="top"
        delay={delay}
        duration={duration}
        easing={easing}
      />
      <Letters
        letters={letters}
        origin="bottom"
        delay={delay}
        duration={duration}
        easing={easing}
      />
    </motion.div>
  );
}

function Letters({
  letters,
  origin,
  delay,
  duration,
  easing,
}: {
  letters: string;
  origin: "top" | "bottom";
  delay: number;
  duration: number;
  easing: string;
}) {
  // to add more fancy anim here
  const letterVariants: Variants = {
    initial: {
      rotateX: origin === "top" ? 0 : 90,
    },
    hover: {
      rotateX: origin === "top" ? -90 : 0,
    },
  };

  return (
    <div className="absolute">
      {letters.split("").map((letter, i) => (
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
          {letter === " " ? "\u00A0" : letter}{" "}
        </motion.span>
      ))}
    </div>
  );
}
