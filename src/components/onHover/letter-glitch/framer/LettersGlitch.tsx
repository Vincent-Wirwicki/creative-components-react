"use client";

import { useAnimate } from "motion/react";
import { useEffect } from "react";
// import useLetterGlitch from "./useLetterGlitch";

export default function LettersGlith() {
  const text = "glitch";
  //   const interval = 80;
  //   const { displayText, animate, stopAnimate } = useLetterGlitch(text, interval);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate("span", { opacity: 0.5 });
  });

  return (
    <div
      className={""}
      ref={scope}
      //   onMouseEnter={animate}
      //   onMouseLeave={stopAnimate}
    >
      {text.split("").map((t, i) => (
        <span key={`${t}--${i}`}>{t}</span>
      ))}
    </div>
  );
}
