"use client";

import { motion } from "framer-motion";
import { tapScale } from "@/lib/motion";

export default function CtaBand() {
  return (
    <section className="-mx-6 rounded-3xl bg-[#f2705f] px-6 py-16 text-center text-[#2e1512] sm:-mx-12 sm:px-12 xl:-mx-16 xl:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-6xl leading-tight sm:text-7xl lg:text-8xl"
      >
        Let&rsquo;s build
        <br />
        something human.
      </motion.h2>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <motion.a
          {...tapScale}
          href="mailto:junlantracyli@gmail.com"
          className="rounded-full bg-[#2e1512] px-8 py-4 text-xl font-medium text-[#f7ecdf] transition-opacity hover:opacity-85"
        >
          Email me
        </motion.a>
        <motion.a
          {...tapScale}
          href="/resume.pdf"
          download
          className="rounded-full border border-[#2e1512]/30 px-8 py-4 text-xl font-medium text-[#2e1512] transition-colors hover:bg-[#2e1512]/10"
        >
          Download résumé ↓
        </motion.a>
      </div>
    </section>
  );
}
