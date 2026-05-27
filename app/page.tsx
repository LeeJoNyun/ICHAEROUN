import { Loader } from './_components/Loader'
import { HeroSection } from './_components/HeroSection'
import { AboutSection } from './_components/AboutSection'
import { ProjectsSection } from './_components/ProjectsSection'
import { FooterSection } from './_components/FooterSection'

export default function Home() {
  return (
    <main className="bg-black">
      <Loader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  )
}
