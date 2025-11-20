"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/", type: "internal" as const },
  {
    label: "Menu",
    href: "https://order.toasttab.com/online/basil-vegan-thai",
    type: "external" as const,
  },
  { label: "About", href: "/about", type: "internal" as const },
  {
    label: "Booking",
    href: "https://rewards.vegansushilv.com/book/basil",
    type: "external" as const,
  },
  {
    label: "Rewards",
    href: "https://rewards.vegansushilv.com/scan",
    type: "external" as const,
  },
  {
    label: "Gift Card",
    href: "https://order.toasttab.com/egiftcards/basil-vegan-thai",
    type: "external" as const,
  },
  { label: "Catering", href: "/catering", type: "internal" as const },
  { label: "Contact", href: "/contact", type: "internal" as const },
  { label: "Blog", href: "/blog", type: "internal" as const },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;
      setIsDesktop(window.innerWidth >= 1024);
    };
    update();
    const onResize = () => update();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/assets/images/logos/basil-vegan-thai-logo.webp"
              alt="Basil Vegan Thai & Sushi Logo"
              className="h-10 w-10 rounded-full border border-gold/40 bg-white object-contain"
            />
            <span className="font-heading text-lg font-semibold text-teal">
              Basil Vegan Thai
            </span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-800 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.type === "internal" ? (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-orange"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                target={isDesktop ? "_blank" : "_self"}
                rel={isDesktop ? "noopener" : undefined}
                className="transition-colors hover:text-orange"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-800 shadow-sm hover:border-orange hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 lg:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <div className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="mx-auto max-w-7xl px-4 pb-4 pt-2 md:px-6 lg:px-8">
            <nav className="rounded-3xl border border-emerald-100 bg-white/95 p-4 shadow-2xl">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    {item.type === "internal" ? (
                      <Link
                        href={item.href}
                        className="flex items-center rounded-2xl px-3 py-2 text-sm font-medium text-slate-800 hover:bg-cream"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center rounded-2xl px-3 py-2 text-sm font-medium text-slate-800 hover:bg-cream"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
