import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/oracle-orbit-logo.jpeg";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why us" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2" aria-label="Oracle Orbit home">
          <img src={logo} alt="Oracle Orbit logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <span className="font-display font-bold text-lg md:text-xl tracking-tight">
            Oracle <span className="text-primary">Orbit</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="hero" size="default" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium py-1"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild onClick={() => setOpen(false)}>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
