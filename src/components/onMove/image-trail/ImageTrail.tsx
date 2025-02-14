"use client";

import { useAnimate } from "motion/react";
import Image from "next/image";
import { MouseEvent, useRef } from "react";

export default function ImageTrail({
  urls,
  duration = 0.5,
  threshold = 80,
  zIndex = 1,
  height,
  width,
}: {
  urls: string[];
  duration?: number;
  threshold: number;
  zIndex?: number;
  height: number;
  width: number;
}) {
  const [scope, animate] = useAnimate();
  const mouseRef = useRef({
    curr: { x: 0, y: 0 },
    prev: { x: 0, y: 0 },
  });

  const indexRef = useRef(0);
  const currentZ = useRef(zIndex);
  const maxZ = (zIndex + 1) * 5;

  const onMove = (e: MouseEvent) => {
    const { curr, prev } = mouseRef.current;
    curr.x = e.clientX;
    curr.y = e.clientY;
    const dist = Math.hypot(curr.x - prev.x, curr.y - prev.y);
    if (dist > threshold) {
      indexRef.current = (indexRef.current + 1) % urls.length;
      prev.x = e.clientX;
      prev.y = e.clientY;
      showNext(indexRef.current);
    }
  };

  const showNext = (active: number) => {
    const node = scope.current as HTMLElement;
    const image = node.children[active] as HTMLElement;
    const offX = image.offsetWidth * 0.5;
    const offY = image.offsetHeight * 0.5;
    const { prev, curr } = mouseRef.current;
    currentZ.current += 1;
    if (currentZ.current > maxZ) currentZ.current = zIndex;
    animate(
      image,
      {
        opacity: [0.85, 1, 1, 0],
        scale: [0.95, 1, 1, 0.5],
        zIndex: currentZ.current,
        x: [prev.x - offX, curr.x - offY],
        y: [prev.y - offY, curr.y - offY],
      },
      {
        duration: duration,
        ease: "easeOut",
      }
    );
  };

  return (
    <div
      ref={scope}
      className="absolute top-0 left-0 w-screen h-screen"
      onMouseMove={onMove}
    >
      {urls.map((url, i) => (
        <div
          key={`${url}-${i}`}
          className="fixed pointer-events-none opacity-0"
          style={{ height: height, width: width }}
        >
          <Image
            src={url}
            alt={url}
            fill
            sizes={`${height > width ? height : width}px`}
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
      ))}
    </div>
  );
}
