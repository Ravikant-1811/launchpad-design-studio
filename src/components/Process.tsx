import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Discover", d: "We dig into your goals, users and constraints to map the real problem." },
  { n: "02", t: "Design", d: "Architecture, UX and a delivery plan you can take to your board." },
  { n: "03", t: "Build", d: "Senior engineers ship in weekly increments with full transparency." },
  { n: "04", t: "Elevate", d: "We monitor, iterate and scale — so the orbit only widens from here." },
];

export const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">How we work</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            A process built for momentum.
          </h2>
        </div>

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 h-16 w-16 rounded-full bg-background border-2 border-primary text-primary font-display font-bold text-xl flex items-center justify-center shadow-card">
                  {s.n}
                </div>
                <h3 className="mt-5 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
