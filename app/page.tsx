import About from "@/components/About";
import Contact from "@/components/Contact";
import Profil from "@/components/Profil";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Spacing from "@/components/Spacing";

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
      <Projects />
      <Spacing size="lg" />
      <Contact />
      <Spacing />
    </main>
  );
}
