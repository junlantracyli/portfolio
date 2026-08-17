"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/lib/data";
import { tapScale } from "@/lib/motion";

function MailIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="m3 6.5 8.3 6a1.2 1.2 0 0 0 1.4 0L21 6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3v5a1 1 0 0 0 1 1h5" />
      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
      <path d="M12 17v-6" />
      <path d="m9.5 14.5 2.5 2.5 2.5-2.5" />
    </svg>
  );
}

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("projects");
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.toLowerCase())
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => section && observer.observe(section));

    const onScroll = () => {
      if (window.scrollY < 200) setActiveSection("projects");
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
  }, [isLight]);

  return (
    <aside className="shrink-0 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-72 lg:flex-col lg:justify-between lg:overflow-y-auto lg:border-r lg:border-current/10 lg:px-9 lg:py-10">
      <div className="flex flex-col gap-11">
        <nav>
          <p className="label mb-5 text-sm text-current/60">Navigation</p>
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const active = activeSection === id;
              return (
                <li key={item}>
                  <motion.a
                    {...tapScale}
                    href={`#${id}`}
                    className={`block w-fit py-1 text-2xl transition-colors ${
                      active
                        ? "font-medium text-current"
                        : "text-current/45 hover:text-current/75"
                    }`}
                  >
                    {item}
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <p className="label mb-5 text-sm text-current/60">Contacts</p>
          <ul className="flex flex-col gap-2">
            <li>
              <motion.a
                {...tapScale}
                href="mailto:junlantracyli@gmail.com"
                className="flex w-fit items-center gap-3 py-1 text-2xl text-current/70 transition-colors hover:text-current"
              >
                <MailIcon />
                Email
              </motion.a>
            </li>
            <li>
              <motion.a
                {...tapScale}
                href="https://www.linkedin.com/in/junlantracyli"
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-3 py-1 text-2xl text-current/70 transition-colors hover:text-current"
              >
                <LinkedinIcon />
                Linkedin
              </motion.a>
            </li>
            <li>
              <motion.a
                {...tapScale}
                href="/resume.pdf"
                className="flex w-fit items-center gap-3 py-1 text-2xl text-current/70 transition-colors hover:text-current"
              >
                <ResumeIcon />
                Résumé
              </motion.a>
            </li>
          </ul>
        </div>

        <div>
          <p className="label mb-5 text-sm text-current/60">Mode</p>
          <motion.button
            {...tapScale}
            role="switch"
            aria-checked={!isLight}
            onClick={() => setIsLight((l) => !l)}
            className="relative flex h-8 w-16 items-center rounded-full bg-current/10 px-1 transition-colors"
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`flex h-6 w-6 items-center justify-center rounded-full bg-[#0b0b0c] text-xs shadow light:bg-white ${
                isLight ? "translate-x-0" : "translate-x-8"
              }`}
            >
              {isLight ? "☀️" : "🌙"}
            </motion.span>
          </motion.button>
        </div>
      </div>
    </aside>
  );
}
