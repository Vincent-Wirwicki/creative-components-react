import { useRef, useState } from "react";

/**
 * A hook that return your glitch effect .
 * 
 * @param text - your text.
 * @param interval - time to next letter in ms.
 * @returns An object containing:
 *  - `displayText`: The text to display.
 *  - `animate`:  start the animation onMouseEnter.
 *  - `stopAnimate`: stop the animation onMouseLeave.
 */
export default function useLetterGlitch(text: string, interval = 80) {
  const [displayText, setDisplayText] = useState(text);
  const specialChar = "=}/°*²^=+\\+=-@!'";
  const specialChars = [...specialChar.split("")];
  const letters = Array.from(text);
  const rafRef = useRef(0);
  let currentLetter = 0;
  let last = performance.now();

  //   alternative to animate with a total duration base on text length
  //   const duration = 500;
  //   const toNextLetter = duration / letters.length;

  const updateLetters = (currentLetter: number) => {
    const temp: string[] = [];
    for (let i = 0; i < letters.length; i++) {
      if (currentLetter > i) {
        temp.push(letters[i]);
      } else {
        temp.push(specialChars[i]);
      }
    }
    setDisplayText(temp.join(""));
  };

  const animate = () => {
    const current = performance.now();
    if (current - last >= interval) {
      updateLetters(currentLetter);
      currentLetter++;
      last = current;
    }
    rafRef.current = requestAnimationFrame(animate);
    if (currentLetter > letters.length) stopAnimate();
  };

  const stopAnimate = () => {
    setDisplayText(text);
    cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
  };

  return { displayText, animate, stopAnimate };
}
