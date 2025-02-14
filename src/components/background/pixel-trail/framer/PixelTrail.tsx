"use client";

import { useEffect, useRef, useState } from "react";
// import { motion } from "motion/react";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";

export default function PixelTrail({ cols }: { cols: number }) {
  const gridEl = useRef<HTMLDivElement>(null!);
  const [grid, setGrid] = useState(0);

  useEffect(() => {
    const updateGrid = () => {
      if (!gridEl.current) return;
      const { height, width } = gridEl.current.getBoundingClientRect();
      const size = width / cols; // Square size
      const rows = Math.floor(height / size); // Ensure full squares
      setGrid(rows * cols);
    };
    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, [cols]);

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={gridEl}
        className={"grid absolute top-0 left-0 w-screen h-screen"}
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {Array.from({ length: grid }, (_, i) => (
          <m.div
            initial={{ opacity: 0, transition: { delay: 0.2 } }}
            whileHover={{
              opacity: [1, 0],
              transition: { duration: 0.75, ease: "backInOut" },
            }}
            key={i}
            className="w-full h-full p-2 bg-neutral-200"
          />
        ))}
      </div>
    </LazyMotion>
  );
}
//   opacity-0 transition-opacity transition-300 ease-in transition-discrete
//   hover:opacity-100 hover:transition-300 hover:ease-out hover:delay-100 hover:transition-discrete
