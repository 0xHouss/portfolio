"use client";

import SocialsBar from "@/components/socials-bar";
import { useCenteredScroll } from "@/hooks/use-centered-scroll";
import About from "@/layouts/about-section";
import Contact from "@/layouts/contact-section";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Hero from "@/layouts/hero-section";
import Projects from "@/layouts/projects-section";
import Services from "@/layouts/services-section";
import Testimonials from "@/layouts/testimonials-section";

export const socials = [
  { name: 'X', href: 'https://x.com/0xHouss' },
  { name: 'GitHub', href: 'https://github.com/0xHouss' },
  { name: 'Discord', href: 'https://discord.gg/0xHouss' },
  // { name: 'LinkedIn', href: 'https://www.linkedin.com/in/houssine-moussaoui/' },
  // { name: 'Instagram', href: 'https://www.instagram.com/0xhouss/' },
  { name: 'Fiverr', href: 'https://www.fiverr.com/houss_dev' },
]

export default function Home() {
  useCenteredScroll()

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <div className="relative bg-background border-y-2 border-accent">
          <SocialsBar />
          <About />
          <Services />
        </div>
        <Contact />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
