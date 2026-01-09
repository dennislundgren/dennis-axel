"use client";
import A from "@/components/organisms/Logo/a";
import D from "@/components/organisms/Logo/d";
import E from "@/components/organisms/Logo/e";
import I from "@/components/organisms/Logo/i";
import L from "@/components/organisms/Logo/l";
import N from "@/components/organisms/Logo/n";
import S from "@/components/organisms/Logo/s";
import X from "@/components/organisms/Logo/x";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Logo() {
  return <DennisAxel size={12} />;
}

function DennisAxel({ size }: { size: number }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .to(".logo-letter", { x: -10, opacity: 0 })
        .to(".logo-letter", {
          x: 0,
          stagger: 0.083,
          ease: "power1.out",
          opacity: 1,
          duration: 0.167,
        });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="flex gap-1">
      <div className="flex gap-0.5 items-end">
        <D width={size} height={size} className="logo-letter opacity-0" />
        <E width={size} height={size} className="logo-letter opacity-0" />
        <N width={size} height={size} className="logo-letter opacity-0" />
        <N width={size} height={size} className="logo-letter opacity-0" />
        <I width={size} height={size} className="logo-letter opacity-0" />
        <S width={size} height={size} className="logo-letter opacity-0" />
      </div>
      <div className="flex gap-0.5 items-end">
        <A width={size} height={size} className="logo-letter opacity-0" />
        <X width={size} height={size} className="logo-letter opacity-0" />
        <E width={size} height={size} className="logo-letter opacity-0" />
        <L width={size} height={size} className="logo-letter opacity-0" />
      </div>
    </div>
  );
}
