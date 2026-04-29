import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
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

const trustLogos = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Infinity, label: "Meta" },
  { icon: MessageCircleMore, label: "WhatsApp" },
  { icon: Globe, label: "Google" },
  { icon: Sparkles, label: "SEO" },
  { icon: Server, label: "Dev & Marketing" },
];

const badgeItems = [
  { icon: Brain, label: "ChatGPT" },
  { icon: Brain, label: "Claude" },
  { icon: Brain, label: "Perplexity" },
  { icon: Code2, label: "Dev" },
  { icon: Megaphone, label: "Marketing" },
];

export const Hero = () => {
  const [badgeIndex, setBadgeIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setBadgeIndex((current) => (current + 1) % badgeItems.length);
    }, 2200);

    return () => window.clearInterval(id);
  }, []);

  const currentBadge = badgeItems[badgeIndex];

  return (
    <section className="relative pt-28 md:pt-32 pb-20 md:pb-24 overflow-hidden bg-hero-glow">
      <div className="container max-w-6xl text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 flex w-full max-w-5xl items-center justify-center overflow-x-auto whitespace-nowrap rounded-full border border-border/70 bg-background/80 px-4 py-3 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.16)] backdrop-blur-md"
          >
            <div className="flex min-w-max items-center gap-2 md:gap-3 text-muted-foreground/60">
              {trustLogos.map((logo) => (
                <div
                  key={logo.label}
                  className="flex items-center gap-2 rounded-full border border-border/60 bg-white px-3 py-2 text-sm font-medium text-foreground/60"
                >
                  <logo.icon className="h-4 w-4 shrink-0" />
                  <span>{logo.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-border/70 bg-white shadow-[0_20px_40px_-28px_rgba(0,0,0,0.22)]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBadge.label}
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -10 }}
                transition={{ duration: 0.35 }}
                className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[#f7f7f7] shadow-sm"
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <currentBadge.icon className="h-8 w-8 text-foreground" />
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {currentBadge.label}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
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

        </div>
      </div>
    </section>
  );
};
