"use client";

import { motion } from "framer-motion";
import { tapScale } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 border-t border-current/10 pt-8 text-lg text-current/50">
      <p className="text-base italic text-current/40">
        Human by day. Creative by night. Solving problems one pixel at a
        time.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 · Tracy Li</p>
        <div className="flex items-center gap-5">
          <motion.a
            {...tapScale}
            href="mailto:junlantracyli@gmail.com"
            className="transition-colors hover:text-current"
          >
            Email
          </motion.a>
          <motion.a
            {...tapScale}
            href="https://www.linkedin.com/in/junlantracyli"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-current"
          >
            Linkedin
          </motion.a>
          <motion.a
            {...tapScale}
            href="#top"
            className="transition-colors hover:text-current"
          >
            Top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
