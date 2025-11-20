"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  source: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Finally, a vegan Thai spot in Henderson with flavors that rival my favorite Bangkok restaurants.",
    name: "Jessica M.",
    source: "Google Reviews",
  },
  {
    id: 2,
    quote:
      "The vegan Tom Yum and Panang curry are absolute must-orders – rich, spicy, and deeply satisfying.",
    name: "Andre L.",
    source: "Yelp",
  },
  {
    id: 3,
    quote:
      "Perfect date night spot in Green Valley. Beautiful interior, friendly staff, and an all-vegan menu.",
    name: "Samira K.",
    source: "Local regular",
  },
  {
    id: 4,
    quote:
      "Some of the best vegan Panang curry I have found in Las Vegas. Deep flavor without being too heavy.",
    name: "Michael R.",
    source: "Google Reviews",
  },
  {
    id: 5,
    quote:
      "We catered a work event with Basil Vegan Thai and everyone, vegan or not, went back for seconds.",
    name: "Tanya P.",
    source: "Catering client",
  },
  {
    id: 6,
    quote:
      "Love having a fully plant-based Thai option in Green Valley. Comfortable space and consistently great food.",
    name: "Leo S.",
    source: "Regular guest",
  },
];

export function TestimonialCarousel() {
  const [pageIndex, setPageIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateLayout = () => {
      if (typeof window === "undefined") return;
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const pageCount = Math.ceil(testimonials.length / itemsPerPage);
    const interval = setInterval(
      () =>
        setPageIndex((prev) => (prev + 1) % pageCount),
      7000,
    );
    return () => clearInterval(interval);
  }, [itemsPerPage]);

  const start = pageIndex * itemsPerPage;
  const visible = testimonials.slice(start, start + itemsPerPage);
  const pageCount = Math.ceil(testimonials.length / itemsPerPage);

  return (
    <section className="space-y-5">
      <div className="space-y-2 text-center">
        <h2 className="font-heading text-2xl font-semibold text-slate-900">
          What Our Guests Are Saying.
        </h2>
        <p className="text-sm text-slate-700">
          A rotating selection of reviews from Google, Yelp, and our Vegas vegan
          community.
        </p>
      </div>
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          {visible.map((t) => (
            <figure
              key={t.id}
              className="flex h-full flex-col rounded-[24px] border border-emerald-50 bg-white p-6 text-sm text-slate-700 shadow-md"
            >
              <p className="mb-4 flex-1 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <figcaption className="text-xs text-slate-600">
                <span className="font-semibold text-slate-800">{t.name}</span>{" "}
                · <span>{t.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, index) => {
            const key = `testimonial-page-${index}`;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setPageIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === pageIndex ? "w-6 bg-orange" : "w-2 bg-emerald-200"
                }`}
                aria-label={`Show testimonial page ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
