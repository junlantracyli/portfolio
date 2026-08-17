"use client";

import { motion } from "framer-motion";
import { notes } from "@/lib/data";

export default function Notes() {
  return (
    <section id="notes" className="scroll-mt-24">
      <p className="label text-base text-white/40 light:text-black/40">
        Notes
      </p>

      <div className="mt-7 flex flex-col divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] light:divide-black/10 light:border-black/10 light:bg-white">
        {notes.map((note, i) => (
          <motion.div
            key={note.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            className="grid grid-cols-1 gap-2 p-7 sm:grid-cols-[minmax(0,280px)_1fr] sm:items-start sm:gap-8"
          >
            <div>
              <h3 className="text-xl font-medium">{note.title}</h3>
              <p className="label mt-2 text-sm text-white/35 light:text-black/35">
                {note.date}
              </p>
            </div>
            <p className="text-xl leading-relaxed text-white/60 light:text-black/60">
              {note.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
