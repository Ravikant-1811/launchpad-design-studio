const faqs = [
  {
    q: "What kind of work do you do?",
    a: "We build websites, business software, and conversion-focused marketing systems. That includes SEO, GMB, digital marketing, and design support when needed.",
  },
  {
    q: "How long does a project usually take?",
    a: "It depends on the scope, but most brochure-style websites and marketing setups can move quickly once the goals and content are clear.",
  },
  {
    q: "Do you work on both development and marketing together?",
    a: "Yes. That is one of our main strengths. We keep the build, SEO, and growth strategy aligned so everything feels connected.",
  },
  {
    q: "Can you help with Google Business Profile and local visibility?",
    a: "Absolutely. We handle profile optimization, local SEO, and the content changes that help improve discoverability and inquiries.",
  },
  {
    q: "Do you offer monthly support?",
    a: "Yes. We can work on a one-time project, an ongoing monthly retainer, or a hybrid setup depending on what fits your business best.",
  },
  {
    q: "How do we get started?",
    a: "Send us your goals, current website or business details, and what you want to improve. We will share the next steps and a clear plan.",
  },
];

export const Faq = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1]">
            Frequently asked questions.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple accordion-style FAQ section that keeps the page light, clear, and easy to scan.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-[1.4rem] border border-border bg-[#f4f4f4] px-5 md:px-7 py-5 md:py-6 transition-colors open:bg-[#efefef]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-[1.05rem] md:text-[1.15rem] font-semibold leading-tight text-foreground">
                <span>{item.q}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-2xl leading-none text-foreground transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
