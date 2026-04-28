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

export const TrustSignals = () => {
  return (
    <section className="py-14 bg-background">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by businesses at
        </p>

        <div className="mt-8 overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-muted-foreground/80">
            {logos.map((item) => (
              <div key={item.label} className="flex items-center gap-2 transition-opacity hover:opacity-100">
                <item.icon className="h-5 w-5 text-muted-foreground/70" />
                <span className="text-xl font-medium tracking-tight text-muted-foreground/80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
