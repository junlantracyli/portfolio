"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, type MotionValue } from "framer-motion";

const springConfig = { stiffness: 150, damping: 15, mass: 0.8 };

function MagneticBlob({
  wrapperClassName,
  wrapperStyle,
  path,
  colorClassName,
  strength,
  mouseX,
  mouseY,
}: {
  wrapperClassName: string;
  wrapperStyle?: React.CSSProperties;
  path: string;
  colorClassName: string;
  strength: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const radius = 260;

    function update() {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;
      const dx = mouseX.get() - originX;
      const dy = mouseY.get() - originY;
      const distance = Math.hypot(dx, dy);

      if (distance > radius) {
        x.set(0);
        y.set(0);
        return;
      }

      const pull = 1 - distance / radius;
      x.set(dx * strength * pull);
      y.set(dy * strength * pull);
    }

    const unsubX = mouseX.on("change", update);
    const unsubY = mouseY.on("change", update);
    return () => {
      unsubX();
      unsubY();
    };
  }, [mouseX, mouseY, strength, x, y]);

  return (
    <div ref={wrapperRef} className={`animate-blob-float ${wrapperClassName}`} style={wrapperStyle}>
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ x: springX, y: springY }}
        viewBox="0 0 200 200"
        className={`h-full w-full ${colorClassName}`}
      >
        <path fill="currentColor" d={path} />
      </motion.svg>
    </div>
  );
}

export default function BlobAccents({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <MagneticBlob
        mouseX={mouseX}
        mouseY={mouseY}
        strength={0.4}
        path="M100,20 C130,15 165,30 175,65 C185,100 175,120 190,150 C200,175 175,190 145,185 C120,180 110,195 80,190 C50,185 30,175 20,145 C10,115 25,110 15,80 C5,50 30,35 55,30 C75,25 80,25 100,20 Z"
        colorClassName="text-[#fcbe6a]"
        wrapperClassName="absolute -left-10 -top-10 h-28 w-28 sm:-left-14 sm:-top-14 sm:h-36 sm:w-36"
        wrapperStyle={{ animationDelay: "0.5s" }}
      />
      <MagneticBlob
        mouseX={mouseX}
        mouseY={mouseY}
        strength={0.35}
        path="M60,10 C90,0 130,10 150,35 C175,65 195,80 185,110 C175,140 175,175 140,185 C110,195 100,170 70,180 C40,190 10,180 10,145 C10,115 30,110 20,80 C10,50 30,20 60,10 Z"
        colorClassName="text-[#ff775e]"
        wrapperClassName="absolute -bottom-8 -right-6 h-24 w-24 sm:-bottom-10 sm:-right-8 sm:h-32 sm:w-32"
        wrapperStyle={{ animationDelay: "2s" }}
      />
      <MagneticBlob
        mouseX={mouseX}
        mouseY={mouseY}
        strength={0.45}
        path="M70,15 C100,5 140,20 160,50 C180,80 190,110 165,140 C145,165 155,195 120,195 C90,195 85,170 55,175 C25,180 5,155 10,120 C15,90 -5,70 15,45 C35,20 45,25 70,15 Z"
        colorClassName="text-[#f97272]"
        wrapperClassName="absolute -right-8 top-6 hidden h-16 w-16 sm:block sm:h-20 sm:w-20"
        wrapperStyle={{ animationDelay: "4s" }}
      />
    </div>
  );
}
