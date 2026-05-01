import { MaxWidthWrapper } from "@/components";
import { BLOG_CONTENT } from "@/utils/constants/blog-content";
import blogs from "@/utils/constants/blogs.json";
import { generateMetadata as buildMetadata } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
    params: {
        slug: string;
    };
}

const formatDate = (value: string) =>
    new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(value));

export const generateStaticParams = () =>
    blogs.map((blog) => ({
        slug: blog.slug,
    }));

export const generateMetadata = ({ params }: Props): Metadata => {
    const blog = blogs.find((item) => item.slug === params.slug);

    if (!blog) {
        return buildMetadata({
            title: "Blog not found | Oracle Orbit",
            description: "The requested Oracle Orbit blog article could not be found.",
            noIndex: true,
            url: `/resources/blog/${params.slug}`,
        });
    }

    return buildMetadata({
        title: `${blog.title} | Oracle Orbit Blog`,
        description: blog.description,
        image: blog.image,
        url: `/resources/blog/${blog.slug}`,
        type: "article",
        publishedTime: blog.date_published,
        modifiedTime: blog.date_published,
        section: blog.category,
        keywords: [
            blog.category,
            "Oracle Orbit",
            "SEO",
            "website development",
            "automation",
            "performance marketing",
        ],
    });
};

const BlogPage = ({ params }: Props) => {
    const blog = blogs.find((item) => item.slug === params.slug);

    if (!blog) {
        notFound();
    }

    const content = BLOG_CONTENT[blog.slug];

    if (!content) {
        notFound();
    }

    const articleUrl = `/resources/blog/${blog.slug}`;

    return (
        <MaxWidthWrapper className="pb-24 pt-10 md:pb-32 md:pt-16">
            <article className="mx-auto flex max-w-4xl flex-col">
                <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <Link href="/resources/blog" className="font-medium text-foreground/70 transition-colors hover:text-foreground">
                        Blog
                    </Link>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{blog.category}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <time dateTime={blog.date_published}>{formatDate(blog.date_published)}</time>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{blog.read_time}</span>
                </div>

                <h1 className="text-3xl font-semibold !leading-tight md:text-5xl lg:text-6xl">
                    {blog.title}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                    {blog.description}
                </p>

                <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-muted/20 shadow-sm">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1600}
                        height={900}
                        unoptimized
                        className="h-[280px] w-full object-cover md:h-[420px]"
                    />
                </div>

                <div className="mt-12 space-y-10">
                    <section className="space-y-4">
                        <p className="text-lg leading-8 text-foreground/80">
                            {content.intro}
                        </p>
                    </section>

                    {content.sections.map((section) => (
                        <section key={section.title} className="space-y-4 border-t border-border/60 pt-8">
                            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                {section.title}
                            </h2>
                            <p className="text-base leading-8 text-muted-foreground md:text-lg">
                                {section.body}
                            </p>
                            {section.bullets ? (
                                <ul className="space-y-3 pl-6 text-base leading-7 text-muted-foreground list-disc">
                                    {section.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            ) : null}
                        </section>
                    ))}

                    <section className="rounded-3xl border border-border/60 bg-muted/20 p-6 md:p-8">
                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                            Key takeaways
                        </h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {content.takeaways.map((takeaway) => (
                                <div key={takeaway} className="rounded-2xl border border-border/60 bg-background p-4 text-sm leading-6 text-muted-foreground">
                                    {takeaway}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6 border-t border-border/60 pt-8">
                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                            Frequently asked questions
                        </h2>
                        <div className="grid gap-4">
                            {content.faq.map((item) => (
                                <div key={item.question} className="rounded-2xl border border-border/60 bg-background p-5">
                                    <h3 className="text-lg font-semibold">{item.question}</h3>
                                    <p className="mt-2 text-sm leading-7 text-muted-foreground md:text-base">
                                        {item.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-3xl border border-border/60 bg-foreground p-6 text-background md:p-8">
                        <p className="text-sm font-medium uppercase tracking-[0.28em] text-background/70">
                            Oracle Orbit
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                            Need help turning this into a real growth system?
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-background/80">
                            We can help with websites, SEO, Google Business Profile, automation, and performance marketing in one clear plan.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.01]"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/services"
                                className="rounded-full border border-background/30 px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
                            >
                                Explore services
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: blog.title,
                        description: blog.description,
                        image: `https://oracleorbit.com${blog.image}`,
                        author: {
                            "@type": "Organization",
                            name: "Oracle Orbit",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Oracle Orbit",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://oracleorbit.com/icons/logo.png",
                            },
                        },
                        datePublished: blog.date_published,
                        dateModified: blog.date_published,
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": `https://oracleorbit.com${articleUrl}`,
                        },
                    }),
                }}
            />
        </MaxWidthWrapper>
    );
};

export default BlogPage;
