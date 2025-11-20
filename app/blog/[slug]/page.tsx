import type { Metadata } from "next";
import Link from "next/link";

type PostConfig = {
  title: string;
  description: string;
  body: JSX.Element;
};

const POSTS: Record<string, PostConfig> = {
  "from-sushi-to-spice-chef-mindy-journey": {
    title:
      "From Sushi to Spice: Chef Mindy&apos;s Journey to Opening Basil Vegan Thai",
    description:
      "How Chef Mindy Lim expanded from award-winning vegan sushi to launch Basil Vegan Thai in Henderson, NV.",
    body: (
      <>
        <p>
          Before Basil Vegan Thai opened its doors in Henderson, Chef Mindy Lim
          had already built a loyal following at Daikon Vegan Sushi in Las
          Vegas. Her creative rolls, including the award-winning Yellow Magic,
          proved that{" "}
          <strong>plant-based sushi could be just as indulgent and satisfying</strong>{" "}
          as the original.
        </p>
        <p>
          Basil Vegan Thai grew out of a simple question from regular guests:
          “When are you going to do a full Thai restaurant?” Mindy&apos;s answer
          is this cozy spot off Windmill Lane, where{" "}
          <strong>vegan Tom Yum, Panang curry, and basil stir-fries</strong> sit
          alongside fan-favorite sushi rolls.
        </p>
        <p>
          Today, Basil Vegan Thai carries the same{" "}
          <strong>Peace on a Plate</strong> philosophy – compassionate food,
          big flavors, and a warm community hub for Green Valley and beyond.
        </p>
      </>
    ),
  },
  "not-just-pad-thai-exploring-vegan-thai-cuisine": {
    title:
      "Not Just Pad Thai: Exploring the Diverse Flavors of Vegan Thai Cuisine",
    description:
      "A tour of vegan Thai dishes beyond Pad Thai, including Tom Yum, Panang curry, and fragrant basil stir-fries.",
    body: (
      <>
        <p>
          Pad Thai might be the gateway dish, but{" "}
          <strong>vegan Thai cuisine offers so much more</strong> than one
          famous noodle bowl. At Basil Vegan Thai, our menu is built to showcase
          the diversity of Thailand&apos;s flavors – all in a{" "}
          <strong>100% plant-based</strong> way.
        </p>
        <p>
          If you love bold, citrusy heat, start with our{" "}
          <strong>vegan Tom Yum soup</strong>, a Henderson favorite layered with
          lemongrass, kaffir lime, and chili. Fans of rich comfort food gravitate
          toward <strong>vegan Panang curry</strong>, simmered with coconut milk
          and aromatic spices.
        </p>
        <p>
          Rounding things out are wok-fried classics like{" "}
          <strong>Thai basil tofu</strong>, mixed vegetable stir-fries, and
          playful sushi rolls that borrow flavors from both Thai and Japanese
          cooking.
        </p>
      </>
    ),
  },
  "health-benefits-of-thai-herbs-and-spices": {
    title: "The Health Benefits of Thai Herbs and Spices",
    description:
      "Learn how lemongrass, galangal, Thai basil and more support a nourishing vegan lifestyle.",
    body: (
      <>
        <p>
          Thai food is famous for its bold flavors, but the{" "}
          <strong>herbs and spices that power those flavors also support health</strong>.
          Many traditional ingredients used at Basil Vegan Thai have been prized
          for centuries.
        </p>
        <p>
          <strong>Lemongrass</strong> and <strong>kaffir lime</strong> add
          brightness to soups like vegan Tom Yum while contributing antioxidants.
          <strong>Galangal</strong>, a relative of ginger, can aid digestion and
          warm the body, making it a staple in Tom Kha and curry pastes.
        </p>
        <p>
          Fresh <strong>Thai basil</strong> brings a peppery, slightly sweet note
          to stir-fries and noodle dishes while offering anti-inflammatory
          compounds. Combined in a{" "}
          <strong>plant-based Thai menu in Henderson</strong>, these ingredients
          help make every meal both comforting and nourishing.
        </p>
      </>
    ),
  },
};

type PageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const post = POSTS[params.slug];
  if (!post) {
    return {
      title: "Basil Vegan Thai Blog",
      description:
        "Stories and guides from Basil Vegan Thai about plant-based Thai cuisine in Henderson, NV.",
    };
  }
  return {
    title: `${post.title.replace(/&apos;/g, "'")} | Basil Vegan Thai Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = POSTS[params.slug];

  if (!post) {
    return (
      <section className="space-y-4">
        <h1 className="font-heading text-2xl font-semibold text-slate-900">
          Blog post not found
        </h1>
        <p className="text-sm text-slate-700">
          The article you are looking for may have moved.{" "}
          <Link href="/blog" className="text-teal hover:text-orange">
            Return to the blog.
          </Link>
        </p>
      </section>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8">
      <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
          Blog
        </p>
        <h1 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
          {post.title}
        </h1>
      </div>
      <div className="prose max-w-none text-slate-800 prose-headings:font-heading prose-a:text-teal prose-a:no-underline hover:prose-a:text-orange">
        {post.body}
      </div>
      <Link
        href="/blog"
        className="inline-flex text-sm font-semibold text-teal hover:text-orange"
      >
        ← Back to all posts
      </Link>
    </section>
    </div>
  );
}

