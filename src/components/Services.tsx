import { Code2, Cloud, Brain, Smartphone, ShieldCheck, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Bespoke platforms and SaaS products engineered for scale, performance and clean architecture.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "AWS, Azure, GCP — infrastructure as code, CI/CD pipelines and zero-downtime deployments.",
  },
  {
    icon: Brain,
    title: "AI / ML",
    desc: "LLM apps, RAG, predictive models and AI agents that move real KPIs, not demos.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile",
    desc: "Pixel-perfect web apps and cross-platform mobile experiences your users love to open.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Audits, hardening, SOC2 readiness and 24/7 monitoring to keep your business safe.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    desc: "Pipelines, warehouses and dashboards that turn raw data into decisions in real time.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">What we do</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Full-stack IT services, <span className="text-gradient-orange">end to end.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One team, one orbit. From the first whiteboard sketch to production at scale.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative bg-card border border-border rounded-2xl p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-orange group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
