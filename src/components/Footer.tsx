import logo from "@/assets/logo.png";
import { Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img src={logo} alt="Oracle Orbit logo" className="h-16 md:h-20 w-auto rounded bg-background/5 object-contain" />
          </div>
          <p className="mt-4 max-w-sm text-secondary-foreground/70">
            Connect. Innovate. Elevate. — your IT partner for software, cloud, AI and data.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="h-10 w-10 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-secondary-foreground/70">
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#why" className="hover:text-primary transition-colors">Why us</a></li>
            <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-secondary-foreground/70">
            <li>Oracleorbit.in@gmail.com</li>
            <li>+91 99743 88977</li>
            <li>Vadodara, Gujarat</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Oracle Orbit. All rights reserved.</p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
};
