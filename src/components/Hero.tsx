import { Button } from "@/components/ui/button";
import { OrbitGraphic } from "./OrbitGraphic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-hero-glow">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            IT Development · SEO · GMB · Marketing
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]"
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
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            Oracle Orbit is your IT and growth partner. We build websites, software, and automation,
            then scale your visibility with SEO, Google Business Profile (GMB), and performance marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { v: "120+", l: "Projects shipped" },
              { v: "40+", l: "Global clients" },
              { v: "99.9%", l: "Uptime SLA" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-display font-bold text-secondary">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <OrbitGraphic className="w-full" />
        </motion.div>
      </div>
    </section>
  );
};
