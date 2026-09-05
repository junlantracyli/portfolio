"use client";

import { motion } from "framer-motion";

const disciplines = [
  {
    title: "Product engineering",
    description:
      "Full-stack development, backend & API architecture, and zero-to-one product building.",
    tags: ["Typescript", "React", "Next.js"],
  },
  {
    title: "AI engineering",
    description:
      "LLM workflows and integration turning model output into real product surfaces people use.",
    tags: ["Python", "LLM Workflows"],
  },
  {
    title: "Creative technology",
    description:
      "UI/UX and design systems that make interactive web experiences feel distinctly human.",
    tags: ["React", "Motion", "3D"],
  },
];

export default function WhatIDo() {
  return (
    <section id="skills" className="scroll-mt-24">
      <p className="label text-base text-current/45">What I do</p>
      <h2 className="mt-3 max-w-3xl text-5xl sm:text-6xl">
        Which problem is mine to solve?
      </h2>
      <p className="mt-4 max-w-2xl text-2xl leading-relaxed text-current/65">
        My skills focus on designing and building clear, usable digital
        products. I work across product design, mobile app design, and
        website creation.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {disciplines.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            className="flex flex-col gap-4 rounded-2xl border border-current/10 bg-current/[0.02] p-8"
          >
            <h3 className="text-2xl font-medium">{item.title}</h3>
            <p className="text-lg leading-relaxed text-current/60">
              {item.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="label rounded-full border border-current/15 px-3 py-1 text-xs text-current/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
