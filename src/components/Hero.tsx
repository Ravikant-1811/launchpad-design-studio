import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Globe,
  Infinity,
  Instagram,
  MessageCircleMore,
  Megaphone,
  Server,
} from "lucide-react";

const logos = [
  { icon: Globe, label: "Google" },
  { icon: Infinity, label: "Meta" },
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: MessageCircleMore, label: "WhatsApp" },
  { icon: Megaphone, label: "Google Ads" },
  { icon: Server, label: "Software" },
];

const strip = [...logos, ...logos];

export const Hero = () => {
  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden bg-hero-glow">
      <div className="container max-w-5xl text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-border bg-white shadow-card"
          >
            <img src="/favicon.png" alt="Oracle Orbit" className="h-16 w-16 object-contain" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
          >
            Connect.{" "}
            <span className="text-gradient-orange">Innovate.</span>
            <br />
            Elevate.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Oracle Orbit is your IT and growth partner. We build websites, software, and automation,
            then scale your visibility with SEO, Google Business Profile (GMB), and performance marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Start your project
              </a>
            </Button>
            <Button variant="outline-dark" size="xl" asChild>
              <a href="#services" className="group">
                Explore services
                <span className="ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-20"
          >
            <p className="text-sm md:text-base font-medium text-muted-foreground">
              Trusted by design teams at
            </p>

            <div className="relative mt-8 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />

              <div className="flex w-[200%] items-center gap-5 animate-marquee-left">
                {strip.map((logo, index) => (
                  <div
                    key={`${logo.label}-${index}`}
                    className="flex min-w-[170px] items-center justify-center gap-2 rounded-full border border-border/70 bg-background/70 px-5 py-3 text-muted-foreground/55 shadow-sm backdrop-blur-sm"
                  >
                    <logo.icon className="h-5 w-5" />
                    <span className="text-lg font-medium tracking-tight leading-none">
                      {logo.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
