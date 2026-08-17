import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
// import Notes from "@/components/Notes";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex w-full flex-col lg:flex-row">
      <Sidebar />

      <main className="mx-auto flex w-full min-w-0 max-w-5xl flex-col gap-28 px-6 py-16 sm:px-12 lg:px-16 lg:py-20 xl:px-24">
        <Hero />
        <Projects />
        <About />
        <Skills />
        {/* <Notes /> */}
        <Resume />
        <Footer />
      </main>
    </div>
  );
}
