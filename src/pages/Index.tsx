import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SeoGmbSnapshot } from "@/components/SeoGmbSnapshot";
import { Industries } from "@/components/Industries";
import { Plans } from "@/components/Plans";
import { Stack } from "@/components/Stack";
import { Testimonials } from "@/components/Testimonials";
import { Why } from "@/components/Why";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Oracle Orbit — Connect. Innovate. Elevate.";
    const desc =
      "Oracle Orbit is an IT development and marketing agency offering software, website development, SEO, GMB optimization, and digital marketing services.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
      <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <SeoGmbSnapshot />
      <Industries />
      <Plans />
      <Stack />
      <Testimonials />
      <Why />
      <Process />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
