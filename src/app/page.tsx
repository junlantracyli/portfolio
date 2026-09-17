import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CompanyMarquee from "@/components/CompanyMarquee";
import ProjectsScroller from "@/components/ProjectsScroller";
import WhatIDo from "@/components/WhatIDo";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex w-full flex-col">
      <Nav />
      <main className="mx-auto flex w-full max-w-[1800px] flex-col gap-28 px-6 py-16 sm:px-12 lg:px-20 lg:py-20 xl:px-28">
        <Hero />
        <CompanyMarquee />
        <ProjectsScroller />
        <WhatIDo />
        <CtaBand />
        <Footer />
      </main>
    </div>
  );
}
