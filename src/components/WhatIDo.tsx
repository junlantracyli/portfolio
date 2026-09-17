"use client";

import { motion } from "framer-motion";

const disciplines = [
  {
    title: "Product engineering",
    description:
      "Full-stack development, backend & API architecture, and zero-to-one product building.",
    tags: ["Typescript", "React", "Next.js"],
    className: "sm:col-span-3 bg-[#ff775e] text-[#2e1512]",
  },
  {
    title: "AI engineering",
    description:
      "LLM workflows and integration turning model output into real product surfaces people use.",
    tags: ["Python", "LLM Workflows"],
    className: "sm:col-span-2 bg-[#f97272] text-[#2e1512]",
  },
  {
    title: "Creative technology",
    description:
      "UI/UX and design systems that make interactive web experiences feel distinctly human.",
    tags: ["React", "Motion", "3D"],
    className: "sm:col-span-5 bg-[#fcbe6a] text-[#2e1512]",
  },
];

export default function WhatIDo() {
  return (
    <section id="skills" className="scroll-mt-24">
      <p className="label text-base text-current/45">What I do</p>
      <h2 className="mt-3 max-w-3xl text-6xl font-semibold sm:text-7xl">
        Which problem is mine to solve?
      </h2>
      <p className="mt-4 max-w-2xl text-2xl leading-relaxed text-current/65">
        My skills focus on designing and building clear, usable digital
        products. I work across product design, mobile app design, and
        website creation.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-5">
        {disciplines.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            className={`flex flex-col gap-4 rounded-3xl p-8 sm:p-10 ${item.className}`}
          >
            <h3 className="text-3xl font-semibold sm:text-4xl">
              {item.title}
            </h3>
            <p className="max-w-lg text-lg leading-relaxed opacity-70">
              {item.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="label rounded-full bg-current/20 px-3 py-1 text-xs opacity-70"
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
