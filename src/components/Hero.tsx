"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { tapScale } from "@/lib/motion";

function VerifiedBadge() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M12 2.5 14.39 4.9 17.7 4.3 18.3 7.61 20.7 10 19.5 13.11 20.7 16.22 18.3 18.61 17.7 21.92 14.39 21.32 12 23.72 9.61 21.32 6.3 21.92 5.7 18.61 3.3 16.22 4.5 13.11 3.3 10 5.7 7.61 6.3 4.3 9.61 4.9 12 2.5Z"
        fill="#3B9CF6"
      />
      <path
        d="M8.5 12.3 10.8 14.6 15.5 9.6"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-6"
    >
      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-white/10 light:border-black/10">
        <Image
          src="/hero/profile.jpg"
          alt="Tracy Li"
          fill
          sizes="128px"
          className="object-cover"
          priority
        />
        <span className="absolute bottom-1.5 right-1.5 h-4 w-4 rounded-full border-[3px] border-[#0b0b0c] bg-[#22c55e] light:border-[#f7f6f4]" />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h1 className="flex items-center gap-3 text-7xl sm:text-8xl">
            Tracy Li
            <VerifiedBadge />
          </h1>
          <p className="mt-3 text-xl text-white/55 light:text-black/55">
            Product Engineer · AI Engineer · Creative Technologist
          </p>
        </div>

        <p className="max-w-xl text-2xl leading-relaxed text-white/70 light:text-black/70">
          I bridge technical constraints and human needs, using code as a
          creative medium to build digital experiences that are distinctly
          human.
        </p>

        <p className="text-xl text-white/55 light:text-black/55">
          Seattle, WA 🏔
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <motion.a
            {...tapScale}
            href="mailto:junlantracyli@gmail.com"
            className="rounded-full bg-white px-6 py-3 text-lg font-medium text-black transition-opacity hover:opacity-85 light:bg-black light:text-white"
          >
            Get in touch
          </motion.a>
          <motion.a
            {...tapScale}
            href="https://www.linkedin.com/in/junlantracyli"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-lg text-white/75 transition-colors hover:text-white light:border-black/15 light:text-black/75 light:hover:text-black"
          >
            Linkedin
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
