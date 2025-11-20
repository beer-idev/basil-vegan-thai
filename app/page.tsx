import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SignatureCarousel } from "@/components/SignatureCarousel";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* 1. Hero banner – auto slide with overlay text */}
      <HeroCarousel />

      {/* 2. Introduction / Chef's Story */}
      <ScrollReveal className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl border border-emerald-50 bg-white shadow-md">
          <Image
            src="/assets/images/about/chef-mindy-lim-yellow-magic-roll-peta-award.webp"
            alt="Chef Mindy Lim of Basil Vegan Thai holding the award-winning Yellow Magic vegan sushi roll."
            width={800}
            height={600}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Our Story
          </p>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            From sushi to spice: Chef Mindy&apos;s plant-based journey.
          </h2>
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
            <span className="font-medium">authentic, comforting, and inclusive</span>,
            with rich curries, wok-fried noodles, and creative vegan sushi sharing
            the same menu. Whether you are fully plant-based or just plant-curious,
            you are welcome at our table.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal/90"
          >
            Learn more about Chef Mindy
          </Link>
        </div>
      </ScrollReveal>

      {/* 3. Signature dishes – auto slide carousel */}
      <ScrollReveal variant="fade-in">
        <SignatureCarousel />
      </ScrollReveal>

      {/* 4. Dual location section with Google Maps for each restaurant */}
      <ScrollReveal className="space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="font-heading text-2xl font-semibold text-slate-900">
            Two locations, one plant-based mission.
          </h2>
          <p className="text-sm text-slate-700">
            Basil Vegan Thai in Henderson and Daikon Vegan Sushi in Las Vegas
            share the same Peace on a Plate philosophy.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div className="space-y-4 rounded-3xl border border-emerald-50 bg-white p-6 shadow-sm">
            <div className="space-y-2 text-sm text-slate-700">
              <h3 className="font-heading text-base font-semibold text-slate-900">
                Basil Vegan Thai &amp; Sushi – Henderson
              </h3>
              <p>500 E Windmill Ln #145, Henderson, NV 89123</p>
              <p>Thai curries, noodle dishes, and vegan sushi favorites.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-emerald-50">
              <iframe
                title="Basil Vegan Thai & Sushi Henderson location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.066470316889!2d-115.157!3d36.046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBasil%20Vegan%20Thai!5e0!3m2!1sen!2sus!4v1700000000000"
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-emerald-50 bg-white p-6 shadow-sm">
            <div className="space-y-2 text-sm text-slate-700">
              <h3 className="font-heading text-base font-semibold text-slate-900">
                Daikon Vegan Sushi – Las Vegas
              </h3>
              <p>Downtown &amp; Chinatown locations</p>
              <p>Creative vegan sushi rolls, bowls, and small plates.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-emerald-50">
              <iframe
                title="Daikon Vegan Sushi Las Vegas location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.5!2d-115.17!3d36.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDaikon%20Vegan%20Sushi!5e0!3m2!1sen!2sus!4v1700000000001"
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 5. Testimonials – auto carousel */}
      <ScrollReveal variant="fade-in">
        <TestimonialCarousel />
      </ScrollReveal>

      {/* 6. Newsletter Signup */}
      <ScrollReveal className="mx-auto w-full max-w-4xl rounded-3xl border border-emerald-50 bg-white p-6 text-sm text-slate-700 shadow-sm md:flex md:items-center md:justify-between md:gap-6">
        <div className="space-y-1">
          <h2 className="font-heading text-xl font-semibold text-slate-900">
            Join our Basil newsletter.
          </h2>
          <p>
            Get early access to new dishes, Green Valley events, and vegan Thai
            stories from Chef Mindy.
          </p>
        </div>
        <form className="mt-4 flex w-full flex-col gap-3 md:mt-0 md:w-auto md:flex-row">
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-full border border-emerald-100 bg-cream px-4 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40 md:w-72"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-teal px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Subscribe
          </button>
        </form>
      </ScrollReveal>
    </div>
  );
}
