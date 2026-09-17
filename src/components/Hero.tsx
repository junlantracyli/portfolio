"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { tapScale } from "@/lib/motion";

const cyclingPhrases = ["AI TOOLS", "DIGITAL PRODUCTS", "CREATIVE SYSTEMS"];

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function CyclingWord() {
  const [index, setIndex] = useState(0);
  const phrase = cyclingPhrases[index];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % cyclingPhrases.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative block h-[1.05em] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrase}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          onClick={() =>
            setIndex((i) => (i + 1) % cyclingPhrases.length)
          }
          className="absolute left-0 top-0 block w-full cursor-pointer whitespace-nowrap text-[#ff775e]"
        >
          {phrase}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1.7fr_1fr]"
    >
      <div className="flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-6">
          <h1
            className="flex flex-col leading-[1.05]"
            style={{ fontSize: "clamp(2.3rem, 5.2vw, 5.6rem)" }}
          >
            <span>I build</span>
            <CyclingWord />
            <span>that feel human</span>
          </h1>

          <p className="max-w-2xl text-2xl leading-relaxed text-current/70 sm:text-3xl">
            I bridge technical constraints and user needs, using code as a
            creative medium to build digital experiences that are
            distinctly human.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <motion.a
            {...tapScale}
            href="https://www.linkedin.com/in/junlantracyli"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#ff775e] px-10 py-5 text-2xl font-medium text-[#2e1512] transition-opacity hover:opacity-85"
          >
            <LinkedInIcon />
            LinkedIn
          </motion.a>
          <motion.a
            {...tapScale}
            href="#work"
            className="rounded-full border border-current/15 px-10 py-5 text-2xl text-current/75 transition-colors hover:text-current"
          >
            See the work
          </motion.a>
        </div>
      </div>

      <div className="relative ml-auto aspect-[3/4] w-full max-w-[420px] shrink-0 sm:max-w-[520px] lg:aspect-auto lg:h-full lg:max-w-[620px]">
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="hero-blob-clip" clipPathUnits="objectBoundingBox">
              <path d="M0.50,0.03 C0.65,0.00 0.82,0.05 0.90,0.18 C0.98,0.31 0.92,0.44 0.95,0.58 C0.98,0.72 1.00,0.88 0.87,0.94 C0.74,1.00 0.68,0.88 0.55,0.90 C0.42,0.92 0.32,1.02 0.20,0.96 C0.08,0.90 0.02,0.76 0.05,0.63 C0.08,0.50 -0.02,0.40 0.03,0.28 C0.08,0.15 0.20,0.06 0.33,0.05 C0.39,0.045 0.44,0.045 0.50,0.03 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="blob-shape relative h-full w-full overflow-hidden">
          <Image
            src="/hero/profile.jpg"
            alt="Tracy Li"
            fill
            sizes="(min-width: 1024px) 760px, (min-width: 640px) 680px, 560px"
            quality={90}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </motion.section>
  );
}
