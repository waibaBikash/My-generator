import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const btn =
    "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 bg-[image:var(--hero-action)] text-primary-foreground shadow-md hover:brightness-105 active:scale-[0.98] h-9 px-4";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 shadow-sm backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-18 lg:px-8">
                <Link to="/" aria-label="GrowPilot — home" className="flex min-w-0 items-center">
                    <img src="/growpilot-logo.png" alt="GrowPilot" width={1280} height={309} className="h-auto w-40 shrink sm:w-44 lg:w-48" />
                </Link>
                <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
                    {links.map((l) => (
                        <NavLink
                            key={l.href}
                            to={l.href}
                            end={l.href === "/"}
                            className={({ isActive }) =>
                                `rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                                    isActive ? "text-primary" : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                }`
                            }
                        >
                            {l.name}
                        </NavLink>
                    ))}
                </nav>
                <div className="hidden lg:block">
                    <Link to="/contact" className={btn}>Get a Quote</Link>
                </div>
                <button
                    type="button"
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    aria-label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen((o) => !o)}
                    className="flex size-11 shrink-0 items-center justify-center rounded-md p-0 text-foreground hover:bg-accent hover:text-accent-foreground lg:hidden"
                >
                    {open ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </div>
            {open && (
                <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border/60 bg-background px-4 py-3 lg:hidden">
                    <ul className="flex flex-col gap-1">
                        {links.map((l) => (
                            <li key={l.href}>
                                <Link to={l.href} onClick={() => setOpen(false)} className="block rounded-md px-4 py-3 text-sm font-semibold text-foreground hover:bg-accent">
                                    {l.name}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Link to="/contact" onClick={() => setOpen(false)} className={`${btn} w-full`}>Get a Quote</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
