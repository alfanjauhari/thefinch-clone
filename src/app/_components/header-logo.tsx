"use client";

import { Icon } from "@/icons/icon";
import { Logo } from "@/icons/logo";
import {
  motion,
  useAnimate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

export function HeaderLogo() {
  const { scrollY } = useScroll();

  const [logoRef, animateLogo] = useAnimate();
  const [iconRef, animateIcon] = useAnimate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 30;

    animateLogo(logoRef.current, {
      opacity: scrolled ? 0 : 1,
    });

    animateIcon(iconRef.current, {
      top: scrolled ? "50%" : 0,
      y: scrolled ? "-50%" : 0,
      left: scrolled ? 0 : "173px",
      height: scrolled ? "45px" : "30px",
      width: scrolled ? "45px" : "30px",
    });
  });

  return (
    <a href="/" className="relative">
      <Logo className="h-[70px] w-auto" ref={logoRef} />
      <Icon
        className="h-auto w-[30px] text-base left-[173px] absolute opacity-100 translate-y-0"
        ref={iconRef}
      />
    </a>
  );
}
