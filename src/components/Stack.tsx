import {
  BarChart3,
  Braces,
  Brush,
  Code2,
  Facebook,
  Globe,
  Instagram,
  Layers3,
  LayoutGrid,
  Megaphone,
  MessageCircleMore,
  PenTool,
  Palette,
  Search,
  Server,
} from "lucide-react";

const platformTools = [
  { icon: Globe, label: "Google Business", accent: "bg-slate-100 text-slate-900" },
  { icon: Facebook, label: "Facebook", accent: "bg-slate-100 text-slate-900" },
  { icon: Instagram, label: "Instagram", accent: "bg-slate-100 text-slate-900" },
  { icon: MessageCircleMore, label: "WhatsApp", accent: "bg-slate-100 text-slate-900" },
  { icon: Megaphone, label: "Google Ads", accent: "bg-slate-100 text-slate-900" },
];

const devTools = [
  { icon: Code2, label: "React" },
  { icon: Server, label: "Server" },
  { icon: Braces, label: "TypeScript" },
  { icon: Search, label: "SEO" },
  { icon: BarChart3, label: "Analytics" },
];

const designTools = [
  { icon: PenTool, label: "Wireframes" },
  { icon: Palette, label: "Brand Design" },
  { icon: LayoutGrid, label: "Layouts" },
  { icon: Layers3, label: "Design Systems" },
  { icon: Brush, label: "UI Prototypes" },
];

export const Stack = () => {
  return (
    <section id="stack" className="py-20 md:py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Platforms + Tools</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Logos and tools we use to <span className="text-gradient-orange">build and grow.</span>
          </h2>
        </div>

        <div className="mt-10 space-y-10">
          <div>
            <h3 className="text-xl font-bold">Platforms</h3>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {platformTools.map((tool) => (
                <div key={tool.label} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                  <div className={`h-10 w-10 rounded-xl ${tool.accent} flex items-center justify-center`}>
                    <tool.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold">{tool.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">Development & Marketing</h3>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {devTools.map((tool) => (
                <div key={tool.label} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <tool.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold">{tool.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">Design Tools</h3>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {designTools.map((tool) => (
                <div key={tool.label} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <tool.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold">{tool.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
