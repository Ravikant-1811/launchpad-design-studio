import {
    Code2Icon,
    GlobeIcon,
    MapPinIcon,
    MegaphoneIcon,
    PenToolIcon,
    RocketIcon,
    SearchIcon,
    Share2Icon,
    ShieldCheckIcon,
    TrendingUpIcon,
    WorkflowIcon,
} from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Asana",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Tidal",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Innovaccer",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Linear",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Raycast",
        logo: "/assets/company-05.svg",
    },
    {
        name: "Labelbox",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "Audit",
        description: "We review your site, SEO, analytics, and channels to spot the biggest gaps.",
        icon: SearchIcon,
    },
    {
        title: "Plan",
        description: "We map the roadmap, keywords, GBP actions, and priorities around your goals.",
        icon: PenToolIcon,
    },
    {
        title: "Execute",
        description: "We launch, measure, and improve across design, content, automation, and ads.",
        icon: RocketIcon,
    },
] as const;

export const SERVICES = [
    {
        slug: "website-development",
        id: "websites",
        eyebrow: "Build",
        title: "Websites & software",
        description: "Conversion-ready websites, landing pages, and internal tools built to feel sharp, fast, and reliable.",
        image: "/assets/services/websites-software.svg",
        tags: ["Responsive", "Scalable", "Fast loading"],
    },
    {
        slug: "seo",
        id: "seo",
        eyebrow: "Rank",
        title: "SEO & Google Business Profile",
        description: "Local SEO, on-page optimization, and GBP tuning that help your business show up where people search.",
        image: "/assets/services/seo-gbp.svg",
        tags: ["Local SEO", "Maps", "Listings"],
    },
    {
        slug: "automation",
        id: "automation",
        eyebrow: "Automate",
        title: "Automation & integrations",
        description: "Workflow automations, lead routing, and system integrations that remove busywork from your day.",
        image: "/assets/services/automation.svg",
        tags: ["Workflows", "Zapier-ready", "Integrations"],
    },
    {
        slug: "performance-marketing",
        id: "marketing",
        eyebrow: "Grow",
        title: "Performance marketing",
        description: "Campaigns, reporting, and conversion tracking that turn attention into calls, leads, and revenue.",
        image: "/assets/services/marketing.svg",
        tags: ["Campaigns", "Tracking", "Reporting"],
    },
] as const;

export const SERVICE_GROUPS = [
    {
        id: "growth-visibility",
        badge: "Growth and visibility",
        title: "Reach more of the right people",
        description: "Everything that helps your business get found, get chosen, and get measurable demand.",
        items: [
            {
                id: "digital-marketing",
                title: "Digital marketing",
                description: "Joined-up marketing strategy, campaign planning, messaging, and channel direction that keeps the whole system moving.",
                icon: MegaphoneIcon,
                tags: ["Strategy", "Campaigns", "Messaging"],
            },
            {
                id: "seo",
                title: "SEO",
                description: "On-page, technical, and local SEO work that improves search visibility and helps the right people find you.",
                icon: SearchIcon,
                tags: ["Technical", "On-page", "Local SEO"],
            },
            {
                id: "google-business-profile-management",
                title: "Google Business Profile management",
                description: "Profile setup, optimisation, posts, services, and review support so your local presence looks active and trustworthy.",
                icon: MapPinIcon,
                tags: ["Maps", "Local pack", "Reviews"],
            },
            {
                id: "social-media-marketing",
                title: "Social media marketing",
                description: "Content direction, brand presence, and consistent posting support for businesses that need a stronger social footprint.",
                icon: Share2Icon,
                tags: ["Content", "Organic reach", "Engagement"],
            },
            {
                id: "performance-marketing",
                title: "Performance marketing",
                description: "Paid campaigns, conversion tracking, and reporting that turn attention into leads, calls, and sales.",
                icon: TrendingUpIcon,
                tags: ["Paid ads", "Tracking", "ROI"],
            },
        ],
    },
    {
        id: "build-experience",
        badge: "Build and experience",
        title: "Create a better digital foundation",
        description: "Web and software work that makes your brand faster, clearer, and more useful to customers and teams.",
        items: [
            {
                id: "website-development",
                title: "Website development",
                description: "Modern, responsive websites and landing pages designed to communicate clearly and convert better.",
                icon: GlobeIcon,
                tags: ["Responsive", "UI/UX", "Conversion"],
            },
            {
                id: "software-development",
                title: "Software development",
                description: "Custom tools, portals, and internal products tailored to your workflows, data, and delivery needs.",
                icon: Code2Icon,
                tags: ["Custom apps", "Portals", "Internal tools"],
            },
        ],
    },
    {
        id: "efficiency-support",
        badge: "Efficiency and support",
        title: "Remove friction from the business",
        description: "Automation and support services that reduce repetitive work and keep your systems reliable.",
        items: [
            {
                id: "automation",
                title: "Automation",
                description: "Workflow automations, lead routing, and system integrations that save time and reduce manual work.",
                icon: WorkflowIcon,
                tags: ["Workflows", "Integrations", "Lead routing"],
            },
            {
                id: "it-services",
                title: "IT services",
                description: "Practical technical support for setup, maintenance, troubleshooting, and the systems behind day-to-day operations.",
                icon: ShieldCheckIcon,
                tags: ["Support", "Maintenance", "Systems"],
            },
        ],
    },
] as const;

export const FEATURES = [
    {
        title: "Link shortening",
        description: "Create short links that are easy to remember and share.",
    },
    {
        title: "Advanced analytics",
        description: "Track and measure the performance of your links.",
    },
    {
        title: "Password protection",
        description: "Secure your links with a password.",
    },
    {
        title: "Custom QR codes",
        description: "Generate custom QR codes for your links.",
    },
    {
        title: "Link expiration",
        description: "Set an expiration date for your links.",
    },
    {
        title: "Team collaboration",
        description: "Share links with your team and collaborate in real-time.",
    },
] as const;

export const REVIEWS = [
    {
        name: "Rahul Sharma",
        username: "@rahulsharma",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5,
        review: "Our website feels sharper now, and the enquiries we get are much better qualified."
    },
    {
        name: "Priya Nair",
        username: "@priyanair",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 4,
        review: "The SEO and Google Business Profile work made our clinic easier to find in local search."
    },
    {
        name: "Arjun Mehta",
        username: "@arjunmehta",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 5,
        review: "Automation saved our team hours every week and removed a lot of manual follow-up."
    },
    {
        name: "Sarah Khan",
        username: "@sarahkhan",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        review: "The redesign felt simple, fast, and easy for our customers to use."
    },
    {
        name: "Vikram Iyer",
        username: "@vikramiyer",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rating: 5,
        review: "Their marketing support helped us turn more traffic into actual enquiries."
    },
    {
        name: "Emily Carter",
        username: "@emilycarter",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 4,
        review: "Communication was clear, and the work stayed focused on results."
    },
    {
        name: "Karan Kapoor",
        username: "@karankapoor",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        rating: 5,
        review: "They handled our build, SEO, and automation without making it feel complicated."
    },
    {
        name: "Neha Joshi",
        username: "@nehajoshi",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        rating: 4,
        review: "We liked the simple process and the practical suggestions."
    },
    {
        name: "Oliver James",
        username: "@oliverjames",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        rating: 5,
        review: "Oracle Orbit felt like a real partner, not just a vendor."
    },
] as const;
