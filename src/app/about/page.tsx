import type { Metadata } from "next";
import Nav from "@/components/Nav";
import About from "@/components/About";
import PullQuote from "@/components/PullQuote";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Tracy Li",
  description:
    "Product Engineer, AI Engineer, and Creative Technologist based in Seattle, WA.",
};

export default function AboutPage() {
  return (
    <div id="top" className="flex w-full flex-col">
      <Nav />
      <main className="mx-auto flex w-full max-w-[1800px] flex-col gap-20 px-6 py-16 sm:px-12 lg:px-20 lg:py-20 xl:px-28">
        <About />
        <PullQuote />
        <Footer />
      </main>
    </div>
  );
}
