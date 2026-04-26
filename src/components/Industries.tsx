import { Building2, Briefcase, GraduationCap, Home, Laptop, ShoppingBag, Stethoscope, UtensilsCrossed } from "lucide-react";

const industries = [
  { icon: Stethoscope, label: "Clinics & Healthcare" },
  { icon: Stethoscope, label: "Dental Practices" },
  { icon: GraduationCap, label: "Education & Coaching" },
  { icon: Briefcase, label: "Local Service Businesses" },
  { icon: ShoppingBag, label: "Ecommerce Brands" },
  { icon: Building2, label: "Real Estate & Construction" },
  { icon: Home, label: "Professional Services" },
  { icon: UtensilsCrossed, label: "Hospitality & Restaurants" },
];

export const Industries = () => {
  return (
    <section id="industries" className="py-20 md:py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Industries We Serve</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Built for businesses that want to <span className="text-gradient-orange">grow fast.</span>
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <div key={industry.label} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <industry.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold">{industry.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
