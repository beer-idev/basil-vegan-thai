"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  dietary: {
    glutenFree?: boolean;
    onionGarlicFree?: boolean;
    nutFree?: boolean;
  };
  image?: string;
  imageAlt?: string;
};

const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: "edamame",
    name: "Edamame",
    description: "Steamed young soybeans, lightly salted",
    price: "$6.95",
    category: "Appetizers",
    dietary: { glutenFree: true, nutFree: true },
    image: "/assets/images/menu/vegan-edamame-appetizer-basil-thai.webp",
    imageAlt: "A bowl of fresh, steamed edamame at Basil Vegan Thai.",
  },
  {
    id: "spring-rolls",
    name: "Spring Rolls",
    description: "Crispy vegetable rolls with sweet and sour dipping sauce",
    price: "$8.95",
    category: "Appetizers",
    dietary: { nutFree: true },
    image: "/assets/images/menu/vegan-spring-rolls-thai-appetizer-henderson.webp",
    imageAlt: "Crispy vegan spring rolls appetizer at Basil Vegan Thai in Henderson.",
  },
  {
    id: "veggie-fritters",
    name: "Vegetable Fritters",
    description: "Golden brown fritters with seasonal vegetables",
    price: "$7.95",
    category: "Appetizers",
    dietary: {},
    image: "/assets/images/menu/vegetable-fritter-thai-appetizer-basil.webp",
    imageAlt: "Golden brown vegetable fritters, a popular Thai appetizer at Basil.",
  },
  {
    id: "papaya-salad",
    name: "Papaya Salad",
    description: "Spicy and refreshing green papaya salad with tomatoes and peanuts",
    price: "$9.95",
    category: "Salads",
    dietary: { glutenFree: true },
    image: "/assets/images/menu/vegan-papaya-salad-thai-henderson.webp",
    imageAlt: "Spicy and refreshing vegan papaya salad, a Henderson favorite.",
  },
  // Soups
  {
    id: "tom-yum",
    name: "Tom Yum Soup",
    description: "Aromatic vegan Tom Yum soup with lemongrass, lime, and Thai chilies",
    price: "$12.95",
    category: "Soups",
    dietary: { glutenFree: true, nutFree: true },
    image: "/assets/images/menu/vegan-tom-yum-soup-henderson-thai.webp",
    imageAlt: "Aromatic vegan Tom Yum soup from Basil Vegan Thai in Henderson.",
  },
  {
    id: "tom-kha",
    name: "Tom Kha Soup",
    description: "Creamy coconut soup with galangal, lemongrass, and lime leaves",
    price: "$12.95",
    category: "Soups",
    dietary: { glutenFree: true, nutFree: true },
    image: "/assets/images/menu/vegan-tom-kha-coconut-soup-thai.webp",
    imageAlt: "Creamy vegan Tom Kha coconut soup with fresh Thai herbs.",
  },
  // Curries
  {
    id: "green-curry",
    name: "Green Curry",
    description: "Rich and flavorful green curry with coconut milk and Thai basil",
    price: "$15.95",
    category: "Curries",
    dietary: { glutenFree: true },
    image: "/assets/images/menu/vegan-green-curry-thai-basil-henderson.webp",
    imageAlt: "Rich and flavorful vegan green curry at Basil Vegan Thai, Henderson.",
  },
  {
    id: "panang-curry",
    name: "Panang Curry",
    description: "Creamy coconut-based Panang curry with aromatic spices and vegetables",
    price: "$15.95",
    category: "Curries",
    dietary: { glutenFree: true },
    image: "/assets/images/menu/vegan-panang-curry-las-vegas.webp",
    imageAlt: "A bowl of vegan Panang curry with vegetables in a rich coconut broth.",
  },
  {
    id: "malaysian-curry",
    name: "Malaysian Curry",
    description: "Hearty Malaysian-style curry with tofu and seasonal vegetables",
    price: "$15.95",
    category: "Curries",
    dietary: { glutenFree: true },
    image: "/assets/images/menu/vegan-malaysian-curry-plant-based-thai.webp",
    imageAlt: "Hearty vegan Malaysian curry, a unique plant-based Thai dish.",
  },
  // Entrees
  {
    id: "basil-tofu",
    name: "Thai Basil Tofu",
    description: "Stir-fried tofu with Thai basil, bell peppers, and chili",
    price: "$14.95",
    category: "Entrees",
    dietary: { glutenFree: true, nutFree: true },
    image: "/assets/images/menu/thai-basil-tofu-vegan-entree-henderson.webp",
    imageAlt: "Classic Thai basil tofu entree, a vegan specialty in Henderson.",
  },
  {
    id: "eggplant-tofu",
    name: "Eggplant & Tofu",
    description: "Sautéed eggplant and tofu in a savory Thai sauce",
    price: "$14.95",
    category: "Entrees",
    dietary: { glutenFree: true, nutFree: true },
    image: "/assets/images/menu/basil-eggplant-tofu-vegan-thai-dish.webp",
    imageAlt: "Savory basil eggplant and tofu, a popular vegan Thai dish.",
  },
  {
    id: "thai-fried-chicken",
    name: "Thai Fried Chicken",
    description: "Crispy plant-based chicken with sweet and spicy sauce",
    price: "$16.95",
    category: "Entrees",
    dietary: { nutFree: true },
    image: "/assets/images/menu/thai-fried-chicken-vegan-plant-based.webp",
    imageAlt: "Crispy plant-based Thai fried chicken, a vegan delight.",
  },
  {
    id: "sesame-chicken",
    name: "Sesame Chicken",
    description: "Sweet and savory plant-based chicken with sesame seeds",
    price: "$16.95",
    category: "Entrees",
    dietary: { nutFree: true },
    image: "/assets/images/menu/sesame-chicken-vegan-thai-basil.webp",
    imageAlt: "Sweet and savory vegan sesame chicken from Basil Vegan Thai.",
  },
  {
    id: "mixed-vegetables",
    name: "Mixed Vegetables",
    description: "A healthy mix of stir-fried vegetables in a savory Thai sauce",
    price: "$13.95",
    category: "Entrees",
    dietary: { glutenFree: true, nutFree: true },
    image: "/assets/images/menu/mixed-vegetable-stir-fry-vegan-thai.webp",
    imageAlt: "A healthy mix of stir-fried vegetables in a savory vegan Thai sauce.",
  },
  // Sushi
  {
    id: "golden-knights-roll",
    name: "Golden Knights Roll",
    description: "A fan-favorite vegan sushi roll inspired by Las Vegas",
    price: "$12.95",
    category: "Sushi",
    dietary: { glutenFree: true },
    image: "/assets/images/menu/golden-knights-vegan-sushi-roll-las-vegas.webp",
    imageAlt: "The famous Golden Knights vegan sushi roll from Las Vegas.",
  },
  {
    id: "oshinko-ebi-roll",
    name: "Oshinko Ebi Roll",
    description: "Creative vegan sushi roll with pickled vegetables",
    price: "$10.95",
    category: "Sushi",
    dietary: { glutenFree: true, nutFree: true },
    image: "/assets/images/menu/oshinko-ebi-vegan-sushi-roll-basil.webp",
    imageAlt: "Oshinko Ebi vegan sushi roll, a creative offering at Basil Vegan Thai.",
  },
  // Desserts
  {
    id: "mango-sticky-rice",
    name: "Mango Sticky Rice",
    description: "Classic Thai dessert with sweet sticky rice and fresh mango",
    price: "$8.95",
    category: "Desserts",
    dietary: { glutenFree: true, nutFree: true },
    image: "/assets/images/menu/mango-sticky-rice-vegan-thai-dessert.webp",
    imageAlt: "Classic mango sticky rice, a sweet and creamy vegan Thai dessert.",
  },
  {
    id: "molten-chocolate-cake",
    name: "Molten Chocolate Cake",
    description: "Decadent vegan chocolate lava cake",
    price: "$9.95",
    category: "Desserts",
    dietary: { glutenFree: true, nutFree: true },
    image: "/assets/images/menu/molten-chocolate-cake-vegan-dessert-basil.webp",
    imageAlt: "Decadent vegan molten chocolate lava cake at Basil Vegan Thai.",
  },
];

const categories = [
  "All",
  "Appetizers",
  "Salads",
  "Soups",
  "Curries",
  "Entrees",
  "Sushi",
  "Desserts",
];

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dietaryFilters, setDietaryFilters] = useState({
    glutenFree: false,
    onionGarlicFree: false,
    nutFree: false,
  });

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (
        searchQuery &&
        !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Dietary filters
      if (dietaryFilters.glutenFree && !item.dietary.glutenFree) {
        return false;
      }
      if (dietaryFilters.onionGarlicFree && !item.dietary.onionGarlicFree) {
        return false;
      }
      if (dietaryFilters.nutFree && !item.dietary.nutFree) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, dietaryFilters]);

  const toggleDietaryFilter = (filter: keyof typeof dietaryFilters) => {
    setDietaryFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8">
      <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Our Menu
          </p>
          <h1 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Our Plant-Based Thai & Sushi Menu
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-700">
            Every dish is 100% vegan, crafted with fresh, high-quality ingredients.
            Please inform your server of any allergies.
          </p>
        </div>
        <a
          href="https://order.toasttab.com/online/basil-vegan-thai"
          className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
        >
          Order Online →
        </a>
      </div>

      {/* Filters and Search */}
      <div className="space-y-4 rounded-3xl border border-emerald-50 bg-white p-6 shadow-sm">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a dish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-emerald-100 bg-cream px-4 py-2.5 pl-10 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                selectedCategory === category
                  ? "bg-orange text-white"
                  : "bg-emerald-50 text-slate-700 hover:bg-emerald-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dietary Filters */}
        <div className="flex flex-wrap items-center gap-4 border-t border-emerald-50 pt-4">
          <span className="text-xs font-semibold text-slate-700">Dietary:</span>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={dietaryFilters.glutenFree}
              onChange={() => toggleDietaryFilter("glutenFree")}
              className="h-4 w-4 rounded border-emerald-200 text-orange focus:ring-2 focus:ring-orange/40"
            />
            <span className="text-xs font-medium text-slate-700">Gluten-Free (GF)</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={dietaryFilters.onionGarlicFree}
              onChange={() => toggleDietaryFilter("onionGarlicFree")}
              className="h-4 w-4 rounded border-emerald-200 text-orange focus:ring-2 focus:ring-orange/40"
            />
            <span className="text-xs font-medium text-slate-700">
              Onion/Garlic-Free (OF)
            </span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={dietaryFilters.nutFree}
              onChange={() => toggleDietaryFilter("nutFree")}
              className="h-4 w-4 rounded border-emerald-200 text-orange focus:ring-2 focus:ring-orange/40"
            />
            <span className="text-xs font-medium text-slate-700">Nut-Free (N/F)</span>
          </label>
        </div>
      </div>

      {/* Menu Items */}
      {filteredItems.length === 0 ? (
        <div className="rounded-3xl border border-emerald-50 bg-white p-12 text-center shadow-sm">
          <p className="text-slate-700">No items found matching your filters.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setDietaryFilters({
                glutenFree: false,
                onionGarlicFree: false,
                nutFree: false,
              });
            }}
            className="mt-4 text-sm font-semibold text-teal hover:text-orange"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-emerald-50 bg-white shadow-sm transition hover:shadow-md"
            >
              {item.image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || item.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-semibold text-orange">
                    {item.price}
                  </span>
                </div>
                <p className="mb-3 flex-1 text-sm leading-relaxed text-slate-700">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.dietary.glutenFree && (
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-teal">
                      GF
                    </span>
                  )}
                  {item.dietary.onionGarlicFree && (
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-teal">
                      OF
                    </span>
                  )}
                  {item.dietary.nutFree && (
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-teal">
                      N/F
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Order CTA */}
      <div className="rounded-3xl border border-emerald-50 bg-gradient-to-r from-teal to-orange p-8 text-center text-white shadow-lg">
        <h2 className="mb-2 font-heading text-2xl font-semibold">
          Ready to order?
        </h2>
        <p className="mb-4 text-sm opacity-90">
          Browse our full menu and place your order online through Toast.
        </p>
        <a
          href="https://order.toasttab.com/online/basil-vegan-thai"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-orange shadow-sm transition hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        >
          View Full Menu & Order →
        </a>
      </div>
    </div>
    </div>
  );
}

