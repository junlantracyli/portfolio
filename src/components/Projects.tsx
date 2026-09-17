"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { springTap } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <p className="label text-base text-current/45">Projects</p>
      <h2 className="mt-3 text-4xl text-current/85">
        The full archive.
      </h2>

      <div className="mt-10 flex flex-col gap-16">
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
              className="flex flex-col gap-5"
            >
              <motion.div
                whileHover={{ scale: 1.015, transition: springTap }}
                whileTap={{ scale: 0.985, transition: springTap }}
              >
                <CardLink
                  {...cardLinkProps}
                  className="group flex flex-col gap-5"
                >
                  <div className="diagonal-hatch relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-current/10 bg-current/[0.03] transition-colors group-hover:border-current/20 sm:h-80 lg:h-[420px]">
                    {"image" in project && project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 800px, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <span className="label text-base text-current/30">
                        {project.label}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-3xl font-medium">
                          {project.name}
                        </h3>
                        <span className="label text-sm text-current/35">
                          {project.category === "professional"
                            ? "Professional"
                            : "Personal"}
                        </span>
                      </div>
                      <span className="label text-base text-current/35">
                        {project.year}
                      </span>
                    </div>
                    <p className="max-w-2xl text-xl leading-relaxed text-current/60">
                      {project.description}
                    </p>
                    <span className="label mt-2 text-base text-current/45 transition-colors group-hover:text-[#ff775e]">
                      {hasCaseStudy ? "Read case study ↗" : `${project.linkLabel} ↗`}
                    </span>
                  </div>
                </CardLink>
              </motion.div>

              {hasCaseStudy && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="label w-fit text-base text-current/45 transition-colors hover:text-current"
                >
                  {project.linkLabel} ↗
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
