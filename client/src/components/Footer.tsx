import { Link } from "react-router-dom";
import {
    ArrowRight, Bot, BotMessageSquare, ChevronRight, Mail, MapPin, MonitorSmartphone, Phone, Search, Star, Wrench,
} from "lucide-react";

const quick = [
    ["Home", "/"], ["About Us", "/about"], ["Services", "/services"],
    ["Case Studies", "/case-studies"], ["Blog", "/blog"], ["Contact", "/contact"],
];
const industries = [
    ["Retail & E-commerce", "retail-ecommerce"], ["Healthcare & Medical", "healthcare-medical"],
    ["Trades & Construction", "trades-construction"], ["Education & Training", "education-training"],
    ["Hospitality & Tourism", "hospitality-tourism"], ["Professional Services", "professional-services"],
];
const services = [
    ["Website Design & Development", "/services/website-design", MonitorSmartphone],
    ["Local SEO", "/services/local-seo", MapPin],
    ["Google Business Profile", "/services/google-business-profile", Star],
    ["Website Maintenance", "/services/website-maintenance", Wrench],
    ["AI Business Automation", "/services/ai-automation", BotMessageSquare],
] as const;

const social = [
    ["LinkedIn", "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"],
    ["Facebook", "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"],
    ["Instagram", "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"],
];

export default function Footer() {
    return (
        <footer className="site-footer sydney-reference-footer relative isolate overflow-hidden text-ink-foreground">
            <img src="/assets/sydney-growth-footer-C6TJ7mj4.jpg" alt="" aria-hidden="true" width={1920} height={640} className="sydney-footer-scene" />
            <div className="sydney-footer-columns">
                <div>
                    <Link to="/" className="inline-flex">
                        <img src="/growpilot-logo.png" alt="GrowPilot" width={1280} height={309} className="sydney-footer-logo" />
                    </Link>
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground">
                        We help Australian businesses grow online with professional websites, SEO, AI agents and smart digital solutions.
                    </p>
                    <ul className="mt-6 grid grid-cols-3 gap-3 text-xs font-semibold">
                        <li><MonitorSmartphone className="footer-feature-icon" />Build Websites</li>
                        <li><Search className="footer-feature-icon" />Grow on Google</li>
                        <li><Bot className="footer-feature-icon" />Automate with AI</li>
                    </ul>
                </div>

                <nav aria-label="Quick links">
                    <h2 className="sydney-footer-heading">Quick Links</h2>
                    <ul className="mt-5 space-y-3">
                        {quick.map(([name, href]) => (
                            <li key={href}>
                                <Link to={href} className="footer-nav-link"><ChevronRight className="size-4 shrink-0" />{name}</Link>
                            </li>
                        ))}
                    </ul>
                    <details className="mt-5 text-sm text-ink-muted">
                        <summary className="cursor-pointer font-semibold text-ink-foreground">Industries</summary>
                        <ul className="mt-3 space-y-2">
                            {industries.map(([name, id]) => (
                                <li key={id}><Link to={`/industries#${id}`} className="hover:text-ink-foreground">{name}</Link></li>
                            ))}
                        </ul>
                    </details>
                </nav>

                <nav aria-label="Footer services">
                    <h2 className="sydney-footer-heading">Our Services</h2>
                    <ul className="mt-5 space-y-3">
                        {services.map(([name, href, Icon]) => (
                            <li key={href}>
                                <Link to={href} className="footer-nav-link"><Icon className="size-6 shrink-0 text-primary-foreground" />{name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h2 className="sydney-footer-heading">Get in Touch</h2>
                    <ul className="mt-5 space-y-4 text-sm">
                        <li><a href="tel:+61424433169" className="footer-nav-link"><Phone className="size-6 shrink-0 text-success" />0424 433 169</a></li>
                        <li><a href="mailto:info@growpilot.au" className="footer-nav-link"><Mail className="size-6 shrink-0 text-success" />info@growpilot.au</a></li>
                        <li className="footer-nav-link"><MapPin className="size-6 shrink-0 text-success" />Sydney, NSW, Australia</li>
                    </ul>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2.5 rounded-full text-sm font-semibold transition-all duration-200 bg-[image:var(--hero-action)] text-primary-foreground shadow-md hover:brightness-105 active:scale-[0.98] h-11 px-6 mt-6 w-full whitespace-normal text-center"
                    >
                        Let’s Grow Your Business<ArrowRight className="size-4 shrink-0" />
                    </Link>
                    <p className="mt-5 font-bold">Follow Us</p>
                    <ul className="mt-3 flex gap-3" aria-label="Follow GrowPilot">
                        {social.map(([name, d]) => (
                            <li key={name}>
                                <span title={`${name} profile link not provided yet`}>
                                    <button
                                        disabled
                                        aria-label={`${name} — profile link not provided yet`}
                                        className="flex size-10 items-center justify-center rounded-lg border border-ink-foreground/25 bg-primary/30 p-0 text-ink-foreground hover:bg-primary/50"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true"><path d={d} /></svg>
                                    </button>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="sydney-footer-bottom">
                <p>© {new Date().getFullYear()} GrowPilot. All rights reserved.</p>
                <nav aria-label="Legal" className="flex flex-wrap gap-5">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms &amp; Conditions</Link>
                    <a href="/sitemap.xml">Sitemap</a>
                </nav>
            </div>
        </footer>
    );
}
