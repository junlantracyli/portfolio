"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { tapScale } from "@/lib/motion";

const cyclingPhrases = ["AI TOOLS", "DIGITAL PRODUCTS", "CREATIVE SYSTEMS"];

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
          className="absolute left-0 top-0 block w-full cursor-pointer whitespace-nowrap text-[#f2705f]"
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
            style={{ fontSize: "clamp(1.9rem, 4.2vw, 4.5rem)" }}
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

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <motion.a
            {...tapScale}
            href="https://www.linkedin.com/in/junlantracyli"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#f2705f] px-8 py-4 text-xl font-medium text-[#2e1512] transition-opacity hover:opacity-85"
          >
            LinkedIn
          </motion.a>
          <motion.a
            {...tapScale}
            href="#work"
            className="rounded-full border border-current/15 px-8 py-4 text-xl text-current/75 transition-colors hover:text-current"
          >
            See the work
          </motion.a>
        </div>
      </div>

      <div className="relative ml-auto -mr-6 aspect-[3/4] w-full max-w-[340px] shrink-0 overflow-hidden rounded-t-[260px] rounded-b-[48px] sm:-mr-12 sm:max-w-[420px] lg:aspect-auto lg:h-full lg:-mr-20 lg:max-w-[480px] xl:-mr-28">
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
    </motion.section>
  );
}
