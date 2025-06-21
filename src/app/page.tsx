"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Services />

      <CTA />

      <Testimonials />

      <Pricing />

      <FAQs />

      <Contact />

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
