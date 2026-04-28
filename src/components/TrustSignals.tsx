const signals = [
  "Transparent weekly reporting",
  "Dedicated account manager",
  "Build + marketing in one team",
  "Local SEO + GMB focused execution",
];

export const TrustSignals = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {signals.map((signal) => (
            <span
              key={signal}
              className="inline-flex items-center rounded-full border border-primary/15 bg-muted px-4 py-2 text-sm font-medium text-foreground"
            >
              {signal}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
