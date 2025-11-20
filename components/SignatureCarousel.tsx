"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type SignatureItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
};

const signatureItems: SignatureItem[] = [
  {
    id: "pad-thai",
    name: "Pad Thai",
    description:
      "Stir-fried rice noodles with tamarind, tofu, and roasted peanuts.",
    image: "/assets/images/menu/vegan-papaya-salad-thai-henderson.webp",
    alt: "Spicy and refreshing vegan papaya salad, a Henderson favorite.",
  },
  {
    id: "green-curry",
    name: "Green Curry",
    description: "Rich coconut curry with Thai basil and vegetables.",
    image: "/assets/images/menu/vegan-green-curry-thai-basil-henderson.webp",
    alt: "Rich and flavorful vegan green curry at Basil Vegan Thai, Henderson.",
  },
  {
    id: "tom-yum",
    name: "Tom Yum Soup",
    description:
      "Sweet, sour, and spicy broth layered with lemongrass and lime.",
    image: "/assets/images/menu/vegan-tom-yum-soup-henderson-thai.webp",
    alt: "Aromatic vegan Tom Yum soup from Basil Vegan Thai in Henderson.",
  },
  {
    id: "tom-kha",
    name: "Tom Kha Soup",
    description: "Creamy coconut soup with galangal and kaffir lime.",
    image: "/assets/images/menu/vegan-tom-kha-coconut-soup-thai.webp",
    alt: "Creamy vegan Tom Kha coconut soup with fresh Thai herbs.",
  },
  {
    id: "malaysian-curry",
    name: "Malaysian Curry",
    description: "Hearty Malaysian-style curry with tofu and vegetables.",
    image: "/assets/images/menu/vegan-malaysian-curry-plant-based-thai.webp",
    alt: "Hearty vegan Malaysian curry, a unique plant-based Thai dish.",
  },
  {
    id: "basil-tofu",
    name: "Thai Basil Tofu",
    description: "Stir-fried tofu with Thai basil, bell peppers, and chili.",
    image: "/assets/images/menu/thai-basil-tofu-vegan-entree-henderson.webp",
    alt: "Classic Thai basil tofu entree, a vegan specialty in Henderson.",
  },
  {
    id: "eggplant-tofu",
    name: "Eggplant & Tofu",
    description: "Sautéed eggplant and tofu in a savory Thai sauce.",
    image: "/assets/images/menu/basil-eggplant-tofu-vegan-thai-dish.webp",
    alt: "Savory basil eggplant and tofu, a popular vegan Thai dish.",
  },
  {
    id: "thai-fried-chicken",
    name: "Thai Fried Chicken",
    description: "Crispy plant-based chicken with sweet and spicy sauce.",
    image: "/assets/images/menu/thai-fried-chicken-vegan-plant-based.webp",
    alt: "Crispy plant-based Thai fried chicken, a vegan delight.",
  },
  {
    id: "sesame-chicken",
    name: "Sesame Chicken",
    description: "Sweet and savory plant-based chicken with sesame seeds.",
    image: "/assets/images/menu/sesame-chicken-vegan-thai-basil.webp",
    alt: "Sweet and savory vegan sesame chicken from Basil Vegan Thai.",
  },
  {
    id: "mixed-vegetables",
    name: "Mixed Vegetables",
    description: "Stir-fried mixed vegetables in a light garlic sauce.",
    image: "/assets/images/menu/mixed-vegetable-stir-fry-vegan-thai.webp",
    alt: "Mixed vegetable stir-fry vegan Thai entree.",
  },
  {
    id: "golden-knights",
    name: "Golden Knights Roll",
    description: "Fan-favorite vegan sushi roll inspired by Las Vegas.",
    image: "/assets/images/menu/golden-knights-vegan-sushi-roll-las-vegas.webp",
    alt: "Golden Knights vegan sushi roll on a dark wood table.",
  },
  {
    id: "molten-cake",
    name: "Molten Chocolate Cake",
    description: "Decadent vegan chocolate lava cake with berries.",
    image: "/assets/images/menu/molten-chocolate-cake-vegan-dessert-basil.webp",
    alt: "Decadent vegan molten chocolate lava cake at Basil Vegan Thai.",
  },
];

export function SignatureCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 4) % signatureItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems: SignatureItem[] = [];
  for (let i = 0; i < 4; i += 1) {
    visibleItems.push(signatureItems[(startIndex + i) % signatureItems.length]);
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="font-heading text-2xl font-semibold text-slate-900">
          A Taste of Modern Thailand.
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-700">
          Bold curries, aromatic soups, wok-fried noodles, and award-winning
          vegan sushi – thoughtfully crafted for both long-time vegans and
          curious first-timers.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-emerald-50 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-heading text-sm font-semibold text-slate-900">
                  {item.name}
                </h3>
                <p className="mt-1 flex-1 text-xs text-slate-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {Array.from({ length: Math.ceil(signatureItems.length / 4) }).map(
            (_, pageIndex) => {
              const isActive =
                startIndex / 4 === pageIndex ||
                (startIndex === 0 && pageIndex === 0);
              const key = `page-${pageIndex}`;
              return (
                <span
                  key={key}
                  className={`h-1.5 rounded-full transition-all ${
                    isActive ? "w-6 bg-orange" : "w-2 bg-emerald-200"
                  }`}
                />
              );
            },
          )}
        </div>
        <div className="text-center">
          <a
            href="https://order.toasttab.com/online/basil-vegan-thai"
            className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-orange/90"
          >
            Explore Our Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
