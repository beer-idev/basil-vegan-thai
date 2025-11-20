import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Chef Mindy Lim | Basil Vegan Thai & Sushi",
  description:
    "Discover the story of Chef Mindy Lim and how Basil Vegan Thai brings authentic, 100% plant-based Thai cuisine to Henderson and Green Valley.",
  openGraph: {
    title: "About Chef Mindy Lim | Basil Vegan Thai",
    description:
      "Learn about Chef Mindy Lim's journey from award-winning vegan sushi to authentic plant-based Thai cuisine in Henderson, NV.",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8">
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
          Our Story
        </p>
        <h1 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
          From sushi to spice: Chef Mindy&apos;s plant-based journey.
        </h1>
        <p className="text-base leading-relaxed text-slate-700">
          Basil Vegan Thai is the next chapter in Chef Mindy Lim&apos;s mission
          to create{" "}
          <span className="font-semibold text-teal">Peace on a Plate</span>.
          After earning national recognition at Daikon Vegan Sushi – including a
          PETA award for the Yellow Magic roll – Chef Mindy turned her focus to
          the bold, aromatic flavors of Thai cuisine.
        </p>
        <p className="text-base leading-relaxed text-slate-700">
          Every dish at Basil is crafted to be{" "}
          <span className="font-medium">authentic, comforting, and inclusive</span>
          , with rich curries, wok-fried noodles, and creative vegan sushi sharing
          the same menu. Whether you are fully plant-based or just plant-curious,
          you are welcome at our table.
        </p>
        <p className="text-base leading-relaxed text-slate-700">
          Located just off Windmill Lane near Green Valley, Basil Vegan Thai is
          designed to feel like your neighborhood gathering spot – vibrant,
          relaxed, and full of great food and conversation.
        </p>
      </div>
      <div className="space-y-4">
        <div className="overflow-hidden rounded-3xl border border-emerald-50 bg-white shadow-sm transition-all hover-lift">
          <Image
            src="/assets/images/about/chef-mindy-lim-yellow-magic-roll-peta-award.webp"
            alt="Chef Mindy Lim of Basil Vegan Thai holding the award-winning Yellow Magic vegan sushi roll."
            width={800}
            height={600}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition-all hover-lift">
          <Image
            src="/assets/images/logos/peta-logo.svg"
            alt="PETA (People for the Ethical Treatment of Animals) Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <p>
            Chef Mindy&apos;s Yellow Magic roll earned a{" "}
            <span className="font-semibold">PETA award</span> for its innovative,
            compassionate twist on modern sushi.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}

