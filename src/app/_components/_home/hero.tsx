"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0]);

  return (
    <motion.div
      className="space-y-20 h-full flex flex-col justify-center items-center -mt-[7.1rem]"
      style={{ scale, opacity }}
    >
      <div className="flex items-center gap-20">
        <h1 className="text-2xl font-thin">💡INSIGHT</h1>
        <span className="text-4xl">&bull;</span>
        <h1 className="text-2xl font-thin">🧠 INNOVATION</h1>
        <span className="text-4xl">&bull;</span>
        <h1 className="text-2xl font-thin">🌈 IMPACT</h1>
      </div>
      <h1 className="text-center font-thin w-4/5 text-8xl leading-[100px]">
        Where Design Dreams <br />
        Meet <span className="text-[#00e2c5]">UI UX Brilliance</span>
      </h1>
    </motion.div>
  );
}
