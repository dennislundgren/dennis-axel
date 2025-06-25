"use client";

import useMouse from "@/hooks/useMouse";
import useTouch from "@/hooks/useTouch";
import { motion, useSpring, useTransform } from "motion/react";

const maskSize = 1440;

export default function BackgroundTouchMask() {
  const { isTouch, isTouching } = useTouch();
  const { mouseX, mouseY } = useMouse();

  const springX = useSpring(mouseX, { mass: 0.01 });
  const springY = useSpring(mouseY, { mass: 0.01 });

  const maskPosition = useTransform(
    [springX, springY],
    ([x, y]: number[]) => `${x - maskSize / 2}px ${y - maskSize / 2}px`
  );

  return (
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
  );
}
