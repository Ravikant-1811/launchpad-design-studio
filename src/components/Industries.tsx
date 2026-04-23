const industries = [
  "Clinics & Healthcare",
  "Dental Practices",
  "Education & Coaching",
  "Local Service Businesses",
  "Ecommerce Brands",
  "Real Estate & Construction",
  "Professional Services",
  "Hospitality & Restaurants",
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
            <div key={industry} className="rounded-xl border border-border bg-card px-4 py-4 font-medium">
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
