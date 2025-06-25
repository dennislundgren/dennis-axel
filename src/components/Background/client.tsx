"use client";

import useTouch from "@/hooks/useTouch";
import { useEffect, useRef } from "react";

/** _client component_ */
export default function BackgroundTouchMask() {
  const targetX = useRef(0);
  const targetY = useRef(0);

  const currentX = useRef(0);
  const currentY = useRef(0);

  const { isTouch, isTouching } = useTouch();
  useEffect(() => {
    const handlePointerMovie = (e: PointerEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;
    };

    window.addEventListener("pointermove", handlePointerMovie);

    let animationFrameId: number;

    const lerp = (start: number, end: number, amt: number) => {
      return start + (end - start) * amt;
    };

    const animate = () => {
      currentX.current = lerp(currentX.current, targetX.current, 0.1);
      currentY.current = lerp(currentY.current, targetY.current, 0.1);

      document.documentElement.style.setProperty(
        "--x",
        `${currentX.current}px`
      );
      document.documentElement.style.setProperty(
        "--y",
        `${currentY.current}px`
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("pointermove", handlePointerMovie);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <div
      style={{
        opacity: isTouch ? (isTouching ? 1 : 0) : 1,
      }}
      className="noise w-full h-full absolute inset-0 z-[-1] masked"
    />
  );
}
