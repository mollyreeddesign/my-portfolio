import type { Metadata } from "next";
import Nav from "@/app/nav";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
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
      <body className={`antialiased font-sans`}>
        {/* Fixed Nav overlays content, so add top padding equal to nav height */}
        <header>
          <Nav />
        </header>
        <main className="pt-[72px] md:pt-[88px]">{children}</main>
      </body>
    </html>
  );
}
