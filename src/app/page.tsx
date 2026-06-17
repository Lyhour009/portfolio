import Navbar from "@/src/components/layout/navbar";
import Hero from "@/src/components/sections/hero";
import About from "@/src/components/sections/about";
import Skills from "@/src/components/sections/skills";
import Projects from "@/src/components/sections/projects";
import Experience from "@/src/components/sections/experience";
import Contact from "@/src/components/sections/contact";
import Footer from "@/src/components/layout/footer";

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
