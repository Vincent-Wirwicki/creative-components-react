"use client";

import styles from "./letterStagger.module.css";

export default function LetterStaggerCSSOnly({
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
    <div className={`${styles.wrap} relative uppercase`}>
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
    </div>
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
  return (
    <div className="absolute flex">
      {letters.split("").map((letter, i) => (
        <span
          key={`${origin}-${letter}-${i}`}
          className={`${styles.letter} inline-block`}
          style={{
            transformOrigin: origin,
            transitionDuration: `${duration}s`,
            transitionDelay: `${delay * i}s`,
            transitionTimingFunction: easing,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
}
