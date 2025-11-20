import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react"; // ✅ เพิ่มบรรทัดนี้

type PostConfig = {
  title: string;
  description: string;
  body: ReactNode; // ✅ เปลี่ยนจาก JSX.Element เป็น ReactNode
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
  // ... ที่เหลือเหมือนเดิม
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
