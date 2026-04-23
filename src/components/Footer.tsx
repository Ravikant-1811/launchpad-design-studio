import logo from "@/assets/logo.png";
import { Globe, Mail, Github } from "lucide-react";

const projectLinks = [
  { icon: Globe, href: "https://oracleorbit.in", label: "Official website" },
  { icon: Github, href: "https://github.com/Ravikant-1811/launchpad-design-studio", label: "Project repository" },
  { icon: Mail, href: "mailto:Oracleorbit.in@gmail.com", label: "Project email" },
];

export const Footer = () => {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img src={logo} alt="Oracle Orbit logo" className="h-16 md:h-20 w-auto rounded bg-background/5 object-contain" />
          </div>
          <p className="mt-4 max-w-sm text-slate-600">
            IT development + SEO + GMB + marketing services to help your business build, rank, and grow.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Project owner: Ravikant Upadhyay
          </p>
          <div className="mt-6 flex items-center gap-3">
            {projectLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="h-10 w-10 rounded-lg bg-slate-100 text-slate-700 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#why" className="hover:text-primary transition-colors">Why us</a></li>
            <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li>Oracleorbit.in@gmail.com</li>
            <li>+91 99743 88977</li>
            <li>Vadodara, Gujarat</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Oracle Orbit. All rights reserved. Owned by Ravikant Upadhyay.</p>
          <p>Official: oracleorbit.in</p>
        </div>
      </div>
    </footer>
  );
};
