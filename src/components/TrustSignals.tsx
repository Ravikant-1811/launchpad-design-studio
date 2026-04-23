const signals = [
  "Transparent weekly reporting",
  "Dedicated account manager",
  "Build + marketing in one team",
  "Local SEO + GMB focused execution",
];

export const TrustSignals = () => {
  return (
    <section className="py-10 border-y border-border bg-background">
      <div className="container">
        <div className="flex flex-wrap gap-3">
          {signals.map((signal) => (
            <span
              key={signal}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground"
            >
              {signal}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
