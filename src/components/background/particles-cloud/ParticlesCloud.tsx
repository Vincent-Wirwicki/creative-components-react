"use client";

import { useAnimationFrame } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ParticlesCloud() {
  const COUNT = 50;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const bounds = useRef({ w: 0, h: 0 });
  const [size, setSize] = useState({ w: 0, h: 0 });

  // init canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    ctx.current = canvas.getContext("2d");
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      bounds.current = { w: canvas.width, h: canvas.height };
      setSize({ w: canvas.width, h: canvas.height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const particles = useMemo(() => {
    if (!size.w || !size.h) return;
    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    const particles = new Float32Array(COUNT * 4);
    for (let i = 0; i < COUNT; i++) {
      const x = random(1, size.w);
      const y = random(1, size.h);
      const speedX = random(-0.5, 0.5);
      const speedY = random(-0.5, 0.5);
      particles.set([x, y, speedX, speedY], i * 4);
    }
    console.log("memo");
    return particles;
  }, [size]);

  useAnimationFrame(() => {
    if (ctx.current && particles) {
      const canvas = bounds.current;
      ctx.current.fillStyle = "red";
      ctx.current.clearRect(0, 0, canvas.w, canvas.h);
      for (let i = 0; i < COUNT; i++) {
        const stride = i * 4;
        let x = particles[stride];
        let y = particles[stride + 1];
        let sx = particles[stride + 2];
        let sy = particles[stride + 3];

        x += sx;
        y += sy;
        // Bounce off edges
        if (x < 1 || x > canvas.w - 1) sx *= -1;
        if (y < 1 || y > canvas.h - 1) sy *= -1;

        particles[stride] = x;
        particles[stride + 1] = y;
        particles[stride + 2] = sx;
        particles[stride + 3] = sy;

        ctx.current.beginPath();
        ctx.current.arc(x, y, 1, 0, Math.PI * 2);
        ctx.current.fill();
      }
    }
  });

  return (
    <div className="fixed inset-0">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
}
