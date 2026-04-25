const signals = [
  {
    title: "Build",
    desc: "Websites, platforms, and systems designed to look premium and work fast.",
  },
  {
    title: "Rank",
    desc: "SEO and GMB work that improves visibility across search and maps.",
  },
  {
    title: "Grow",
    desc: "Marketing execution that turns attention into leads and business growth.",
  },
];

export const TrustSignals = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-4">
          {signals.map((signal) => (
            <article
              key={signal.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                {signal.title}
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">{signal.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
