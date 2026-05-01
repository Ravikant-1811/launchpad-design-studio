import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { SERVICE_CATALOG } from "@/utils/constants/service-catalog";
import { generateMetadata } from "@/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export const metadata: Metadata = generateMetadata({
    title: "Oracle Orbit Services | Websites, SEO, automation, and marketing",
    description: "Explore Oracle Orbit services for websites, SEO, Google Business Profile, social media, automation, software, IT, and performance marketing.",
    image: "/assets/services/websites-software.svg",
    url: "/services",
    keywords: [
        "Oracle Orbit services",
        "website development",
        "SEO",
        "Google Business Profile",
        "automation",
        "performance marketing",
    ],
});

const ServicesPage = () => {
    return (
        <MaxWidthWrapper className="py-16 md:py-20">
            <AnimationContainer delay={0.1}>
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
                        Services
                    </span>
                    <h1 className="mt-6 text-3xl font-semibold !leading-tight md:text-5xl lg:text-6xl">
                        Simple services for websites, SEO, automation, and marketing.
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                        A straightforward list of the services Oracle Orbit offers, each with its own page, clear purpose, and practical outcome.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2} className="mt-14">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {SERVICE_CATALOG.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group overflow-hidden rounded-[30px] border border-border/60 bg-background shadow-[0_24px_70px_-24px_rgba(15,23,42,0.16)] transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden border-b border-border/50 bg-muted/20">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    priority={service.slug === "website-development"}
                                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                                <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground shadow-sm backdrop-blur">
                                    {service.eyebrow}
                                </div>
                            </div>

                            <div className="p-6">
                                <h2 className="text-2xl font-semibold leading-tight">
                                    {service.title}
                                </h2>
                                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {service.description}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {service.includes.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-border/70 bg-muted/20 px-3 py-1 text-xs font-medium text-foreground/75"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.3}>
                <div className="mt-16 flex justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/50"
                    >
                        Talk to Oracle Orbit
                        <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default ServicesPage;
