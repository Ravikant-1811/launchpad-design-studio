import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-muted px-4 py-1.5 text-xs font-medium text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            IT Development · SEO · GMB · Marketing
          </motion.span>

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
                Start your project <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline-dark" size="xl" asChild>
              <a href="#services">Explore services</a>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
