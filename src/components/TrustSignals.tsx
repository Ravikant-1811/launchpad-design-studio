import {
  Facebook,
  Globe,
  Instagram,
  LayoutGrid,
  Megaphone,
  MessageCircleMore,
  PenTool,
  Search,
  Server,
  Store,
} from "lucide-react";

const logos = [
  { icon: Globe, label: "Google Business" },
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: MessageCircleMore, label: "WhatsApp" },
  { icon: Megaphone, label: "Google Ads" },
  { icon: Search, label: "SEO" },
  { icon: Server, label: "Server" },
  { icon: LayoutGrid, label: "Software" },
  { icon: PenTool, label: "Design" },
  { icon: Store, label: "Local Business" },
];

const strip = [...logos, ...logos];

export const TrustSignals = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Logos we work with
        </p>

        <div className="relative mt-4 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="flex w-[200%] items-center gap-3 animate-marquee-left">
            {strip.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="flex min-w-[170px] items-center gap-3 rounded-full border border-border bg-muted px-4 py-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground shadow-sm">
                  <item.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
