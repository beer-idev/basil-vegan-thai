import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vegan Thai Food Menu | Tom Yum, Panang Curry & More | Henderson, NV",
  description:
    "Explore our authentic vegan Thai menu featuring Tom Yum soup, Panang curry, Pad Thai, and award-winning sushi rolls. Gluten-free options available. Order online.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

