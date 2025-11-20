"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    image: "/assets/images/hero/basil-vegan-thai-restaurant-henderson-interior.webp",
    alt: "Interior of Basil Vegan Thai restaurant in Henderson, NV, showing a modern and welcoming dining atmosphere.",
  },
  {
    id: 2,
    image: "/assets/images/hero/basil-vegan-thai-sushi-storefront-sign.webp",
    alt: "The storefront sign for Basil Vegan Thai & Sushi, a plant-based restaurant in Henderson.",
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % heroSlides.length),
      7000,
    );
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    const total = heroSlides.length;
    setActiveIndex((((index % total) + total) % total) || 0);
  };

  const activeSlide = heroSlides[activeIndex];

  return (
    <section className="relative left-1/2 right-1/2 w-screen -mx-[50vw] overflow-hidden bg-black text-white">
      <Image
        src={activeSlide.image}
        alt={activeSlide.alt}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10">
        <div className="mx-auto flex min-h-[520px] w-full max-w-7xl flex-col items-start justify-center gap-6 px-4 py-16 md:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange">
            Vegan Thai in Henderson
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight md:text-5xl lg:text-[46px]">
            Authentic Vegan Thai Cuisine in Henderson
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
            Experience Chef Mindy Lim&apos;s compassionate, flavor-rich Thai dishes
            and innovative vegan sushi – all crafted with{" "}
            <span className="font-semibold text-emerald-100">
              100% plant-based ingredients
            </span>{" "}
            for diners across Henderson, Green Valley, and Las Vegas.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://order.toasttab.com/online/basil-vegan-thai"
              className="inline-flex items-center justify-center rounded-full bg-orange px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-orange/40 transition hover:bg-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Order Online
            </a>
            <a
              href="https://rewards.vegansushilv.com/book/basil"
              className="inline-flex items-center justify-center rounded-full border-2 border-teal bg-white px-8 py-3 text-sm font-semibold text-teal shadow-lg shadow-black/40 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Make a Reservation
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/70 text-lg font-semibold text-white transition hover:border-orange hover:text-orange"
          aria-label="Previous hero image"
        >
          ‹
        </button>
        <div className="flex items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-orange" : "w-2 bg-white/50"
              }`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/70 text-lg font-semibold text-white transition hover:border-orange hover:text-orange"
          aria-label="Next hero image"
        >
          ›
        </button>
      </div>
    </section>
  );
}
