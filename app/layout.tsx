import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/LayoutShell";

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const baseUrl = "https://basilveganthai.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title:
    "Basil Vegan Thai | Best Vegan Thai Restaurant in Henderson, NV & Green Valley",
  description:
    "Authentic vegan Thai restaurant in Henderson, NV serving Green Valley and Las Vegas. Enjoy vegan Tom Yum, Panang curry, Pad Thai, and plant-based sushi by Chef Mindy Lim.",
  openGraph: {
    title:
      "Basil Vegan Thai | Best Vegan Thai Restaurant in Henderson, NV & Green Valley",
    description:
      "Experience authentic plant-based Thai cuisine and vegan sushi at Basil Vegan Thai in Henderson's Green Valley neighborhood.",
    type: "website",
    url: "/",
    locale: "en_US",
    siteName: "Basil Vegan Thai & Sushi",
    images: [
      {
        url: "/assets/images/hero/basil-vegan-thai-restaurant-henderson-interior.webp",
        width: 1920,
        height: 1080,
        alt: "Interior of Basil Vegan Thai restaurant in Henderson, NV, showing a modern and welcoming dining atmosphere.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Basil Vegan Thai | Vegan Thai Restaurant in Henderson, NV & Las Vegas",
    description:
      "Vegan Thai food, Tom Yum, Panang curry, Pad Thai, and plant-based sushi in Henderson and Green Valley.",
    images: ["/assets/images/hero/basil-vegan-thai-restaurant-henderson-interior.webp"],
  },
  icons: {
    icon: "/assets/images/logos/basil-vegan-thai-logo.webp",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Basil Vegan Thai & Sushi",
  description:
    "Authentic vegan Thai restaurant in Henderson, NV, serving plant-based Thai cuisine and sushi to Green Valley and Las Vegas.",
  url: baseUrl,
  image: `${baseUrl}/assets/images/hero/basil-vegan-thai-restaurant-henderson-interior.webp`,
  telephone: "+1-702-357-3837",
  email: "basilveganthai01@gmail.com",
  servesCuisine: ["Thai", "Vegan", "Plant-Based"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "500 E Windmill Ln #145",
    addressLocality: "Henderson",
    addressRegion: "NV",
    postalCode: "89123",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.046,
    longitude: -115.157,
  },
  sameAs: [
    "https://www.instagram.com/basilveganthai/",
    "https://www.facebook.com/632759023257479",
  ],
};

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Basil Vegan Thai Menu",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Soups & Curries",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Vegan Tom Yum Soup",
          description:
            "Aromatic vegan Tom Yum soup with lemongrass, lime, and Thai chilies.",
        },
        {
          "@type": "MenuItem",
          name: "Vegan Panang Curry",
          description:
            "Rich coconut-based vegan Panang curry with seasonal vegetables.",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Noodles & Wok",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Vegan Pad Thai",
          description:
            "Stir-fried rice noodles with tamarind, tofu, and roasted peanuts.",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-cream text-slate-900 antialiased`}
      >
        <LayoutShell>{children}</LayoutShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(menuJsonLd),
          }}
        />
      </body>
    </html>
  );
}
