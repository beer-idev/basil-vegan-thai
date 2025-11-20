import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Deals & Promotions | Basil Vegan Thai Henderson",
  description:
    "Discover current specials and promotions at Basil Vegan Thai in Henderson. Seasonal dishes, Green Valley neighborhood deals, and rewards offers.",
  openGraph: {
    title: "Deals & Promotions | Basil Vegan Thai Henderson",
    description:
      "Latest vegan Thai food specials, rewards perks, and neighborhood promotions at Basil Vegan Thai in Henderson, NV.",
    images: [
      {
        url: "/assets/images/menu/golden-knights-vegan-sushi-roll-las-vegas.webp",
        width: 1200,
        height: 630,
        alt: "Assorted vegan Thai and sushi dishes from Basil Vegan Thai.",
      },
    ],
  },
};

const mockPromotions = [
  {
    title: "Green Valley Weeknight Curry Special",
    description:
      "Enjoy any curry entrée with jasmine rice and a Thai iced tea for a bundled price. Perfect for cozy weeknight dinners.",
    tag: "Weeknight",
    day: "Mon–Thu",
  },
  {
    title: "Vegan Sushi Happy Hour",
    description:
      "Mix-and-match select vegan rolls at special pricing during early evening hours. Ideal for sharing with friends.",
    tag: "Happy Hour",
    day: "Fri–Sun",
  },
  {
    title: "Rewards Members Dessert Upgrade",
    description:
      "Show your rewards QR code to receive a complimentary dessert upgrade on qualifying dine-in orders.",
    tag: "Rewards",
    day: "All Week",
  },
];

export default function PromotionsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8">
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Deals
          </p>
          <h1 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Current specials &amp; promotions.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-700">
            We regularly feature seasonal dishes, Green Valley neighborhood
            specials, and rewards for our most loyal guests. The mock offers
            below show the types of promotions you might see throughout the
            year.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] md:items-start">
          {/* Mock highlight promo with image */}
          <article className="overflow-hidden rounded-3xl border border-emerald-50 bg-white shadow-sm">
            <div className="relative h-48 w-full">
              <Image
                src="/assets/images/menu/golden-knights-vegan-sushi-roll-las-vegas.webp"
                alt="Golden Knights vegan sushi roll featured in a promotion."
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-3 p-6">
              <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-teal">
                Featured Mock Offer
              </span>
              <h2 className="font-heading text-xl font-semibold text-slate-900">
                Game Night Combo for Two
              </h2>
              <p className="text-sm text-slate-700">
                Share a duo of signature vegan rolls, crispy appetizers, and a
                dessert to split – perfect for Golden Knights game nights or
                casual evenings in Green Valley.
              </p>
              <p className="text-xs text-slate-500">
                Note: This is sample content used to visualize future
                promotions.
              </p>
            </div>
          </article>

          {/* List of sample card promos */}
          <div className="space-y-4 rounded-3xl border border-emerald-50 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-lg font-semibold text-slate-900">
              Sample promotion ideas
            </h2>
            <div className="space-y-3">
              {mockPromotions.map((promo) => (
                <div
                  key={promo.title}
                  className="rounded-2xl border border-emerald-50 bg-cream px-4 py-3 text-sm text-slate-700"
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-teal">
                      {promo.tag}
                    </span>
                    <span className="text-xs text-slate-500">{promo.day}</span>
                  </div>
                  <p className="font-heading text-sm font-semibold text-slate-900">
                    {promo.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-700">
                    {promo.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-2 rounded-2xl border border-dashed border-emerald-100 bg-emerald-50/60 px-4 py-3 text-xs text-slate-700">
              When real promotions are live, this section can highlight active
              deals pulled from your POS, rewards system, or manual updates.
            </div>
          </div>
        </div>

        {/* Fallback when no live promos */}
        <div className="rounded-3xl border border-emerald-50 bg-white p-6 text-sm text-slate-700 shadow-sm">
          <p>
            No active promotions are scheduled right now. For real-time updates,
            visit our{" "}
            <a
              href="https://www.instagram.com/basilveganthai/"
              className="font-semibold text-teal hover:text-orange"
            >
              Instagram
            </a>{" "}
            or{" "}
            <a
              href="https://www.facebook.com/632759023257479"
              className="font-semibold text-teal hover:text-orange"
            >
              Facebook
            </a>{" "}
            pages, or join our newsletter on the homepage for future deals.
          </p>
        </div>
      </section>
    </div>
  );
}
