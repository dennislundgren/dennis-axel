"use client";

import { Body } from "@/components/atoms/Texts";
import { useEffect, useRef } from "react";

const pulsating: Keyframe[] | PropertyIndexedKeyframes = [
  {
    opacity: 1,
  },
  {
    opacity: 0.167,
  },
];

export function Loader() {
  const Dot = ({ delay }: { delay: number }) => {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (ref) {
        ref.current?.animate(pulsating, {
          duration: 666,
          delay,
          iterations: Infinity,
        });
      }
    });

    return <span ref={ref}>.</span>;
  };
  return (
    <Body>
      <Dot delay={0} />
      <Dot delay={50} />
      <Dot delay={100} />
    </Body>
  );
}
