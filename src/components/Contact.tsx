import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll get back to you within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/40">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Let's talk</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Tell us about your <span className="text-gradient-orange">next orbit.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Share a few details — we'll come back within one business day with a clear next step.
          </p>

          <ul className="mt-10 space-y-4">
            <li className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </span>
              <span className="font-medium">hello@oracleorbit.com</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </span>
              <span className="font-medium">+1 (555) 010-2025</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="font-medium">Remote-first · HQ in Bengaluru, IN</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium" htmlFor="name">Name</label>
              <Input id="name" name="name" required placeholder="Jane Doe" className="mt-2" />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="email">Email</label>
              <Input id="email" name="email" type="email" required placeholder="jane@company.com" className="mt-2" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="company">Company</label>
            <Input id="company" name="company" placeholder="Acme Inc." className="mt-2" />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="message">How can we help?</label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project, timeline and goals…"
              className="mt-2"
            />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending…" : "Send message"}
          </Button>
        </form>
      </div>
    </section>
  );
};
