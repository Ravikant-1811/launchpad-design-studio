const logos = [
  { label: "Uber" },
  { label: "headspace" },
  { label: "Meta" },
  { label: "airbnb" },
  { label: "Revolut" },
  { label: "Metalab" },
  { label: "Pinterest" },
];

export const TrustSignals = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by businesses at
        </p>

        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-muted-foreground/60">
            {logos.map((item) => (
              <div key={item.label} className="text-2xl md:text-[2.1rem] font-medium tracking-tight">
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
