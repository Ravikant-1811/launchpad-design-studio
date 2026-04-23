const testimonials = [
  {
    quote: "Their team handled both our website revamp and local SEO, so everything stayed aligned and smooth.",
    name: "Dr. Mehta",
    business: "Dental Clinic",
    city: "Vadodara",
  },
  {
    quote: "Clear communication, practical marketing ideas, and fast execution from planning to launch.",
    name: "Priya Shah",
    business: "Education Institute",
    city: "Ahmedabad",
  },
  {
    quote: "We needed one team for tech and lead generation. Oracle Orbit delivered exactly that.",
    name: "Amit Patel",
    business: "Local Services Business",
    city: "Surat",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-muted/40">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            What clients say about <span className="text-gradient-orange">working with us.</span>
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="text-foreground/90">"{item.quote}"</p>
              <p className="mt-5 font-bold">{item.name}</p>
              <p className="text-sm text-muted-foreground">
                {item.business} · {item.city}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
