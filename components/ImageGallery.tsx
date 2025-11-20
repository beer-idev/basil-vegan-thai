"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/assets/images/menu/golden-knights-vegan-sushi-roll-las-vegas.webp",
    alt: "Golden Knights vegan sushi roll on a dark wood table.",
  },
  {
    src: "/assets/images/menu/vegan-tom-yum-soup-henderson-thai.webp",
    alt: "Vegan Tom Yum soup in a black bowl with red spoon.",
  },
  {
    src: "/assets/images/menu/vegan-spring-rolls-thai-appetizer-henderson.webp",
    alt: "Crispy vegan spring rolls appetizer at Basil Vegan Thai in Henderson.",
  },
  {
    src: "/assets/images/menu/vegan-papaya-salad-thai-henderson.webp",
    alt: "Spicy and refreshing vegan papaya salad, a Henderson favorite.",
  },
  {
    src: "/assets/images/menu/molten-chocolate-cake-vegan-dessert-basil.webp",
    alt: "Decadent vegan molten chocolate lava cake at Basil Vegan Thai.",
  },
  {
    src: "/assets/images/menu/mixed-vegetable-stir-fry-vegan-thai.webp",
    alt: "Mixed vegetable stir-fry vegan Thai entree.",
  },
];

export function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = activeIndex !== null ? galleryImages[activeIndex] : null;

  return (
    <>
      <section className="space-y-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative overflow-hidden rounded-3xl border border-emerald-50 bg-white shadow-sm"
            >
              <div className="relative h-32 w-full sm:h-36 lg:h-44">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={1600}
              height={900}
              className="h-full w-full object-contain"
            />
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white shadow"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
