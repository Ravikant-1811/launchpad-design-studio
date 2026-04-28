import {
  Briefcase,
  Building2,
  GraduationCap,
  Home,
  Laptop2,
  Stethoscope,
  Store,
  UtensilsCrossed,
  ShoppingBag,
  Scissors,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const industries = [
  { icon: Stethoscope, label: "Clinics", note: "Web, SEO, GMB" },
  { icon: ShieldCheck, label: "Dental", note: "Local leads" },
  { icon: GraduationCap, label: "Education", note: "Admissions & growth" },
  { icon: Briefcase, label: "Local Services", note: "Calls & inquiries" },
  { icon: ShoppingBag, label: "Ecommerce", note: "Storefronts & ads" },
  { icon: Building2, label: "Real Estate", note: "Project visibility" },
  { icon: Home, label: "Professional Services", note: "Trust building" },
  { icon: UtensilsCrossed, label: "Restaurants", note: "Local discovery" },
  { icon: Store, label: "Retail Stores", note: "Maps & footfall" },
  { icon: Laptop2, label: "Software Teams", note: "Product UI" },
  { icon: Scissors, label: "Beauty & Wellness", note: "Bookings" },
  { icon: Rocket, label: "Startups", note: "Launch support" },
];

export const Industries = () => {
  return (
    <section id="industries" className="py-24 md:py-32 bg-background">
      <div className="container max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Industries we serve
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1]">
            Clients and industries we cater to.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A clean logo-wall style section that makes it easy to see who we work with at a glance.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {industries.map((item) => (
            <div
              key={item.label}
              className="group rounded-[1.6rem] border border-border bg-[#f5f5f5] p-4 md:p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#f1f1f1]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <item.icon className="h-5 w-5 text-foreground/75" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold leading-tight tracking-tight">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
