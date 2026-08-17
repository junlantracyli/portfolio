"use client";

import { motion } from "framer-motion";
import { tapScale } from "@/lib/motion";

export default function Resume() {
  return (
    <section className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:flex-row sm:items-center light:border-black/10 light:bg-white">
      <div>
        <h3 className="text-xl font-medium">Résumé</h3>
        <p className="mt-1.5 text-lg text-white/55 light:text-black/55">
          One page, PDF, updated August 2026.
        </p>
      </div>
      <motion.a
        {...tapScale}
        href="/resume.pdf"
        download
        className="rounded-full bg-white px-6 py-3 text-lg font-medium text-black transition-opacity hover:opacity-85 light:bg-black light:text-white"
      >
        Download ↓
      </motion.a>
    </section>
  );
}
