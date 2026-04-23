const stack = [
  "React",
  "WordPress",
  "TypeScript",
  "Node.js",
  "Google Analytics 4",
  "Google Search Console",
  "Google Business Profile",
  "Google Ads",
  "Meta Ads",
  "Tag Manager",
];

export const Stack = () => {
  return (
    <section id="stack" className="py-20 md:py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Tech + Marketing Stack</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Tools we use to <span className="text-gradient-orange">build and scale.</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stack.map((tool) => (
            <div key={tool} className="rounded-xl border border-border bg-card px-4 py-4 text-center font-semibold shadow-card">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
