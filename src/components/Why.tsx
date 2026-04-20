import { motion } from "framer-motion";
import { Sparkles, Users, Globe, Clock } from "lucide-react";

const items = [
  { icon: Sparkles, k: "Build + Growth together", v: "We do development and marketing in one team, so strategy and execution stay aligned." },
  { icon: Users, k: "Lead-focused delivery", v: "Every sprint is tied to outcomes: better rankings, more leads, and stronger conversion." },
  { icon: Globe, k: "Local + global visibility", v: "From SEO to GMB and digital campaigns, we help you get discovered across channels." },
  { icon: Clock, k: "Fast launch cadence", v: "Rapid execution from planning to go-live, followed by continuous optimization." },
];

export const Why = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why Oracle Orbit</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Your technology and marketing growth partner.
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/70">
            We combine product engineering with SEO and marketing execution to help you launch faster, rank higher, and grow consistently.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-orange flex items-center justify-center shadow-glow">
                <it.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{it.k}</h3>
                <p className="mt-2 text-secondary-foreground/70 leading-relaxed">{it.v}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
