import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";
import CaseStudySection from "@/components/CaseStudySection";

export function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy)
    .map((p) => ({ id: p.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project || !project.caseStudy) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
      <Link
        href="/#projects"
        className="label w-fit text-base text-white/45 transition-colors hover:text-white light:text-black/45 light:hover:text-black"
      >
        ← Back to projects
      </Link>

      <header className="flex flex-col gap-5">
        <div className="flex items-baseline justify-between gap-2">
          <p className="label text-base text-white/40 light:text-black/40">
            {project.category === "professional"
              ? "Professional Work"
              : "Personal Project"}
          </p>
          <span className="label text-base text-white/35 light:text-black/35">
            {project.year}
          </span>
        </div>
        <h1 className="text-5xl text-white/90 light:text-black/90">
          {project.name}
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed text-white/60 light:text-black/60">
          {project.description}
        </p>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="label w-fit text-base text-white/45 transition-colors hover:text-white light:text-black/45 light:hover:text-black"
        >
          {project.linkLabel} ↗
        </a>
      </header>

      <div className="flex flex-col gap-14">
        <CaseStudySection index={0} label="Problem">
          {project.caseStudy.problem}
        </CaseStudySection>
        <CaseStudySection index={1} label="Approach">
          {project.caseStudy.approach}
        </CaseStudySection>
        <CaseStudySection index={2} label="Outcome">
          {project.caseStudy.outcome}
        </CaseStudySection>
      </div>
    </div>
  );
}
