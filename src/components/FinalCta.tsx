import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

const phoneNumber = "919974388977";

export const FinalCta = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hi Oracle Orbit, I want a free strategy call.\n\nName: ${name}\nPhone: ${phone}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

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
              <a href="#book-call">Quick lead form</a>
            </Button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl bg-white text-slate-900 p-6 md:p-8 shadow-card space-y-4">
          <div>
            <label htmlFor="cta-name" className="text-sm font-medium">Name</label>
            <input
              id="cta-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="cta-phone" className="text-sm font-medium">Phone</label>
            <input
              id="cta-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Your phone number"
              required
            />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full">
            Request callback
          </Button>
        </form>
      </div>
    </section>
  );
};
