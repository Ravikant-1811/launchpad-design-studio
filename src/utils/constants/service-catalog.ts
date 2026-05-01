export type ServiceFaq = {
    question: string;
    answer: string;
};

export type ServiceCatalogItem = {
    slug: string;
    title: string;
    eyebrow: string;
    description: string;
    image: string;
    intro: string;
    includes: string[];
    benefits: string[];
    faq: ServiceFaq[];
    keywords: string[];
};

export const SERVICE_CATALOG: ServiceCatalogItem[] = [
    {
        slug: "digital-marketing",
        title: "Digital marketing",
        eyebrow: "Grow",
        description: "Strategy, campaigns, and messaging that keep your marketing moving in one direction.",
        image: "/assets/services/digital-marketing.svg",
        intro: "We bring your channels together so the message is clear, the campaigns are consistent, and the growth plan is easier to follow.",
        includes: ["Campaign planning", "Channel direction", "Messaging support"],
        benefits: ["One joined-up growth plan", "Clear audience targeting", "Better campaign consistency"],
        faq: [
            {
                question: "What is included in digital marketing?",
                answer: "We help with strategy, messaging, campaigns, and channel planning so the work feels coordinated instead of scattered.",
            },
            {
                question: "Is this a one-time setup or an ongoing service?",
                answer: "It can be both. Some clients need a plan, while others want ongoing support and iteration.",
            },
        ],
        keywords: ["digital marketing", "campaign strategy", "brand messaging"],
    },
    {
        slug: "seo",
        title: "SEO",
        eyebrow: "Rank",
        description: "On-page, technical, and local SEO work that helps people find you in search.",
        image: "/assets/services/seo-gbp.svg",
        intro: "We focus on the pages, structure, and local signals that matter most when someone is already looking for a service like yours.",
        includes: ["Technical fixes", "Service page SEO", "Local visibility"],
        benefits: ["Stronger search visibility", "More relevant traffic", "Better service-page intent"],
        faq: [
            {
                question: "Do you handle local SEO too?",
                answer: "Yes. We include local optimisation where it helps the business show up for nearby customers.",
            },
            {
                question: "Do blog posts help SEO?",
                answer: "Yes, especially when they support service pages and answer questions customers are already asking.",
            },
        ],
        keywords: ["SEO", "local SEO", "technical SEO"],
    },
    {
        slug: "google-business-profile-management",
        title: "Google Business Profile management",
        eyebrow: "Local",
        description: "Profile setup, optimisation, and review support so your business looks active and trustworthy.",
        image: "/assets/services/google-business-profile.svg",
        intro: "Your profile is often the first thing people see. We make it complete, accurate, and ready to turn map views into enquiries.",
        includes: ["Category setup", "Posts and photos", "Review support"],
        benefits: ["Better local trust", "Cleaner business details", "More profile activity"],
        faq: [
            {
                question: "Why does GBP matter?",
                answer: "It helps people find you on Maps and see important business information before they visit your website.",
            },
            {
                question: "Can you help with reviews?",
                answer: "Yes. We can set up a practical review process and help you reply in a useful, human way.",
            },
        ],
        keywords: ["Google Business Profile", "GBP management", "Google Maps"],
    },
    {
        slug: "social-media-marketing",
        title: "Social media marketing",
        eyebrow: "Share",
        description: "A cleaner social presence with content direction that supports the rest of your marketing.",
        image: "/assets/services/social-media-marketing.svg",
        intro: "We help businesses stay visible on social without turning the work into daily guesswork.",
        includes: ["Content direction", "Posting support", "Brand consistency"],
        benefits: ["A clearer social voice", "More consistent posting", "Content that fits the brand"],
        faq: [
            {
                question: "Do you create the content too?",
                answer: "We can help shape the content plan and support execution depending on what you need.",
            },
            {
                question: "Which platforms do you support?",
                answer: "We focus on the platforms that matter most for the business and its audience.",
            },
        ],
        keywords: ["social media marketing", "content strategy", "brand presence"],
    },
    {
        slug: "performance-marketing",
        title: "Performance marketing",
        eyebrow: "Scale",
        description: "Campaigns, reporting, and conversion tracking that turn attention into leads and revenue.",
        image: "/assets/services/marketing.svg",
        intro: "We build campaigns around measurable outcomes so you can see what is driving calls, enquiries, and sales.",
        includes: ["Paid campaigns", "Conversion tracking", "Reporting"],
        benefits: ["Clear ROI focus", "Better lead tracking", "Campaign decisions based on data"],
        faq: [
            {
                question: "Do you manage paid ads?",
                answer: "Yes, we can help plan, launch, and improve paid campaigns with a focus on measurable outcomes.",
            },
            {
                question: "How do you measure success?",
                answer: "We look at leads, calls, enquiries, and other real business outcomes rather than clicks alone.",
            },
        ],
        keywords: ["performance marketing", "paid ads", "conversion tracking"],
    },
    {
        slug: "website-development",
        title: "Website development",
        eyebrow: "Build",
        description: "Fast, responsive websites and landing pages designed to explain your offer clearly.",
        image: "/assets/services/websites-software.svg",
        intro: "We design and build websites that feel polished, load quickly, and make it easy for a visitor to understand what you do.",
        includes: ["Landing pages", "Service pages", "Responsive build"],
        benefits: ["Clear first impression", "Better mobile experience", "Stronger conversion flow"],
        faq: [
            {
                question: "Do you build from scratch?",
                answer: "Yes, we can build from a blank slate or improve an existing website.",
            },
            {
                question: "Can the site support SEO later?",
                answer: "Absolutely. We structure it so the site can grow with SEO and new service pages.",
            },
        ],
        keywords: ["website development", "responsive website", "landing pages"],
    },
    {
        slug: "software-development",
        title: "Software development",
        eyebrow: "Build",
        description: "Custom tools, portals, and internal products tailored to your workflows.",
        image: "/assets/services/software-development.svg",
        intro: "We build simple software that fits the way your team works instead of forcing the business to adapt to the tool.",
        includes: ["Internal tools", "Client portals", "Custom workflows"],
        benefits: ["Less manual work", "Better operational fit", "Tools built around the team"],
        faq: [
            {
                question: "What kinds of software do you build?",
                answer: "Mostly lightweight business tools, portals, and workflow-focused apps.",
            },
            {
                question: "Can you integrate existing systems?",
                answer: "Yes. We can connect tools so data moves more smoothly between the systems you already use.",
            },
        ],
        keywords: ["software development", "custom tools", "client portals"],
    },
    {
        slug: "automation",
        title: "Automation",
        eyebrow: "Automate",
        description: "Workflow automations and integrations that remove repetitive work from your day.",
        image: "/assets/services/automation.svg",
        intro: "We automate the repetitive parts of the process so your team can move faster without losing control.",
        includes: ["Lead routing", "Follow-up flows", "System integrations"],
        benefits: ["Faster responses", "Fewer manual tasks", "Cleaner handoffs"],
        faq: [
            {
                question: "What is the best place to start?",
                answer: "Usually the first priority is lead follow-up or another repetitive process that eats time every day.",
            },
            {
                question: "Do you use Zapier or similar tools?",
                answer: "Yes, where it makes sense. We choose the simplest reliable setup for the job.",
            },
        ],
        keywords: ["automation", "workflow automation", "integrations"],
    },
    {
        slug: "it-services",
        title: "IT services",
        eyebrow: "Support",
        description: "Practical technical support for maintenance, setup, and everyday operations.",
        image: "/assets/services/it-services.svg",
        intro: "We help keep the technical side steady so your team can spend less time fixing issues and more time on the work that matters.",
        includes: ["Maintenance", "Troubleshooting", "Technical support"],
        benefits: ["Fewer interruptions", "More reliable systems", "Support for day-to-day operations"],
        faq: [
            {
                question: "Is this ongoing support or project-based?",
                answer: "It can be either. We can help with one-off work or ongoing support depending on your needs.",
            },
            {
                question: "Do you handle setup tasks too?",
                answer: "Yes. We can help with setup, maintenance, and the smaller technical jobs that keep things running.",
            },
        ],
        keywords: ["IT services", "technical support", "maintenance"],
    },
];

export const SERVICE_CATALOG_BY_SLUG = Object.fromEntries(
    SERVICE_CATALOG.map((service) => [service.slug, service]),
) as Record<string, ServiceCatalogItem>;
