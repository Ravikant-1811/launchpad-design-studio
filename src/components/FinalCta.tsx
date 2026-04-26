import { Button } from "@/components/ui/button";
const phoneNumber = "919974388977";

export const FinalCta = () => {
  return (
    <section id="book-call" className="py-20 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Strong Final CTA</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Book your free strategy call.
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/70 max-w-xl">
            Tell us what you want to build or grow, and we’ll reply with a practical next step.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg" asChild>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  "Hi Oracle Orbit, I want a free strategy call."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
            <Button variant="outline-dark" size="lg" asChild>
              <a href="#contact">Contact form</a>
            </Button>
          </div>
        </div>

        <div className="rounded-2xl bg-white text-slate-900 p-6 md:p-8 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Quick action</p>
          <p className="mt-3 text-lg text-slate-600">
            One clear contact form below, plus WhatsApp for quick questions.
          </p>
          <div className="mt-6">
            <Button variant="outline-dark" size="lg" asChild>
              <a href="#contact">Open contact form</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
