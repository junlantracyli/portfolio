"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import TiltCard from "@/components/TiltCard";

export default function ProjectsScroller() {
  return (
    <section id="work" className="scroll-mt-24">
      <div>
        <p className="label text-base text-current/45">
          Selected work · 2025 — 2026
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
            >
              <TiltCard>
                <CardLink
                  {...cardLinkProps}
                  className="group flex flex-col gap-4"
                >
                  <div className="diagonal-hatch relative flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-current/10 bg-current/[0.03] shadow-lg transition-shadow duration-300 group-hover:border-current/20 group-hover:shadow-2xl sm:h-96">
                    {"image" in project && project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
                    <span className="label mt-1 text-sm text-current/45 transition-colors group-hover:text-[#ff775e]">
                      {hasCaseStudy ? "Read case study ↗" : `${project.linkLabel} ↗`}
                    </span>
                  </div>
                </CardLink>
              </TiltCard>
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
