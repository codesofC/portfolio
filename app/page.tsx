import About from '@/components/About'
import Contact from '@/components/Contact'
import Profil from '@/components/Profil'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-12 lg:gap-y-44">
      <Profil />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
