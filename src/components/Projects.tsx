"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { springTap } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <p className="label text-base text-white/40 light:text-black/40">
        Projects
      </p>
      <h2 className="mt-3 text-4xl text-white/85 light:text-black/85">
        The range of my daydreams and deployments.
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
                  <div className="diagonal-hatch relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors group-hover:border-white/20 sm:h-80 lg:h-[420px] light:border-black/10 light:bg-black/[0.02] light:group-hover:border-black/20">
                    {"image" in project && project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 800px, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <span className="label text-base text-white/30 light:text-black/30">
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
                        <span className="label text-sm text-white/35 light:text-black/35">
                          {project.category === "professional"
                            ? "Professional"
                            : "Personal"}
                        </span>
                      </div>
                      <span className="label text-base text-white/35 light:text-black/35">
                        {project.year}
                      </span>
                    </div>
                    <p className="max-w-2xl text-xl leading-relaxed text-white/60 light:text-black/60">
                      {project.description}
                    </p>
                    <span className="label mt-2 text-base text-white/45 transition-colors group-hover:text-white light:text-black/45 light:group-hover:text-black">
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
                  className="label w-fit text-base text-white/45 transition-colors hover:text-white light:text-black/45 light:hover:text-black"
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
