import { BookOpenIcon, GlobeIcon, HelpCircleIcon, MailIcon, MegaphoneIcon, NewspaperIcon, SearchIcon, UsersIcon, WandSparklesIcon } from "lucide-react";

export const COMPANY_LINKS = [
    {
        title: "About Us",
        tagline: "Learn more about Oracle Orbit.",
        href: "/about",
        icon: NewspaperIcon,
    },
    {
        title: "Clients",
        tagline: "See who we work with.",
        href: "/clients",
        icon: UsersIcon,
    },
    {
        title: "FAQ",
        tagline: "Answers to common questions.",
        href: "/faq",
        icon: HelpCircleIcon,
    },
    {
        title: "Blog",
        tagline: "Insights, updates, and ideas.",
        href: "/resources/blog",
        icon: BookOpenIcon,
    },
    {
        title: "Contact",
        tagline: "Let’s talk about your project.",
        href: "/contact",
        icon: MailIcon,
    },
] as const;

export const SERVICE_LINKS = [
    {
        title: "Website development",
        tagline: "Fast, responsive websites and landing pages.",
        href: "/services/website-development",
        icon: GlobeIcon,
    },
    {
        title: "SEO",
        tagline: "On-page, technical, and local search work.",
        href: "/services/seo",
        icon: SearchIcon,
    },
    {
        title: "Automation",
        tagline: "Workflow automations that save time.",
        href: "/services/automation",
        icon: WandSparklesIcon,
    },
    {
        title: "Performance marketing",
        tagline: "Campaigns and tracking that drive revenue.",
        href: "/services/performance-marketing",
        icon: MegaphoneIcon,
    },
] as const;

export const NAV_LINKS = [
    {
        title: "Company",
        href: "/about",
        menu: COMPANY_LINKS,
    },
    {
        title: "Services",
        href: "/services",
        menu: SERVICE_LINKS,
    },
    {
        title: "FAQ",
        href: "/faq",
    },
    {
        title: "Blog",
        href: "/resources/blog",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];
