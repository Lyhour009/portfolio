import dynamic from "next/dynamic";
import Navbar from "@/src/components/layout/navbar";
import Hero from "@/src/components/sections/hero";

const About = dynamic(() => import("@/src/components/sections/about"));
const Skills = dynamic(() => import("@/src/components/sections/skills"));
const Projects = dynamic(() => import("@/src/components/sections/projects"));
const Experience = dynamic(
  () => import("@/src/components/sections/experience"),
);
const Contact = dynamic(() => import("@/src/components/sections/contact"));
const Footer = dynamic(() => import("@/src/components/layout/footer"));

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
