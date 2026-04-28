const testimonials = [
  {
    quote:
      "Oracle Orbit handled our website and local visibility in one flow, which made the whole launch feel organized and stress-free.",
    name: "Dr. Mehta",
    business: "Dental Clinic",
    city: "Vadodara",
    span: "md:row-span-2",
  },
  {
    quote:
      "Clear communication, practical ideas, and quick delivery. The team made our marketing feel a lot more focused.",
    name: "Priya Shah",
    business: "Education Institute",
    city: "Ahmedabad",
    span: "md:row-span-1",
  },
  {
    quote:
      "We needed one team for tech and lead generation. Oracle Orbit gave us both without the usual back-and-forth.",
    name: "Amit Patel",
    business: "Local Services",
    city: "Surat",
    span: "md:row-span-1",
  },
  {
    quote:
      "The process felt polished and minimal. It was easy to understand what was happening at each step, which mattered a lot for us.",
    name: "Kunal Mehta",
    business: "Real Estate",
    city: "Rajkot",
    span: "md:row-span-2",
  },
  {
    quote:
      "We finally had a website and SEO setup that felt consistent instead of stitched together from different vendors.",
    name: "Riya Desai",
    business: "Ecommerce Brand",
    city: "Ahmedabad",
    span: "md:row-span-1",
  },
  {
    quote:
      "Fast execution, clean design, and a solid understanding of both development and marketing made this a smooth partnership.",
    name: "Harsh Vora",
    business: "Professional Services",
    city: "Vadodara",
    span: "md:row-span-1",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1]">
            What our users are saying.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A clean review wall that feels lighter, more editorial, and easier to scan at a glance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[1fr]">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className={`rounded-[1.75rem] border border-border bg-white p-6 md:p-7 shadow-[0_1px_0_rgba(0,0,0,0.02),0_12px_30px_-24px_rgba(0,0,0,0.18)] ${item.span}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div>
                  <h3 className="text-lg font-semibold leading-tight">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.business} · {item.city}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[1.05rem] md:text-[1.1rem] leading-[1.45] text-foreground/90">
                {item.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
