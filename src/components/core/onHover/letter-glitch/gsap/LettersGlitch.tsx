"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

export default function LettersGlith({
  text = "demo",
  glitchText = "°*²=+\\+=-@!'",
  className,
  duration = 0.1,
  delay = 0.075,
}: {
  text: string;
  glitchText?: string;
  className?: string;
  duration?: number;
  delay?: number;
}) {
  const specialChars = [...glitchText.split("")];
  const container = useRef(null!);
  const [isHover, setIsHover] = useState(false);

  // -------------------------------------------
  // GSAP --------------------------------------
  useGSAP(
    () => {
      if (!isHover) return;
      const nodes = container.current as HTMLElement;
      nodes.childNodes.forEach((node, i) => {
        const random = Math.floor(Math.random() * specialChars.length);
        const og = node.textContent;
        gsap.fromTo(
          node,
          { opacity: 0 },
          {
            duration: duration,
            // repeat: 2,
            opacity: 1,
            delay: i * delay,
            onStart: () => {
              gsap.set(node, {
                innerHTML: specialChars[random],
              });
            },
            onComplete: () => {
              gsap.set(node, { innerHTML: og });
            },
          }
        );
      });
    },
    { scope: container, dependencies: [isHover], revertOnUpdate: true }
  );
  // -------------------------------------------
  // GSAP --------------------------------------

  return (
    <div
      className={className}
      ref={container}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text.split("").map((letter, i) => (
        <span key={`${letter}--${i}`}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
}
