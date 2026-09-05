import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects — Tracy Li",
  description: "The full archive of Tracy Li's projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <div id="top" className="flex w-full flex-col">
      <Nav />
      <main className="mx-auto flex w-full max-w-[1800px] flex-col gap-20 px-6 py-16 sm:px-12 lg:px-20 lg:py-20 xl:px-28">
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
