import { Nav } from './_components/Nav'
import { SectionNav } from './_components/SectionNav'
import { HeroSection } from './_components/HeroSection'
import { ServicesSection } from './_components/ServicesSection'
import { ProjectsSection } from './_components/ProjectsSection'
import { QuoteCtaSection } from './_components/QuoteCtaSection'

export default function Home() {
  return (
    <>
      <Nav />
      <SectionNav />
      <main className="bg-black">
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
        <QuoteCtaSection />
      </div>
    </main>
    </>
  )
}
