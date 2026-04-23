const metrics = [
  { title: "Local Ranking Position", detail: "Track your visibility for service + city keywords." },
  { title: "Calls from GMB", detail: "Measure call intent from your Google Business Profile." },
  { title: "Direction Requests", detail: "Monitor how many users request directions to your business." },
  { title: "Profile Views", detail: "Track discovery trends from search and maps impressions." },
];

export const SeoGmbSnapshot = () => {
  return (
    <section id="snapshot" className="py-20 md:py-24 bg-muted/40">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">SEO + GMB Snapshot</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            What we <span className="text-gradient-orange">improve and track.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We focus on practical growth indicators, not vanity metrics.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {metrics.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
