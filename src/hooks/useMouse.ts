"use client";

import { useMotionValue } from "motion/react";
import { useEffect } from "react";

/** _client component_ */
export default function useMouse() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handlePointer = (x: number, y: number) => {
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseMove = (event: MouseEvent) => {
      handlePointer(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) handlePointer(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mouseX, mouseY]);

  return { mouseX, mouseY };
}
