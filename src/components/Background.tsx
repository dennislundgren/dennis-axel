"use client";
import useIsTouch from "@/hooks/useIsTouch";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const maskSize = 1440;

export default function Background() {
  const [isTouching, setIsTouching] = useState(false);
  const isTouch = useIsTouch();

  const handleTouchStart = () => setIsTouching(true);
  const handleTouchEnd = () => setIsTouching(false);

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(-66);

  const springX = useSpring(mouseX, { mass: 0.01 });
  const springY = useSpring(mouseY, { mass: 0.01 });

  const clipPath = useTransform(
    [springX, springY],
    ([x, y]) => `circle(66px at ${x}px ${y}px)`
  );

  const maskPosition = useTransform(
    [springX, springY],
    ([x, y]: number[]) => `${x - maskSize / 2}px ${y - maskSize / 2}px`
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) {
        mouseX.set(touch.clientX);
        mouseY.set(touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        WebkitMaskImage: `linear-gradient(to top, transparent, rgb(var(--background-alt-rgb)) 20%, rgb(var(--background-alt-rgb)) 80%, transparent 100%)`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
      }}
      className="w-full h-full absolute inset-0 z-[-1]"
    >
      <motion.div
        style={{
          opacity: isTouch ? (isTouching ? 1 : 0) : 1,
          transition: "opacity 0.5s ease-out",
          WebkitMaskPosition: maskPosition,
          WebkitMaskImage: `radial-gradient(circle ${
            maskSize / 2
          }px at center, rgb(var(--background-alt-rgb)) -0%, transparent 100%)`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: `${maskSize}px ${maskSize}px`,
        }}
        className="noise w-full h-full absolute inset-0 z-[-1]"
      />
    </motion.div>
  );
}
