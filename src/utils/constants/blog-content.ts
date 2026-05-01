export type BlogSection = {
    title: string;
    body: string;
    bullets?: string[];
};

export type BlogFAQ = {
    question: string;
    answer: string;
};

export type BlogContent = {
    intro: string;
    sections: BlogSection[];
    takeaways: string[];
    faq: BlogFAQ[];
};

export const BLOG_CONTENT: Record<string, BlogContent> = {
    "how-to-turn-your-website-into-a-lead-engine": {
        intro: "A strong website should do more than look polished. It should explain what you do, build trust quickly, and give visitors a clear path to enquire.",
        sections: [
            {
                title: "Start with a single conversion goal",
                body: "Every important page should move one visitor toward one action. For Oracle Orbit clients, that usually means a call, an enquiry form, or a direct booking. When the goal is clear, the copy, layout, and calls-to-action can all work together instead of competing for attention.",
            },
            {
                title: "Show proof before you sell",
                body: "Testimonials, case studies, before-and-after results, and local trust signals are the fastest way to reduce doubt. The more the visitor sees that you have solved a similar problem before, the easier it becomes for them to act now instead of leaving to compare options.",
            },
            {
                title: "Support SEO with useful page structure",
                body: "A lead-focused website still needs search visibility. That means fast performance, clear heading hierarchy, service pages that match search intent, and internal links that help both people and search engines understand your site.",
            },
        ],
        takeaways: [
            "Keep one primary CTA visible on every major page.",
            "Place proof and outcomes above the fold whenever possible.",
            "Treat service pages like landing pages with a clear search intent.",
        ],
        faq: [
            {
                question: "What makes a website generate more leads?",
                answer: "Clarity, trust, speed, and a strong call-to-action. Visitors should know what you do and what happens next within seconds.",
            },
            {
                question: "Do I need separate pages for each service?",
                answer: "Yes. Separate pages improve SEO and make it easier to match specific search queries with the right offer.",
            },
            {
                question: "How often should a website be updated?",
                answer: "Review the site regularly, but focus on meaningful updates like better copy, stronger proof, and improved service pages rather than constant cosmetic changes.",
            },
        ],
    },
    "google-business-profile-basics-that-actually-move-the-needle": {
        intro: "Google Business Profile is one of the fastest ways to earn local visibility, but only when the listing is set up with care and maintained consistently.",
        sections: [
            {
                title: "Get the category and services right",
                body: "The primary category does a lot of heavy lifting. Add the most accurate category available, then support it with well-written service descriptions so Google can confidently connect your profile to the right searches.",
                bullets: [
                    "Choose the closest primary category, not the broadest one.",
                    "Add services with descriptive, keyword-aligned language.",
                    "Keep business hours, phone numbers, and address details consistent.",
                ],
            },
            {
                title: "Use posts and photos to show activity",
                body: "A quiet profile feels neglected. Short posts, fresh photos, and occasional updates show that the business is active, responsive, and ready for customers. This is especially important for service businesses competing in busy local markets.",
            },
            {
                title: "Turn reviews into a ranking asset",
                body: "Ask for reviews consistently and reply to them in a helpful, human way. Review velocity and quality both matter, but the real goal is to make the profile feel trustworthy before a person ever clicks through to the website.",
            },
        ],
        takeaways: [
            "Make sure the profile matches your website naming and contact details.",
            "Keep the services list aligned with what you actually sell.",
            "Post fresh content so the profile does not look abandoned.",
        ],
        faq: [
            {
                question: "How often should I update my Google Business Profile?",
                answer: "At least monthly for posts and whenever your services, hours, or contact information change.",
            },
            {
                question: "Do reviews really help local SEO?",
                answer: "Yes. Reviews help with trust, relevance, and local visibility, especially when the replies are thoughtful and specific.",
            },
            {
                question: "Should I put keywords in my business name?",
                answer: "No. Use your real business name. Focus on categories, services, and profile completeness instead.",
            },
        ],
    },
    "the-connect-innovate-elevate-framework-for-growth": {
        intro: "Oracle Orbit uses Connect, Innovate, Elevate as a simple way to describe how marketing, websites, automation, and support work together.",
        sections: [
            {
                title: "Connect the right systems",
                body: "Connection is about putting the important pieces in place: a clear website, a working enquiry flow, search visibility, and a way to capture leads without losing context. When these basics connect, the rest of the strategy becomes easier to measure.",
            },
            {
                title: "Innovate with practical improvements",
                body: "Innovation does not need to be flashy. Often the biggest wins come from better page structure, stronger service positioning, automation that saves time, or a landing page that speaks more clearly to the audience.",
            },
            {
                title: "Elevate with consistent execution",
                body: "The final step is improving what already works. That means publishing useful content, refining campaigns, tightening the sales process, and reviewing results so the business keeps moving forward instead of stalling after the first launch.",
            },
        ],
        takeaways: [
            "Connect your website, SEO, and lead flow before scaling spend.",
            "Innovate with improvements that reduce friction for buyers.",
            "Elevate through steady execution, measurement, and refinement.",
        ],
        faq: [
            {
                question: "Is Connect, Innovate, Elevate a marketing framework?",
                answer: "Yes. It is a simple way to think about building systems that attract, convert, and grow a business together.",
            },
            {
                question: "Can this framework work for small businesses?",
                answer: "Absolutely. It is often most effective for small businesses that need a clear and affordable growth plan.",
            },
            {
                question: "What services fit inside this framework?",
                answer: "Website development, SEO, Google Business Profile optimisation, automation, and performance marketing all fit naturally inside it.",
            },
        ],
    },
    "automation-ideas-that-save-teams-hours-every-week": {
        intro: "Automation is most valuable when it removes repetitive work from the team and makes follow-up faster, not when it adds extra tools for the sake of it.",
        sections: [
            {
                title: "Automate lead routing and follow-up",
                body: "When a form submission comes in, the right person should know immediately. Route leads by service type, send fast acknowledgment emails, and create reminders so opportunities do not disappear in inboxes or spreadsheets.",
            },
            {
                title: "Connect the tools you already use",
                body: "Most teams do not need more software. They need the software they already pay for to talk to each other. Practical automations often sit between the website, CRM, email, calendar, and reporting dashboards.",
                bullets: [
                    "Send form data to the CRM automatically.",
                    "Create calendar tasks from qualified enquiries.",
                    "Trigger reporting updates on a regular schedule.",
                ],
            },
            {
                title: "Keep humans in control",
                body: "Good automation makes the team faster, but it should still leave room for review, exceptions, and judgment. The best workflows save time without making the process feel robotic to the customer.",
            },
        ],
        takeaways: [
            "Start with the highest-volume repetitive task.",
            "Automate only after the process is clear.",
            "Use automation to create speed and consistency, not complexity.",
        ],
        faq: [
            {
                question: "What is the best first automation for a small business?",
                answer: "Lead follow-up is usually the highest-impact place to start because it directly affects response time and conversion.",
            },
            {
                question: "Do automations need expensive software?",
                answer: "Not always. Many useful workflows can be built with tools you already use or low-cost integrations.",
            },
            {
                question: "How do I know if an automation is worth it?",
                answer: "If it saves time, reduces mistakes, or helps you respond faster to prospects, it is probably worth the build.",
            },
        ],
    },
    "seo-priorities-for-small-businesses-in-2026": {
        intro: "SEO for small businesses works best when the priorities are practical: fix the technical base, improve the service pages, and build local trust where customers are already searching.",
        sections: [
            {
                title: "Make the site technically solid",
                body: "Before chasing content ideas, make sure the site loads quickly, is mobile-friendly, uses proper metadata, and does not bury important pages behind confusing navigation. Technical issues can quietly weaken every other SEO effort.",
            },
            {
                title: "Create pages that match search intent",
                body: "Service pages should answer the exact problem a searcher is trying to solve. The more directly your page speaks to the intent behind the query, the more useful it becomes for both rankings and conversions.",
            },
            {
                title: "Blend local SEO with brand trust",
                body: "For service businesses, Google Business Profile, reviews, local mentions, and service-area clarity matter just as much as on-page keywords. SEO is strongest when the search result, the profile, and the website all tell the same story.",
            },
        ],
        takeaways: [
            "Fix technical basics before scaling content.",
            "Build service pages around real search intent.",
            "Use local trust signals to support rankings and conversions.",
        ],
        faq: [
            {
                question: "What should small businesses focus on first for SEO?",
                answer: "Technical health, core service pages, and Google Business Profile basics usually deliver the fastest value.",
            },
            {
                question: "Do blog posts help SEO?",
                answer: "Yes, especially when they support service pages, answer real questions, and link into the rest of the site.",
            },
            {
                question: "Is local SEO different from regular SEO?",
                answer: "It overlaps with regular SEO, but it puts more weight on maps visibility, reviews, local relevance, and profile management.",
            },
        ],
    },
};
