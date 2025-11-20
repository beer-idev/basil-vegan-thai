import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

const posts = [
  {
    slug: "from-sushi-to-spice-chef-mindy-journey",
    title:
      "From Sushi to Spice: Chef Mindy&apos;s Journey to Opening Basil Vegan Thai",
    excerpt:
      "How a PETA-award-winning sushi chef brought authentic vegan Thai cuisine to Henderson and Green Valley.",
    tag: "Story",
    image: "/assets/images/menu/golden-knights-vegan-sushi-roll-las-vegas.webp",
  },
  {
    slug: "not-just-pad-thai-exploring-vegan-thai-cuisine",
    title:
      "Not Just Pad Thai: Exploring the Diverse Flavors of Vegan Thai Cuisine",
    excerpt:
      "From Tom Yum and Panang curry to aromatic basil stir-fries, discover how vibrant vegan Thai food can be.",
    tag: "Guide",
    image: "/assets/images/menu/vegan-tom-yum-soup-henderson-thai.webp",
  },
  {
    slug: "health-benefits-of-thai-herbs-and-spices",
    title: "The Health Benefits of Thai Herbs and Spices",
    excerpt:
      "Learn how lemongrass, galangal, kaffir lime, and Thai basil support a nourishing plant-based lifestyle.",
    tag: "Wellness",
    image: "/assets/images/menu/vegan-papaya-salad-thai-henderson.webp",
  },
];

export const metadata: Metadata = {
  title: "Basil Vegan Thai Blog | Vegan Thai Food Stories & Guides",
  description:
    "Explore stories, guides, and wellness tips from Basil Vegan Thai. Learn about vegan Tom Yum, Panang curry, Thai herbs, and plant-based dining in Henderson.",
  openGraph: {
    title: "Basil Vegan Thai Blog | Vegan Thai Food Stories & Guides",
    description:
      "Stories and guides from Basil Vegan Thai about plant-based Thai cuisine in Henderson, NV.",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8">
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Blog
          </p>
          <h1 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Stories from our plant-based kitchen.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-700">
            Dive into Chef Mindy&apos;s journey, explore vegan Thai dishes beyond
            Pad Thai, and learn how Thai herbs and spices can support your
            plant-based lifestyle in Henderson and Las Vegas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-emerald-50 bg-white shadow-sm"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-teal">
                  {post.tag}
                </span>
                <h2 className="font-heading text-lg font-semibold text-slate-900">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 text-sm font-semibold text-teal hover:text-orange"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
