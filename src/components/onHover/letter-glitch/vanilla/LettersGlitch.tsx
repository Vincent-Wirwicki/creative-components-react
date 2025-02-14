"use client";

import useLetterGlitch from "./useLetterGlitch";

export default function LettersGlith({
  text,
  className,
  interval = 80,
}: {
  text: string;
  className?: string;
  interval?: number;
}) {
  const { displayText, animate, stopAnimate } = useLetterGlitch(text, interval);

  return (
    <div
      className={className}
      onMouseEnter={animate}
      onMouseLeave={stopAnimate}
    >
      {displayText}
    </div>
  );
}
