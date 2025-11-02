"use client";

import { useTouch } from "@/hooks";
import { useLayoutEffect, useRef } from "react";

export function BackgroundTouchMask() {
  const targetX = useRef(0);
  const targetY = useRef(0);

  const currentX = useRef(0);
  const currentY = useRef(0);

  const { isTouch, isTouching } = useTouch();
  useLayoutEffect(() => {
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

      const maskComponent = document.querySelector<HTMLDivElement>(".masked");

      if (!maskComponent) return null;

      maskComponent?.style.setProperty("--x", `${currentX.current}px`);
      maskComponent?.style.setProperty("--y", `${currentY.current}px`);

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
