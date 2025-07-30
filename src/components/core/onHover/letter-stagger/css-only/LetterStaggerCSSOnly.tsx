"use client";

import styles from "./texttagger.module.css";

export default function LettertaggerCSSOnly({
  text,
  delay = 0.075,
  duration = 0.25,
  easing = "cubic-bezier(0.5, 1, 0.89, 1)",
}: {
  text: string;
  delay?: number;
  duration?: number;
  easing?: string;
}) {
  return (
    <div className={`${styles.wrap} relative uppercase`}>
      <Letter
        text={text}
        origin="top"
        delay={delay}
        duration={duration}
        easing={easing}
      />
      <Letter
        text={text}
        origin="bottom"
        delay={delay}
        duration={duration}
        easing={easing}
      />
    </div>
  );
}

function Letter({
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
  return (
    <div className="absolute flex">
      {text.split("").map((letter, i) => (
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
