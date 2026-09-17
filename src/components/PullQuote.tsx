"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PullQuote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="-mx-6 flex flex-col items-center gap-6 rounded-3xl bg-[#2e1512] px-6 py-16 text-center text-[#f7ecdf] sm:-mx-12 sm:px-12 xl:-mx-16 xl:px-16"
    >
      <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#ff775e]">
        <Image
          src="/hero/profile.jpg"
          alt="Tracy Li"
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <p className="font-serif max-w-2xl text-3xl italic leading-snug sm:text-4xl">
        &ldquo;I design and engineer products that value your time as much as
        your attention. If it&rsquo;s not intuitive, I&rsquo;m not finished
        yet.&rdquo;
      </p>
      <p className="label text-sm text-[#f7ecdf]/60">
        Tracy Li · Product &amp; AI Engineer
      </p>
    </motion.section>
  );
}
