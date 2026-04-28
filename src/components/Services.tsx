import { motion } from "framer-motion";
import { ArrowRight, Check, Copy, Download, LayoutGrid, MessageSquare, Search, Sparkles } from "lucide-react";

const services = [
  {
    label: "Build",
    title: "Custom websites and software.",
    desc: "Responsive websites, web apps, portals, and internal tools designed to feel clean, fast, and scalable.",
    visual: (
      <div className="relative h-full rounded-[2rem] bg-[#efefef] p-4 md:p-5 overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <div className="mx-auto flex w-full max-w-[22rem] items-center rounded-full bg-[#111] p-2 shadow-lg">
            <button className="rounded-full border border-white/10 bg-[#111] px-4 py-3 text-sm font-medium text-white/95">
              Clear
            </button>
            <button className="ml-2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white">
              <Download className="h-5 w-5" />
            </button>
            <button className="ml-2 flex items-center gap-2 rounded-full bg-[#2a2a2a] px-4 py-3 text-sm font-medium text-white/90">
              <Copy className="h-4 w-4" />
              Copy
            </button>
            <button className="ml-auto rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111]">
              Save
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Rank",
    title: "SEO and Google Business growth.",
    desc: "Search optimization, local SEO, and GMB improvements that help your business show up where it matters.",
    visual: (
      <div className="relative h-full rounded-[2rem] bg-[#efefef] p-4 md:p-5 overflow-hidden">
        <div className="mx-auto mt-8 w-full max-w-[18rem] rounded-[1.5rem] bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold text-muted-foreground">Quick save</div>
          <div className="mt-5 rounded-2xl border border-border bg-background px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                <LayoutGrid className="h-4 w-4" />
              </div>
              <div className="font-semibold">Library</div>
              <div className="ml-auto h-5 w-5 rounded-full border border-foreground/80" />
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {["Add to collection", "Create collection", "SEO audit", "Local map pack"].map((item, index) => (
              <div key={item} className={`flex items-center gap-3 rounded-2xl px-3 py-3 ${index === 2 ? "bg-muted" : "bg-transparent"}`}>
                <div className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-white">
                  {index === 0 ? <Sparkles className="h-4 w-4" /> : index === 1 ? <Check className="h-4 w-4" /> : index === 2 ? <Search className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
                </div>
                <div className="font-medium">{item}</div>
                {index > 1 && <div className="ml-auto h-4 w-4 rounded-full bg-foreground text-background" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Grow",
    title: "Digital marketing that converts.",
    desc: "Campaigns, content, and performance tracking focused on leads, calls, and steady growth over time.",
    visual: (
      <div className="relative h-full rounded-[2rem] bg-[#efefef] p-4 md:p-5 overflow-hidden">
        <div className="mx-auto mt-10 w-full max-w-[18rem] rounded-[1.5rem] bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-muted" />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <div className="font-semibold">You</div>
                <div className="text-sm text-muted-foreground">8h ago</div>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                Love this launch screen, especially the order summary section.
              </p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl bg-muted px-4 py-4">
            <div className="flex items-center gap-2">
              <div className="flex-1 text-sm text-muted-foreground">Saving this for</div>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#2563eb] text-white">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Services
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1]">
            From inspiration to creation.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Three focused service lanes for build, visibility, and growth. Each one is designed to look polished, minimal, and easy to understand.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group"
            >
              <div className="rounded-[2rem] border border-border bg-[#f3f3f3] p-4 md:p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-transform duration-300 group-hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                  {service.visual}
                </div>
              </div>

              <div className="px-2 pt-6 text-center">
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  {service.label}
                </div>
                <h3 className="mt-3 text-2xl md:text-[2rem] font-bold tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-base md:text-lg leading-relaxed text-muted-foreground max-w-md mx-auto">
                  {service.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
