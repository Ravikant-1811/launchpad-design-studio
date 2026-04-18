import { motion } from "framer-motion";
import { Sparkles, Users, Globe, Clock } from "lucide-react";

const items = [
  { icon: Sparkles, k: "Senior-only teams", v: "No juniors learning on your dime. Every engineer ships production code week one." },
  { icon: Users, k: "Outcome-led delivery", v: "We measure success in your KPIs — revenue, retention, latency — not story points." },
  { icon: Globe, k: "Global, async-first", v: "Engineers across 4 time zones means progress on your roadmap around the clock." },
  { icon: Clock, k: "Move in 7 days", v: "Tight scoping, signed contract, environments live — your kickoff is one week away." },
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
            A different kind of IT partner.
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/70">
            We pair startup velocity with enterprise rigor. The result: software that ships on time, scales without surprises, and earns trust on day one.
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
