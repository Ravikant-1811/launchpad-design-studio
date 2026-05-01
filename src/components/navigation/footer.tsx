import Link from "next/link";
import { AnimationContainer } from "@/components";
import Logo from "@/components/ui/logo";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const services = [
    { label: "Websites", href: "/services/website-development" },
    { label: "Software", href: "/services/software-development" },
    { label: "SEO", href: "/services/seo" },
    { label: "Automation", href: "/services/automation" },
];

const solutions = [
    { label: "Google Business Profile", href: "/services/google-business-profile-management" },
    { label: "Social Media Marketing", href: "/services/social-media-marketing" },
    { label: "Performance Marketing", href: "/services/performance-marketing" },
    { label: "IT Services", href: "/services/it-services" },
];

const resources = [
    { label: "Blog", href: "/resources/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
];

const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Clients", href: "/clients" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full" />

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[280px]">
                        <Link href="/" className="flex items-center">
                            <Logo variant="full" className="h-10 w-auto" />
                        </Link>
                        <p className="text-muted-foreground mt-6 text-sm leading-6 text-start">
                            Oracle Orbit builds websites, software, and automation while
                            improving visibility through SEO, Google Business Profile, and
                            performance marketing.
                        </p>
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div>
                                <h3 className="text-base font-medium text-white">Services</h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-2">
                                    {services.map((service) => (
                                        <li key={service.label}>
                                            <Link href={service.href} className="transition-all duration-300 hover:text-foreground">
                                                {service.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>

                        <AnimationContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">Solutions</h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-2">
                                    {solutions.map((solution) => (
                                        <li key={solution.label}>
                                            <Link href={solution.href} className="transition-all duration-300 hover:text-foreground">
                                                {solution.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>

                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.4}>
                            <div>
                                <h3 className="text-base font-medium text-white">Resources</h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-2">
                                    {resources.map((resource) => (
                                        <li key={resource.label}>
                                            <Link href={resource.href} className="transition-all duration-300 hover:text-foreground">
                                                {resource.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>

                        <AnimationContainer delay={0.5}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">Company</h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-2">
                                    {companyLinks.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href} className="transition-all duration-300 hover:text-foreground">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {year} Oracle Orbit. All rights reserved.
                    </p>
                </AnimationContainer>
            </div>

            <div className="h-[20rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="ORACLE" />
            </div>
        </footer>
    );
};

export default Footer;
