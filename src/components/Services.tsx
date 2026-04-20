import { Code2, Cloud, Smartphone, Search, MapPin, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Business software, portals, and internal tools engineered for speed, reliability, and scale.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "AWS, Azure, GCP setup with CI/CD, monitoring, and production-ready deployment pipelines.",
  },
  {
    icon: Smartphone,
    title: "Web & App Development",
    desc: "Modern websites, web apps, and mobile experiences designed to convert and perform.",
  },
  {
    icon: Search,
    title: "SEO Services",
    desc: "Technical SEO, on-page optimization, content planning, and local SEO that improves rankings.",
  },
  {
    icon: MapPin,
    title: "GMB Optimization",
    desc: "Google Business Profile setup and optimization to increase calls, direction requests, and local leads.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Paid campaigns, funnels, and performance tracking focused on leads, revenue, and ROI.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">What we do</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Development + Marketing, <span className="text-gradient-orange">under one roof.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One team for build and growth: from website and software delivery to SEO, GMB, and paid marketing.
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
