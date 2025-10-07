import type { Metadata } from "next";
import Nav from "@/app/nav";
import Footer from "@/components/Footer";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import CaseStudyBodyClass from "@/components/CaseStudyBodyClass";
import DynamicFavicon from "@/components/DynamicFavicon";
import { Analytics } from '@vercel/analytics/react';

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Molly Reed | Product Designer",
  description: "Personal portfolio site",
  icons: {
    icon: '/favicon.ico', // Default favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className={`${workSans.className} antialiased`}>
        {/* Dynamic favicon component */}
        <DynamicFavicon />
        {/* Fixed Nav overlays content, so add top padding equal to nav height */}
        <CaseStudyBodyClass />
        <header>
          <Nav />
        </header>
        <main className="pt-[72px] md:pt-[88px] pb-16 md:pb-24">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
