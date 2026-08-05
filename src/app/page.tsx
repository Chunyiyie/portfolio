import { Awards } from "@/components/Awards";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IntroProvider } from "@/components/IntroProvider";
import { Nav } from "@/components/Nav";
import { ProjectDetails } from "@/components/ProjectDetails";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <IntroProvider>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Awards />
        <Projects />
        <ProjectDetails />
      </main>
      <Footer />
    </IntroProvider>
  );
}
