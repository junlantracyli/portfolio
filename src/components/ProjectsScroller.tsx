"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { springTap } from "@/lib/motion";

export default function ProjectsScroller() {
  return (
    <section id="work" className="scroll-mt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="label text-base text-current/45">
            Selected work · 2025 — 2026
          </p>
          <h2 className="mt-3 text-5xl sm:text-6xl">
            The range of my daydreams
            <br />
            and deployments.
          </h2>
        </div>
        <span className="label hidden shrink-0 text-sm text-current/40 sm:inline">
          Scroll →
        </span>
      </div>

      <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {projects.map((project, i) => {
          const hasCaseStudy = Boolean(project.caseStudy);
          const cardHref = hasCaseStudy
            ? `/projects/${project.id}`
            : project.href;
          const CardLink = hasCaseStudy ? Link : "a";
          const cardLinkProps = hasCaseStudy
            ? { href: cardHref }
            : { href: cardHref, target: "_blank", rel: "noreferrer" };

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="w-[82%] shrink-0 snap-start sm:w-[60%] lg:w-[38%]"
            >
              <motion.div
                whileHover={{ scale: 1.015, transition: springTap }}
                whileTap={{ scale: 0.985, transition: springTap }}
              >
                <CardLink
                  {...cardLinkProps}
                  className="group flex flex-col gap-4"
                >
                  <div className="diagonal-hatch relative flex h-56 items-center justify-center overflow-hidden rounded-2xl border border-current/10 bg-current/[0.03] transition-colors group-hover:border-current/20 sm:h-64">
                    {"image" in project && project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 480px, 80vw"
                        className="object-cover"
                      />
                    ) : (
                      <span className="label text-base text-current/30">
                        {project.label}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-2xl font-medium">{project.name}</h3>
                      <span className="label text-sm text-current/35">
                        {project.year}
                      </span>
                    </div>
                    <p className="line-clamp-2 text-lg leading-relaxed text-current/60">
                      {project.description}
                    </p>
                    <span className="label mt-1 text-sm text-current/45 transition-colors group-hover:text-[#f2705f]">
                      {hasCaseStudy ? "Read case study ↗" : `${project.linkLabel} ↗`}
                    </span>
                  </div>
                </CardLink>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <Link
        href="/projects"
        className="label mt-6 inline-block w-fit rounded-full border border-current/15 px-5 py-2.5 text-sm text-current/70 transition-colors hover:text-current"
      >
        Browse the full archive
      </Link>
    </section>
  );
}
