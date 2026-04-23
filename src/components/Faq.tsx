const faqs = [
  {
    q: "How long does a website or development project take?",
    a: "Scope defines timeline, but most standard business websites can be launched quickly with phased delivery.",
  },
  {
    q: "When can I expect SEO and GMB improvements?",
    a: "SEO and local visibility improve over time with consistent execution. We focus on steady, trackable progress.",
  },
  {
    q: "Do you offer both development and marketing together?",
    a: "Yes. We handle build + growth in one team so your website, SEO, and campaigns stay aligned.",
  },
  {
    q: "Do you work on contract or monthly plans?",
    a: "Both options are available. We can structure project-based work or monthly growth retainers.",
  },
];

export const Faq = () => {
  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="container max-w-4xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Answers to common <span className="text-gradient-orange">questions.</span>
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-xl border border-border bg-card p-5">
              <summary className="cursor-pointer list-none text-lg font-semibold">{item.q}</summary>
              <p className="mt-3 text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
