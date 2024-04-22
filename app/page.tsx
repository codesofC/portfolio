import About from "@/components/About";
import Contact from "@/components/Contact";
import Profil from "@/components/Profil";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import Spacing from "@/components/Spacing";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Spacing size="md" />
      <Profil />
      <Spacing size="lg" />
      <About />
      <Spacing size="lg" />
      <Skills />
      <Spacing size="lg" />
      <Section className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-2" id="projects">
        <Projects />
        <Works />
      </Section>

      <Spacing size="lg" />
      <Contact />
      <Spacing />
    </main>
  );
}
