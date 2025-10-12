"use client";

import { Body } from "@/components/UI/Texts";
import { useEffect, useRef } from "react";

const pulsating: Keyframe[] | PropertyIndexedKeyframes = [
  {
    opacity: 1,
  },
  {
    opacity: 0.167,
  },
];

export default function Loader() {
  const Dot = ({ delay }: { delay: number }) => {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (ref) {
        ref.current?.animate(pulsating, {
          duration: 1000,
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
      <Dot delay={100} />
      <Dot delay={200} />
    </Body>
  );
}
