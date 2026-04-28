import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Facebook,
  Globe,
  Infinity,
  Instagram,
  MessageCircleMore,
  Brain,
  Megaphone,
  Server,
  Sparkles,
} from "lucide-react";

const logos = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Infinity, label: "Meta" },
  { icon: MessageCircleMore, label: "WhatsApp" },
  { icon: Globe, label: "Google" },
  { icon: Sparkles, label: "SEO" },
  { icon: Brain, label: "ChatGPT" },
  { icon: Brain, label: "Claude" },
  { icon: Brain, label: "Perplexity" },
  { icon: Code2, label: "Dev" },
  { icon: Megaphone, label: "Marketing" },
  { icon: Server, label: "Software" },
];

const strip = [...logos, ...logos];

export const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden bg-hero-glow">
      <div className="container max-w-6xl text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-border/70 bg-white shadow-[0_20px_40px_-28px_rgba(0,0,0,0.22)]"
          >
            <img src="/favicon.png" alt="Oracle Orbit" className="h-16 w-16 object-contain" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1] tracking-tight"
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
            className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Oracle Orbit is your IT and growth partner. We build websites, software, and automation,
            then scale your visibility with SEO, Google Business Profile (GMB), and performance marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 flex flex-col sm:flex-row gap-3 justify-center"
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
            className="mt-16 md:mt-20"
          >
            <p className="text-sm md:text-base font-medium text-muted-foreground">
              Trusted by businesses at
            </p>

            <div className="relative mx-auto mt-7 h-[10.5rem] max-w-5xl overflow-hidden">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-background to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent" />

              <div className="grid grid-cols-1 gap-3 animate-marquee-up">
                {strip.map((logo, index) => (
                  <div
                    key={`${logo.label}-${index}`}
                    className="flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/70 px-5 py-3 text-muted-foreground/55 shadow-sm backdrop-blur-sm"
                  >
                    <logo.icon className="h-4 w-4 shrink-0" />
                    <span className="text-base md:text-[1.05rem] font-medium tracking-tight leading-none">
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
