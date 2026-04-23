const devPlans = [
  {
    name: "Starter",
    items: ["One landing page or small website", "Mobile responsive design", "Basic speed optimization", "1 month support"],
  },
  {
    name: "Growth",
    items: ["Business website or web app module", "CMS or admin panel setup", "Lead form + tracking integration", "2 months support"],
  },
  {
    name: "Premium",
    items: ["Custom web platform development", "Advanced integrations + automation", "Performance and security hardening", "Priority support"],
  },
];

const marketingPlans = [
  {
    name: "Starter",
    items: ["Google Business Profile setup", "On-page SEO basics", "Keyword targeting setup", "Monthly reporting"],
  },
  {
    name: "Growth",
    items: ["SEO + local SEO execution", "GMB weekly optimization", "Content and landing page strategy", "Campaign performance reviews"],
  },
  {
    name: "Premium",
    items: ["Full-funnel marketing strategy", "Google + Meta campaign management", "SEO authority growth plan", "Weekly growth calls"],
  },
];

const PlanColumn = ({ title, plans }: { title: string; plans: { name: string; items: string[] }[] }) => (
  <div>
    <h3 className="text-2xl font-bold">{title}</h3>
    <div className="mt-6 grid md:grid-cols-3 gap-5">
      {plans.map((plan) => (
        <article key={plan.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h4 className="text-xl font-bold">{plan.name}</h4>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {plan.items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </div>
);

export const Plans = () => {
  return (
    <section id="plans" className="py-20 md:py-24 bg-muted/40">
      <div className="container space-y-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Packages / Plans</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Flexible plans for <span className="text-gradient-orange">build and growth.</span>
          </h2>
        </div>
        <PlanColumn title="Development Plans" plans={devPlans} />
        <PlanColumn title="Marketing Plans" plans={marketingPlans} />
      </div>
    </section>
  );
};
