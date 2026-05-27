import { Nav } from './_components/Nav'
import { HeroSection } from './_components/HeroSection'
import { ServicesSection } from './_components/ServicesSection'
import { ProjectsSection } from './_components/ProjectsSection'
import { QuoteCtaSection } from './_components/QuoteCtaSection'
import { FooterSection } from './_components/FooterSection'

export default function Home() {
  return (
    <>
      <Nav />
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
      <div id="quote">
        <QuoteCtaSection />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </main>
    </>
  )
}
