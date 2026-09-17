"use client";

import { motion, useMotionValue } from "framer-motion";
import { tapScale } from "@/lib/motion";
import BlobAccents from "@/components/BlobAccents";

export default function CtaBand() {
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  function handleMouseLeave() {
    mouseX.set(-9999);
    mouseY.set(-9999);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-16 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto inline-block"
      >
        <BlobAccents mouseX={mouseX} mouseY={mouseY} />
        <motion.h2
          animate={{ y: [0, -14, 0], rotate: [0, -0.6, 0, 0.6, 0] }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.6,
          }}
          className="relative text-6xl leading-tight sm:text-7xl lg:text-8xl"
        >
          Let&rsquo;s build
          <br />
          something human.
        </motion.h2>
      </motion.div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <motion.a
          {...tapScale}
          href="mailto:junlantracyli@gmail.com"
          className="rounded-full bg-[#ff775e] px-8 py-4 text-xl font-medium text-[#2e1512] transition-opacity hover:opacity-85"
        >
          Email me
        </motion.a>
        <motion.a
          {...tapScale}
          href="/resume.pdf"
          download
          className="rounded-full border border-current/30 px-8 py-4 text-xl font-medium text-current transition-colors hover:bg-current/10"
        >
          Download résumé ↓
        </motion.a>
      </div>
    </section>
  );
}
