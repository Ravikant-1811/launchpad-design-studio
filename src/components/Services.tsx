import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  LayoutDashboard,
  Megaphone,
  MousePointerClick,
  Search,
  Send,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    label: "Build",
    title: "Custom websites and software.",
    desc: "Responsive websites, web apps, portals, and internal tools designed to feel clean, fast, and scalable.",
    visual: (
      <div className="relative h-full rounded-[2rem] bg-[#f4f4f4] p-4 md:p-5 overflow-hidden">
        <div className="absolute inset-x-6 top-6 rounded-[1.5rem] border border-border bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 border-b border-border pb-3">
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <div className="ml-auto h-2 w-24 rounded-full bg-zinc-200" />
          </div>

          <div className="mt-4 grid gap-3">
            <div className="h-5 w-2/3 rounded-full bg-zinc-900/90" />
            <div className="h-3 w-full rounded-full bg-zinc-200" />
            <div className="h-3 w-5/6 rounded-full bg-zinc-200" />
          </div>

          <div className="mt-5 flex gap-3">
            <div className="h-10 flex-1 rounded-2xl bg-zinc-900" />
            <div className="h-10 w-10 rounded-2xl bg-zinc-200" />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-border bg-zinc-50 p-3">
              <Code2 className="h-4 w-4 text-zinc-500" />
              <div className="mt-3 h-2 w-2/3 rounded-full bg-zinc-200" />
              <div className="mt-2 h-2 w-full rounded-full bg-zinc-100" />
            </div>
            <div className="rounded-2xl border border-border bg-zinc-50 p-3">
              <Smartphone className="h-4 w-4 text-zinc-500" />
              <div className="mt-3 h-2 w-2/3 rounded-full bg-zinc-200" />
              <div className="mt-2 h-2 w-full rounded-full bg-zinc-100" />
            </div>
            <div className="rounded-2xl border border-border bg-zinc-50 p-3">
              <Globe className="h-4 w-4 text-zinc-500" />
              <div className="mt-3 h-2 w-2/3 rounded-full bg-zinc-200" />
              <div className="mt-2 h-2 w-full rounded-full bg-zinc-100" />
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f4f4f4] to-transparent" />
      </div>
    ),
  },
  {
    label: "Rank",
    title: "SEO and Google Business growth.",
    desc: "Search optimization, local SEO, and GMB improvements that help your business show up where it matters.",
    visual: (
      <div className="relative h-full rounded-[2rem] bg-[#f4f4f4] p-4 md:p-5 overflow-hidden">
        <div className="absolute inset-x-6 top-6 rounded-[1.5rem] border border-border bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Local SEO</div>
              <div className="mt-1 text-lg font-semibold">Quick snapshot</div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100">
              <Search className="h-4 w-4 text-zinc-500" />
            </div>
          </div>

          <div className="mt-5 rounded-[1.25rem] border border-border bg-zinc-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                <LayoutDashboard className="h-4 w-4 text-zinc-600" />
              </div>
              <div>
                <div className="text-sm font-semibold">Google Business Profile</div>
                <div className="text-sm text-muted-foreground">Visibility, calls, and map actions</div>
              </div>
              <div className="ml-auto rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
                Track
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["Views", "Calls", "Directions"].map((item, index) => (
              <div key={item} className="rounded-2xl border border-border bg-zinc-50 p-3">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  {index === 0 ? <Sparkles className="h-4 w-4" /> : index === 1 ? <MousePointerClick className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
                  {item}
                </div>
                <div className="mt-3 h-2 rounded-full bg-zinc-200" />
                <div className="mt-2 h-16 rounded-xl bg-gradient-to-t from-zinc-100 to-zinc-200" />
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
      <div className="relative h-full rounded-[2rem] bg-[#f4f4f4] p-4 md:p-5 overflow-hidden">
        <div className="absolute inset-x-6 top-6 rounded-[1.5rem] border border-border bg-white p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100">
              <Megaphone className="h-5 w-5 text-zinc-600" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Campaign</div>
              <div className="mt-1 text-lg font-semibold">Ads and social content</div>
            </div>
            <div className="ml-auto flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
              <TrendingUp className="h-3.5 w-3.5" />
              Live
            </div>
          </div>

          <div className="mt-5 rounded-[1.25rem] bg-zinc-50 p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-400" />
              <div className="min-w-0">
                <div className="text-sm font-semibold">Social post preview</div>
                <div className="text-sm text-muted-foreground">Lead generation, remarketing, and content</div>
              </div>
              <div className="ml-auto grid h-10 w-10 place-items-center rounded-full bg-[#2563eb] text-white">
                <Send className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {["Reach", "Clicks", "Leads"].map((item, index) => (
              <div key={item} className="rounded-2xl border border-border bg-zinc-50 p-3">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {item}
                </div>
                <div className="mt-3 h-10 rounded-xl bg-gradient-to-t from-zinc-100 to-zinc-200" />
                <div className="mt-2 h-2 rounded-full bg-zinc-200" />
                {index === 2 && <div className="mt-2 h-2 rounded-full bg-zinc-300" />}
              </div>
            ))}
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
            Build, rank, and grow. Three focused service lanes with clean visuals that feel more like product snapshots than generic cards.
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
