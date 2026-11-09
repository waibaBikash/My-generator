import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight, Award, Bot, CalendarDays, CircleCheck, ClipboardList, CodeXml, Gem, Headphones, Laptop,
    MapPin, MonitorSmartphone, Rocket, Search, Settings, Target, TrendingUp, Users, Zap,
    type LucideIcon,
} from "lucide-react";

type From = "up" | "left" | "right";

const hidden: Record<From, string> = { up: "translate-y-6", left: "-translate-x-10", right: "translate-x-10" };
const shown: Record<From, string> = { up: "translate-y-0", left: "translate-x-0", right: "translate-x-0" };

function Reveal({ from = "up", delay = 0, className = "", children }: { from?: From; delay?: number; className?: string; children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.1 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`min-w-0 transition-[opacity,transform,translate] duration-700 ease-out ${
                visible ? `${shown[from]} opacity-100` : `${hidden[from]} opacity-0`
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

const btn =
    "inline-flex items-center justify-center gap-2.5 whitespace-nowrap text-sm font-semibold transition-all duration-200 bg-[image:var(--hero-action)] text-primary-foreground shadow-md hover:brightness-105 active:scale-[0.98] h-11 px-6 rounded-full";
const eyebrow = "text-xs font-bold uppercase tracking-[0.2em] text-primary";

const heroLabels: [string, string, LucideIcon][] = [
    ["AI Agents", "/ai-agents", Bot],
    ["Website Development", "/website-development", MonitorSmartphone],
    ["SEO Growth", "/seo", Search],
    ["Automation", "/services/ai-automation", Settings],
];

const quickCards: [string, string, LucideIcon, string][] = [
    ["Website Development", "Modern, responsive and conversion-focused websites.", CodeXml, "text-primary"],
    ["Google Growth (SEO)", "Improve your visibility and attract more customers.", Search, "text-brand"],
    ["Automation & Tools", "Streamline operations and save valuable time.", Settings, "text-primary"],
    ["Ongoing Support", "Reliable, friendly support to keep your business growing.", Headphones, "text-primary"],
];

const services: [string, string, string, LucideIcon, string][] = [
    ["AI Agents", "Custom AI agents that handle enquiries, bookings and customer support 24/7.", "/ai-agents", Bot, "text-accent"],
    ["Website Development", "Modern, high-converting websites that look great and drive real results.", "/website-development", MonitorSmartphone, "text-primary"],
    ["SEO & Google Growth", "Get found on Google, attract more qualified leads and grow your revenue.", "/seo", Search, "text-brand"],
    ["Automation", "Streamline your business with smart automations that save time and reduce costs.", "/services/ai-automation", Settings, "text-primary"],
    ["Digital Strategy", "A clear, data-driven growth plan to help you win online and stay ahead.", "/services", Target, "text-brand"],
];

const why: [string, string, LucideIcon][] = [
    ["End-to-End Expertise", "Strategy, website, SEO, AI and automation in one team.", Gem],
    ["Growth-Focused", "Everything we do is built around more traffic, leads and revenue.", Users],
    ["Transparent & Flexible", "Clear pricing, no lock-in contracts and a partnership you can trust.", Zap],
    ["Local & Responsive", "An Australian team that's easy to reach and quick to act.", Award],
];

const process: [string, string, LucideIcon][] = [
    ["Discover", "Understand your goals, customers and opportunities.", ClipboardList],
    ["Plan", "Create a tailored digital growth strategy.", Target],
    ["Build", "Design, develop and set up the right solutions.", Laptop],
    ["Grow", "Drive traffic, leads and ongoing improvements.", Rocket],
];

const posts = [
    { title: "How to Get More Customers From Google in Sydney", date: "10 Aug 2026", tag: "SEO & Google", img: "/assets/blog-seo-HuAktal1.jpg", href: "/blog/get-more-customers-from-google-sydney" },
    { title: "How Much Does a Business Website Cost in Sydney?", date: "3 Aug 2026", tag: "Website Design", img: "/assets/service-web-Ci9UD7Xc.jpg", href: "/blog/business-website-cost-sydney" },
    { title: "Why Your Business Isn't Showing on Google", date: "27 Jul 2026", tag: "SEO & Google", img: "/assets/advisor-robot-DHxCz7sn.jpg", href: "/blog/why-your-business-isnt-showing-on-google" },
];

export default function HomePage() {
    return (
        <>
            <section className="home-hero sydney-home-hero">
                <img
                    src="/assets/sydney-growth-hero-Bs1w1b1x.jpg"
                    alt="Sydney Harbour with a laptop, phone and friendly AI assistant"
                    width={1368}
                    height={768}
                    loading="eager"
                    className="sydney-hero-scene"
                />
                <div className="home-hero-stage">
                    <div className="home-hero-copy animate-fade-up">
                        <p className="hero-eyebrow">AI-Powered Digital Growth Agency in Sydney</p>
                        <h1 className="home-hero-heading">
                            Smarter Websites.<br />Higher Rankings.<br />
                            <span className="growth-infinite">More Growth.</span>
                        </h1>
                        <p className="home-hero-description">
                            Build your online presence with GrowPilot. We help Australian businesses create professional websites, improve Google search visibility, and simplify everyday operations with AI-powered tools and automation.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <Link to="/contact" className={`${btn} consultation-cta`}>
                                Get Your Free Website Consultation<ArrowRight className="size-4 shrink-0" />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 border border-primary/40 bg-card/80 text-primary hover:bg-accent active:scale-[0.98] h-11 px-6"
                            >
                                Explore Our Services
                            </Link>
                        </div>
                        <p className="sydney-location">
                            <MapPin className="size-6 shrink-0 text-brand" />
                            <span>
                                <strong>Sydney, Australia</strong>
                                <span className="block text-xs">Modern Websites · Smart SEO · AI Automation · Digital Growth</span>
                            </span>
                        </p>
                    </div>
                    <nav className="sydney-hero-labels" aria-label="Featured services">
                        {heroLabels.map(([name, href, Icon]) => (
                            <Link key={href} to={href}><Icon />{name}</Link>
                        ))}
                    </nav>
                </div>
            </section>

            <div className="bg-gradient-to-b from-background via-mist/60 to-background">
                <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
                    <Reveal className="grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-lg sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
                        {quickCards.map(([title, text, Icon, color]) => (
                            <div key={title} className="text-center lg:px-4">
                                <Icon className={`mx-auto size-10 ${color}`} />
                                <h3 className="mt-3 font-bold text-foreground">{title}</h3>
                                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                            </div>
                        ))}
                    </Reveal>

                    <div className="grid items-center gap-10 py-16 lg:grid-cols-2">
                        <Reveal from="left">
                            <img src="/assets/about-team-eDtp0aiJ.jpg" alt="GrowPilot team collaborating around a laptop" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
                        </Reveal>
                        <Reveal from="right">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">About GrowPilot</span>
                            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">Your Digital Growth Partner</h2>
                            <p className="mt-4 text-muted-foreground">
                                GrowPilot is a Sydney-based digital agency that helps businesses build a strong online presence, rank higher on Google and achieve real, measurable growth.
                            </p>
                            <ul className="mt-5 space-y-2">
                                {["Strategy-driven solutions", "Transparent communication", "Results that matter"].map((t) => (
                                    <li key={t} className="flex items-center gap-2 text-foreground"><CircleCheck className="size-5 text-brand" />{t}</li>
                                ))}
                            </ul>
                            <Link to="/about" className={`${btn} mt-7`}>Learn More About Us<ArrowRight className="size-4" /></Link>
                        </Reveal>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className={eyebrow}>Our Services</p>
                        <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Complete Digital <span className="text-brand">Growth Solutions</span></h2>
                        <p className="mt-3 text-muted-foreground">A full-service agency that builds, ranks and grows your business online.</p>
                    </div>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {services.map(([title, text, href, Icon, color], i) => (
                            <Reveal key={title} delay={i * 60} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg">
                                <Icon className={`size-10 ${color}`} />
                                <h3 className="mt-4 text-xl font-bold text-foreground">{title}</h3>
                                <p className="mt-2 flex-1 text-sm text-muted-foreground">{text}</p>
                                <Link to={href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                                    Learn More<span className="sr-only"> about {title}</span><ArrowRight className="size-4" />
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </section>

                <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
                    <Reveal from="left">
                        <p className={eyebrow}>Why Choose GrowPilot</p>
                        <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">A Growth Partner for Ambitious <span className="text-brand">Australian Businesses</span></h2>
                        <p className="mt-3 text-muted-foreground">More than a website agency — we're your long-term digital growth partner, focused on real business outcomes.</p>
                    </Reveal>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {why.map(([title, text, Icon], i) => (
                            <Reveal key={title} from="right" delay={i * 60} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                                <Icon className="size-8 text-primary" />
                                <h3 className="mt-3 font-bold text-foreground">{title}</h3>
                                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                            </Reveal>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <Reveal className="grid items-center gap-8 rounded-3xl border border-border bg-mist p-6 shadow-sm sm:p-10 lg:grid-cols-3">
                        <div>
                            <p className={eyebrow}>Featured Project</p>
                            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">How We Help a Local Business <span className="text-brand">Grow More Leads</span></h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                A professional website, targeted Google growth strategy and smart automation working together to turn visitors into qualified enquiries.
                            </p>
                            <Link to="/case-studies" className={`${btn} mt-6`}>View Case Studies<ArrowRight className="size-4" /></Link>
                        </div>
                        <img src="/assets/work-website-OcKQKU1t.jpg" alt="Example home-services website shown on a laptop" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
                        <div className="rounded-2xl bg-card p-6 shadow-sm">
                            <div className="grid grid-cols-3 gap-2 text-center">
                                {["Qualified Leads", "Organic Traffic", "ROI"].map((t) => (
                                    <div key={t}>
                                        <TrendingUp className="mx-auto size-6 text-brand" />
                                        <p className="mt-1 text-xs font-semibold text-foreground">{t}</p>
                                    </div>
                                ))}
                            </div>
                            <svg viewBox="0 0 300 120" className="mt-4 w-full" aria-hidden="true">
                                <defs>
                                    <linearGradient id="hs-g" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0" stopColor="var(--brand)" stopOpacity=".45" />
                                        <stop offset="1" stopColor="var(--brand)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 110 L40 95 L80 88 L120 80 L160 70 L200 55 L240 45 L280 20 L300 5 L300 120 L0 120Z" fill="url(#hs-g)" />
                                <path d="M0 110 L40 95 L80 88 L120 80 L160 70 L200 55 L240 45 L280 20 L300 5" fill="none" stroke="var(--brand)" strokeWidth="3" />
                            </svg>
                            <p className="mt-2 text-xs text-muted-foreground">What we track for every client — illustrative chart.</p>
                        </div>
                    </Reveal>
                </section>

                <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_3fr] lg:px-8">
                    <Reveal from="left">
                        <p className={eyebrow}>Our Process</p>
                        <h2 className="mt-2 text-3xl font-bold text-foreground">A Simple, Proven Growth Process</h2>
                        <p className="mt-3 text-muted-foreground">A clear, collaborative process that takes you from strategy to measurable results.</p>
                    </Reveal>
                    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {process.map(([title, text, Icon], i) => (
                            <li key={title} className="list-none">
                                <Reveal from="right" delay={i * 80} className="text-center">
                                    <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="size-7" /></span>
                                    <h3 className="mt-3 font-bold text-foreground">{i + 1}. {title}</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                                </Reveal>
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_3fr] lg:px-8">
                    <Reveal from="left">
                        <p className={eyebrow}>Latest Insights</p>
                        <h2 className="mt-2 text-3xl font-bold text-foreground">Tips, Strategies &amp; Growth Insights</h2>
                        <p className="mt-3 text-muted-foreground">Practical ideas to help you get more from your website, Google and AI.</p>
                        <Link to="/blog" className={`${btn} mt-6`}>View All Blog Posts<ArrowRight className="size-4" /></Link>
                    </Reveal>
                    <div className="grid gap-5 md:grid-cols-3">
                        {posts.map((p, i) => (
                            <Reveal key={p.href} from="right" delay={i * 80}>
                                <Link to={p.href} className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-lg">
                                    <img src={p.img} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
                                    <div className="p-4">
                                        <h3 className="font-bold text-foreground group-hover:text-primary">{p.title}</h3>
                                        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                                            <CalendarDays className="size-4" />{p.date}
                                            <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">{p.tag}</span>
                                            <ArrowRight className="ml-auto size-4" />
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
                    <Reveal className="home-cta-band flex flex-col items-start gap-6 rounded-3xl p-8 text-primary-foreground shadow-lg sm:p-10 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h2 className="text-2xl font-bold sm:text-3xl">Ready to Grow Your Business Online?</h2>
                            <p className="mt-2 max-w-xl opacity-90">
                                Get a free, no-obligation growth plan with practical recommendations for your website, Google visibility and overall digital marketing.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-background px-5 py-3 font-semibold text-foreground">
                                Get a Free Growth Plan<ArrowRight className="size-4" />
                            </Link>
                            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/70 px-5 py-3 font-semibold">
                                <CalendarDays className="size-4" />Book a Consultation
                            </Link>
                        </div>
                    </Reveal>
                </section>
            </div>
        </>
    );
}
