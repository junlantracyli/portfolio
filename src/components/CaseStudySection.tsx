"use client";

import { motion } from "framer-motion";

export default function CaseStudySection({
  index,
  label,
  children,
}: {
  index: number;
  label: string;
  children: string;
}) {
  const paragraphs = children.split("\n\n");

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <p className="label text-base text-white/40 light:text-black/40">
        {label}
      </p>
      <div className="flex flex-col gap-4 text-xl leading-relaxed text-white/70 light:text-black/70">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </motion.section>
  );
}
