import logo from "@/assets/logo.png";

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
          <p>© {new Date().getFullYear()} Oracle Orbit. All rights reserved.</p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
};
