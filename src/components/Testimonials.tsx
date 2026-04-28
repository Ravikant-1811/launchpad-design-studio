const testimonials = [
  {
    name: "Dr. Mehta",
    business: "Dental Clinic",
    city: "Vadodara",
    quote:
      "Oracle Orbit handled our website and local visibility in one flow, which made the whole launch feel organized and stress-free.",
  },
  {
    name: "Priya Shah",
    business: "Education Institute",
    city: "Ahmedabad",
    quote:
      "Clear communication, practical ideas, and quick delivery. The team made our marketing feel a lot more focused.",
  },
  {
    name: "Amit Patel",
    business: "Local Services",
    city: "Surat",
    quote:
      "We needed one team for tech and lead generation. Oracle Orbit gave us both without the usual back-and-forth.",
  },
  {
    name: "Kunal Mehta",
    business: "Real Estate",
    city: "Rajkot",
    quote:
      "The process felt polished and minimal. It was easy to understand what was happening at each step, which mattered a lot for us.",
  },
  {
    name: "Riya Desai",
    business: "Ecommerce Brand",
    city: "Ahmedabad",
    quote:
      "We finally had a website and SEO setup that felt consistent instead of stitched together from different vendors.",
  },
  {
    name: "Harsh Vora",
    business: "Professional Services",
    city: "Vadodara",
    quote:
      "Fast execution, clean design, and a solid understanding of both development and marketing made this a smooth partnership.",
  },
  {
    name: "Neha Kapoor",
    business: "Clinic Group",
    city: "Surat",
    quote:
      "The brand, website, and Google Business Profile finally looked like they belonged to the same company.",
  },
  {
    name: "Nikhil Jain",
    business: "Manufacturing",
    city: "Vadodara",
    quote:
      "They simplified a messy digital setup into something easy to manage and easier for customers to trust.",
  },
  {
    name: "Pooja Soni",
    business: "Local Store",
    city: "Bharuch",
    quote:
      "We wanted something clean and premium. The final result felt modern without being overdesigned.",
  },
  {
    name: "Rahul Thakkar",
    business: "Consulting",
    city: "Mumbai",
    quote:
      "Oracle Orbit gave us a stronger online presence and a much smoother process for handling leads and inquiries.",
  },
];

const avatarTones = [
  "from-zinc-200 to-zinc-400",
  "from-zinc-100 to-zinc-300",
  "from-zinc-300 to-zinc-500",
  "from-zinc-200 to-zinc-500",
  "from-zinc-100 to-zinc-400",
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1]">
            What our clients are saying.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A masonry review wall with a lighter feel, softer borders, and a more editorial rhythm.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-6 md:columns-2 xl:columns-4">
          {testimonials.map((item, index) => (
            <article
              key={`${item.name}-${item.city}`}
              className="mb-6 break-inside-avoid rounded-[1.75rem] border border-border bg-white p-6 md:p-7 shadow-[0_1px_0_rgba(0,0,0,0.02),0_16px_40px_-30px_rgba(0,0,0,0.24)]"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${
                    avatarTones[index % avatarTones.length]
                  } text-sm font-semibold text-foreground`}
                >
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-tight">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.business} · {item.city}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[1.05rem] md:text-[1.1rem] leading-[1.55] text-foreground/90">
                {item.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
