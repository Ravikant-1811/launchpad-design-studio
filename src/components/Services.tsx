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
      <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#f4f4f4] p-4 md:p-5">
        <div className="absolute inset-x-6 top-6 rounded-[1.5rem] border border-border bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 border-b border-border pb-3">
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="ml-auto h-2 w-24 rounded-full bg-zinc-200"
            />
          </div>

          <div className="mt-4 grid gap-3">
            <motion.div
              animate={{ width: ["58%", "82%", "64%", "76%", "58%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-5 rounded-full bg-zinc-900/90"
            />
            <motion.div
              animate={{ width: ["100%", "92%", "100%"] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-3 rounded-full bg-zinc-200"
            />
            <motion.div
              animate={{ width: ["84%", "72%", "89%", "84%"] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-3 rounded-full bg-zinc-200"
            />
          </div>

          <div className="mt-5 flex gap-3">
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-10 flex-1 rounded-2xl bg-zinc-900"
            />
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-10 w-10 rounded-2xl bg-zinc-200"
            />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { icon: Code2, label: "Build" },
              { icon: Smartphone, label: "Mobile" },
              { icon: Globe, label: "Web" },
            ].map((item, index) => (
              <div key={item.label} className="rounded-2xl border border-border bg-zinc-50 p-3">
                <item.icon className="h-4 w-4 text-zinc-500" />
                <motion.div
                  animate={{ width: ["55%", "75%", "62%", "55%"] }}
                  transition={{ duration: 3.6 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-3 h-2 rounded-full bg-zinc-200"
                />
                <motion.div
                  animate={{ width: ["100%", "86%", "100%"] }}
                  transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-2 h-2 rounded-full bg-zinc-100"
                />
              </div>
            ))}
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
      <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#f4f4f4] p-4 md:p-5">
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
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="ml-auto rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white"
              >
                Track
              </motion.div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Views", icon: Sparkles, h: "h-14" },
              { label: "Calls", icon: MousePointerClick, h: "h-20" },
              { label: "Directions", icon: Globe, h: "h-16" },
            ].map((item, index) => (
              <div key={item.label} className="rounded-2xl border border-border bg-zinc-50 p-3">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </div>
                <div className="mt-3 flex h-24 items-end gap-1">
                  {[38, 56, 45, 68, 58, 74].map((bar, barIndex) => (
                    <motion.div
                      key={`${item.label}-${barIndex}`}
                      animate={{ height: [`${bar - 10}%`, `${bar}%`, `${bar - 4}%`, `${bar - 10}%`] }}
                      transition={{
                        duration: 3.2 + index * 0.4 + barIndex * 0.08,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex-1 rounded-full bg-gradient-to-t from-zinc-200 to-zinc-900/75"
                    />
                  ))}
                </div>
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
      <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#f4f4f4] p-4 md:p-5">
        <div className="absolute inset-x-6 top-6 rounded-[1.5rem] border border-border bg-white p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100">
              <Megaphone className="h-5 w-5 text-zinc-600" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Campaign</div>
              <div className="mt-1 text-lg font-semibold">Ads and social content</div>
            </div>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="ml-auto flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600"
            >
              <TrendingUp className="h-3.5 w-3.5" />
              Live
            </motion.div>
          </div>

          <div className="mt-5 rounded-[1.25rem] bg-zinc-50 p-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  opacity: [0.65, 1, 0.65],
                  scale: [1, 1.03, 1],
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="h-12 w-12 rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-400"
              />
              <div className="min-w-0">
                <div className="text-sm font-semibold">Social post preview</div>
                <div className="text-sm text-muted-foreground">Lead generation, remarketing, and content</div>
              </div>
              <motion.div
                animate={{ rotate: [0, 8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="ml-auto grid h-10 w-10 place-items-center rounded-full bg-[#2563eb] text-white"
              >
                <Send className="h-4 w-4" />
              </motion.div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: "Reach", value: "12.4K" },
              { label: "Clicks", value: "1.8K" },
              { label: "Leads", value: "248" },
            ].map((item, index) => (
              <div key={item.label} className="rounded-2xl border border-border bg-zinc-50 p-3">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </div>
                <div className="mt-2 text-lg font-semibold tracking-tight">{item.value}</div>
                <div className="mt-3 h-10 rounded-xl bg-gradient-to-t from-zinc-100 to-zinc-200 overflow-hidden">
                  <motion.div
                    animate={{ x: ["-18%", "18%", "-8%", "-18%"] }}
                    transition={{
                      duration: 4 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-full w-[120%] bg-[linear-gradient(90deg,rgba(17,17,17,0.1),rgba(17,17,17,0.6),rgba(17,17,17,0.1))]"
                  />
                </div>
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
            Build, rank, and grow. Three focused service lanes with live-feeling visuals for websites, SEO, and campaigns.
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
