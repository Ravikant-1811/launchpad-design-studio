import { MaxWidthWrapper } from "@/components";
import { SERVICE_CATALOG, SERVICE_CATALOG_BY_SLUG } from "@/utils/constants/service-catalog";
import { generateMetadata as buildMetadata } from "@/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    };
}

export const generateStaticParams = () =>
    SERVICE_CATALOG.map((service) => ({
        slug: service.slug,
    }));

export const generateMetadata = ({ params }: Props): Metadata => {
    const service = SERVICE_CATALOG_BY_SLUG[params.slug];

    if (!service) {
        return buildMetadata({
            title: "Service not found | Oracle Orbit",
            description: "The requested Oracle Orbit service page could not be found.",
            noIndex: true,
            url: `/services/${params.slug}`,
        });
    }

    return buildMetadata({
        title: `${service.title} | Oracle Orbit Services`,
        description: service.description,
        image: service.image,
        url: `/services/${service.slug}`,
        section: "Services",
        keywords: service.keywords,
    });
};

const ServicePage = ({ params }: Props) => {
    const service = SERVICE_CATALOG_BY_SLUG[params.slug];

    if (!service) {
        notFound();
    }

    return (
        <MaxWidthWrapper className="pb-24 pt-10 md:pb-32 md:pt-16">
            <article className="mx-auto flex max-w-5xl flex-col">
                <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <Link href="/services" className="font-medium text-foreground/70 transition-colors hover:text-foreground">
                        Services
                    </Link>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{service.eyebrow}</span>
                </div>

                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div>
                        <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
                            Oracle Orbit Service
                        </span>
                        <h1 className="mt-6 text-3xl font-semibold !leading-tight md:text-5xl lg:text-6xl">
                            {service.title}
                        </h1>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                            {service.intro}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
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

                    <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/20 shadow-sm">
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={1600}
                            height={1200}
                            unoptimized
                            className="h-[280px] w-full object-contain p-6 md:h-[420px]"
                        />
                    </div>
                </div>

                <div className="mt-12 space-y-8">
                    <section className="rounded-3xl border border-border/60 bg-background p-6 md:p-8">
                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                            What this service includes
                        </h2>
                        <div className="mt-6 grid gap-3 md:grid-cols-3">
                            {service.includes.map((item) => (
                                <div key={item} className="rounded-2xl border border-border/60 bg-muted/20 p-4 text-sm leading-6 text-muted-foreground">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="grid gap-4 md:grid-cols-3">
                        {service.benefits.map((benefit) => (
                            <div key={benefit} className="rounded-3xl border border-border/60 bg-muted/20 p-5">
                                <p className="text-base font-medium leading-7">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </section>

                    <section className="space-y-4 border-t border-border/60 pt-8">
                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                            Frequently asked questions
                        </h2>
                        <div className="grid gap-4">
                            {service.faq.map((item) => (
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
                            Need this service turned into a plan?
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-background/80">
                            We can help turn this into a clear next step for your website, visibility, and growth.
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
                                Back to services
                            </Link>
                        </div>
                    </section>
                </div>
            </article>
        </MaxWidthWrapper>
    );
};

export default ServicePage;
