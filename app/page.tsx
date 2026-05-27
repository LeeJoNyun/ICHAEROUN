import { Loader } from './_components/Loader'
import { HeroSection } from './_components/HeroSection'
import { ServicesSection } from './_components/ServicesSection'
import { ProjectsSection } from './_components/ProjectsSection'
import { FooterSection } from './_components/FooterSection'

export default function Home() {
  return (
    <main className="bg-black">
      <Loader />
      <div id="intro">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="works">
        <ProjectsSection />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </main>
  )
}
