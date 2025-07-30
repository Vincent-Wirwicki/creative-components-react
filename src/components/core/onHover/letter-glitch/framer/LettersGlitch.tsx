"use client";

import { useAnimate } from "motion/react";
import { useEffect, useState } from "react";
// import useLetterGlitch from "./useLetterGlitch";

export default function LettersGlith() {
  const text = "glitch";
  const og = text.split("");
  const glitchText = "°*²=+\\+=-@!'";
  const specialChars = [...glitchText.split("")];
  //   const interval = 80;
  //   const { displayText, animate, stopAnimate } = useLetterGlitch(text, interval);
  const [scope, animate] = useAnimate();
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    if (!isHover) return;
    const random = Math.floor(Math.random() * specialChars.length);
    const nodes = scope.current as HTMLElement;
    nodes.childNodes.forEach((n, i) => {
      const node = n as HTMLElement;
      animate(
        node,
        { opacity: [0, 1] },
        {
          duration: 1,
          delay: i* 0.1,
          onUpdate: () => {
            node.innerHTML = specialChars[random];
          },
          onComplete: () => {
            node.innerHTML = og[i];
          },
        }
      );
    });
  }, [isHover]);

  return (
    <div
      className={"flex"}
      ref={scope}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text.split("").map((t, i) => (
        <span key={`${t}--${i}`}>{t}</span>
      ))}
    </div>
  );
}
