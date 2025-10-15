import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Molly Reed | Product Designer",
  description: "Product designer converting design decisions into real business impact. Based in Zurich, CH. Open to on-site and remote opportunities.",
  openGraph: {
    title: "Molly Reed | Product Designer",
    description: "Product designer converting design decisions into real business impact. Based in Zurich, CH. Open to on-site and remote opportunities.",
    url: "https://mollyreeddesign.com",
    siteName: "Molly Reed Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Molly Reed - Product Designer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Molly Reed | Product Designer",
    description: "Product designer converting design decisions into real business impact. Based in Zurich, CH. Open to on-site and remote opportunities.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <HomePage />;
}
