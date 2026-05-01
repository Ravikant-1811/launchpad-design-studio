import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { SERVICES, cn } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cardThemes = [
    {
        panel: "from-violet-500/20 via-white/5 to-fuchsia-500/10",
        glow: "bg-violet-500/25",
    },
    {
        panel: "from-sky-500/20 via-white/5 to-cyan-500/10",
        glow: "bg-sky-500/25",
    },
    {
        panel: "from-emerald-500/20 via-white/5 to-lime-500/10",
        glow: "bg-emerald-500/25",
    },
    {
        panel: "from-amber-500/20 via-white/5 to-rose-500/10",
        glow: "bg-amber-500/25",
    },
] as const;

const collageLayout = [
    "xl:col-span-4 xl:min-h-[30rem]",
    "xl:col-span-8 xl:min-h-[30rem]",
    "xl:col-span-8 xl:min-h-[30rem]",
    "xl:col-span-4 xl:min-h-[30rem]",
] as const;

interface ServicesSectionProps {
    badge?: string;
    title: string;
    description: string;
    ctaLabel?: string;
    ctaHref?: string;
    className?: string;
}

const ServicesSection = ({
    badge = "Services",
    title,
    description,
    ctaLabel,
    ctaHref = "/services",
    className,
}: ServicesSectionProps) => {
    return (
        <section className={cn("relative overflow-hidden bg-neutral-950 py-20 text-white md:py-24", className)}>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_28%)]" />
            <MaxWidthWrapper className="relative">
                <AnimationContainer delay={0.1}>
                    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
                        <span className="inline-flex h-9 items-center rounded-full border border-white/15 bg-white/5 px-4 text-sm font-medium text-white/80 backdrop-blur-sm">
                            {badge}
                        </span>
                        <h2 className="mt-6 text-3xl font-medium leading-[1.05] text-balance font-heading md:text-5xl">
                            {title}
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 text-balance md:text-lg">
                            {description}
                        </p>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2}>
                    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
                        {SERVICES.map((service, index) => {
                            const theme = cardThemes[index % cardThemes.length];

                            return (
                                <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className={cn("group block h-full", collageLayout[index])}
                                >
                                    <article
                                        className={cn(
                                            "flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10",
                                            "bg-white/[0.04] shadow-[0_30px_80px_-35px_rgba(0,0,0,0.85)] backdrop-blur-sm",
                                            "transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-white/20",
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "relative flex min-h-[18rem] items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br",
                                                theme.panel,
                                            )}
                                        >
                                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_45%)]" />
                                            <div className={cn("pointer-events-none absolute right-[-14%] top-[-16%] h-56 w-56 rounded-full blur-3xl", theme.glow)} />
                                            <div className={cn("pointer-events-none absolute left-[-12%] bottom-[-14%] h-48 w-48 rounded-full blur-3xl", theme.glow)} />

                                            <div className="relative z-10 h-[72%] w-[72%] max-w-[24rem]">
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    fill
                                                    priority={index === 0}
                                                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                                                />
                                            </div>

                                            <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/90 backdrop-blur-md">
                                                {service.eyebrow}
                                            </div>
                                        </div>

                                        <div className="flex flex-1 flex-col p-6 md:p-7">
                                            <h3 className="text-[1.75rem] font-semibold leading-tight text-white font-heading">
                                                {service.title}
                                            </h3>
                                            <p className="mt-3 max-w-md text-sm leading-6 text-white/62">
                                                {service.description}
                                            </p>
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {service.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            );
                        })}
                    </div>
                </AnimationContainer>

                {ctaLabel ? (
                    <AnimationContainer delay={0.3}>
                        <div className="mt-10 flex justify-center">
                            <Link
                                href={ctaHref}
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10"
                            >
                                {ctaLabel}
                                <ArrowRightIcon className="h-4 w-4" />
                            </Link>
                        </div>
                    </AnimationContainer>
                ) : null}
            </MaxWidthWrapper>
        </section>
    );
};

export default ServicesSection;
