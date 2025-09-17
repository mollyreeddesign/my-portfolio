import type { Metadata } from "next";
import Nav from "@/app/nav";
import Footer from "@/components/Footer";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className={`${workSans.className} antialiased`}>
        {/* Fixed Nav overlays content, so add top padding equal to nav height */}
        <header>
          <Nav />
        </header>
        <main className="pt-[72px] md:pt-[88px] pb-16 md:pb-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
