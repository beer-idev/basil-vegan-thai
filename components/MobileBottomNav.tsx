"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type IconName = "home" | "deals" | "order" | "book" | "rewards";

const NAV_ICONS: Record<IconName, ReactNode> = {
  home: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-5.5H9V21H5a1 1 0 0 1-1-1v-9.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  deals: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M4 4h7l9 8-7 8H4V4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="8" r="1" fill="currentColor" />
    </svg>
  ),
  order: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="m5 5 2 12h12l2-8H7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1" fill="currentColor" />
      <circle cx="17" cy="20" r="1" fill="currentColor" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <rect
        x="5"
        y="4"
        width="14"
        height="16"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 8h6m-6 4h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  rewards: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M6 11h12v9H6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6 11c3 0 3-4 6-4s3 4 6 4M6 11V7m12 4V7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const MOBILE_ITEMS = [
  { label: "Home", href: "/", type: "internal" as const, icon: "home" as IconName },
  {
    label: "Deals",
    href: "/promotions",
    type: "internal" as const,
    icon: "deals" as IconName,
  },
  {
    label: "Order",
    href: "https://order.toasttab.com/online/basil-vegan-thai",
    type: "external" as const,
    icon: "order" as IconName,
  },
  {
    label: "Book",
    href: "https://rewards.vegansushilv.com/book/basil",
    type: "external" as const,
    icon: "book" as IconName,
  },
  {
    label: "Rewards",
    href: "https://rewards.vegansushilv.com/scan",
    type: "external" as const,
    icon: "rewards" as IconName,
  },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-emerald-100 bg-white/95 pb-[calc(env(safe-area-inset-bottom,0px)+0.35rem)] shadow-[0_-10px_30px_rgba(15,23,42,0.12)] backdrop-blur-md md:hidden"
      role="navigation"
      aria-label="Mobile bottom navigation"
    >
      <div className="mx-auto grid w-full max-w-3xl grid-cols-5 gap-1 px-2">
        {MOBILE_ITEMS.map((item) => {
          const isActive =
            item.type === "internal" &&
            (item.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(item.href));

          const commonClasses =
            "flex flex-col items-center gap-1 rounded-2xl p-2 text-[11px] font-medium transition-all";

          const iconWrapperClasses = isActive
            ? "bg-orange/15 text-orange"
            : "bg-slate-100 text-slate-600";

          const content = (
            <>
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-2xl ${iconWrapperClasses}`}
                aria-hidden="true"
              >
                {NAV_ICONS[item.icon]}
              </span>
              <span className={isActive ? "text-slate-900" : "text-slate-600"}>
                {item.label}
              </span>
            </>
          );

          if (item.type === "internal") {
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${commonClasses} ${
                  isActive ? "bg-white shadow-lg" : "bg-transparent"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {content}
              </Link>
            );
          }

          return (
            <a
              key={item.label}
              href={item.href}
              className={`${commonClasses} bg-transparent`}
              rel="noopener"
            >
              {content}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
