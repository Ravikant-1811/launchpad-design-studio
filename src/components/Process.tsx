import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Audit", d: "We assess your business goals, current website/app, SEO baseline, and market opportunities." },
  { n: "02", t: "Plan", d: "We define your build roadmap, keyword strategy, GMB actions, and campaign structure." },
  { n: "03", t: "Execute", d: "Our team develops, optimizes, and launches with clear weekly updates and priorities." },
  { n: "04", t: "Scale", d: "We improve rankings, leads, and conversion through continuous technical and marketing iteration." },
];

export const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">How we work</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            A process built for growth.
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
