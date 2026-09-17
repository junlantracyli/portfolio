"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { tapScale } from "@/lib/motion";

function VerifiedBadge() {
  return (
    <svg
      width="18"
      height="18"
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

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/about" },
  { label: "Résumé", href: "/resume.pdf" },
];

export default function Nav() {
  const [isLight, setIsLight] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
  }, [isLight]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#2e1512]/10 bg-primary/95 text-[#2e1512] backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between gap-4 px-6 py-7 sm:px-12 lg:px-20 xl:px-28">
        <Link href="/#top" className="flex items-center gap-4 text-2xl font-medium">
          <Image
            src="/logo/jtl-logo.png"
            alt="JTL logo"
            width={64}
            height={64}
            className="h-16 w-16 shrink-0"
            priority
          />
          Tracy Li
          <VerifiedBadge />
          <span className="hidden text-current/20 sm:inline">|</span>
          <span className="label hidden text-lg font-normal text-current/70 sm:inline">
            Seattle, WA 🏔
          </span>
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/about" ? pathname === "/about" : false;
            return (
              <motion.a
                key={link.label}
                {...tapScale}
                href={link.href}
                className={`label text-lg transition-colors ${
                  active
                    ? "text-current"
                    : "text-current/80 hover:text-current"
                }`}
              >
                {link.label}
              </motion.a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            {...tapScale}
            role="switch"
            aria-checked={!isLight}
            onClick={() => setIsLight((l) => !l)}
            className="relative flex h-9 w-16 items-center rounded-full bg-current/20 px-1 transition-colors"
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`flex h-7 w-7 items-center justify-center rounded-full bg-[#2e1512] text-sm shadow light:bg-white ${
                isLight ? "translate-x-0" : "translate-x-7"
              }`}
            >
              {isLight ? "☀️" : "🌙"}
            </motion.span>
          </motion.button>

          <motion.a
            {...tapScale}
            href="mailto:junlantracyli@gmail.com"
            className="hidden rounded-full bg-[#2e1512] px-6 py-3.5 text-lg font-medium text-accent transition-opacity hover:opacity-85 sm:inline-block"
          >
            Get in touch
          </motion.a>
        </div>
      </div>
    </header>
  );
}
