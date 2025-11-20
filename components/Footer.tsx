import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:px-6 lg:px-8">
        <div className="space-y-4 md:w-1/3">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/logos/basil-vegan-thai-logo.webp"
              alt="Basil Vegan Thai & Sushi Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border border-gold/40 bg-white object-contain"
            />
            <span className="font-heading text-lg font-semibold text-white">
              Basil Vegan Thai
            </span>
          </div>
          <p className="max-w-xs text-sm text-slate-300">
            Authentic, 100% plant-based Thai cuisine and sushi in Henderson&apos;s
            Green Valley neighborhood.
          </p>
          <div className="space-y-1 text-sm text-slate-300">
            <p>500 E Windmill Ln #145</p>
            <p>Henderson, NV 89123</p>
            <p>
              Phone:{" "}
              <a
                href="tel:+17023573837"
                className="font-medium text-orange hover:text-amber-300"
              >
                (702) 357-3837
              </a>
            </p>
          </div>
          <div className="flex gap-3 pt-2 text-slate-300">
            <a
              href="https://www.instagram.com/basilveganthai/"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-xs hover:border-orange hover:text-orange"
            >
              IG
            </a>
            <a
              href="https://www.facebook.com/632759023257479"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-xs hover:border-orange hover:text-orange"
            >
              FB
            </a>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-orange">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange">
                  About
                </Link>
              </li>
              <li>
                <Link href="/catering" className="hover:text-orange">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Order & Reserve
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="https://order.toasttab.com/online/basil-vegan-thai"
                  className="hover:text-orange"
                >
                  Menu (Order Online)
                </a>
              </li>
              <li>
                <a
                  href="https://rewards.vegansushilv.com/book/basil"
                  className="hover:text-orange"
                >
                  Booking
                </a>
              </li>
              <li>
                <a
                  href="https://rewards.vegansushilv.com/scan"
                  className="hover:text-orange"
                >
                  Rewards
                </a>
              </li>
              <li>
                <a
                  href="https://order.toasttab.com/egiftcards/basil-vegan-thai"
                  className="hover:text-orange"
                >
                  Gift Card
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Hours
            </h3>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>Mon–Thu: 11:30am – 9:00pm</li>
              <li>Fri–Sat: 11:30am – 9:30pm</li>
              <li>Sun: 12:00pm – 8:30pm</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 md:flex-row md:px-6 lg:px-8">
          <p>
            © {year} Basil Vegan Thai &amp; Sushi. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="text-slate-400 hover:text-orange"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="text-slate-400 hover:text-orange"
            >
              Terms of Service
            </button>
            <button
              type="button"
              className="text-slate-400 hover:text-orange"
            >
              Accessibility
            </button>
            <a
              href="https://manus.ai"
              className="text-slate-400 hover:text-orange"
            >
              Website by Manus AI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
