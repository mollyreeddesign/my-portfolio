import React from "react";
import PageContainer from "@/components/PageContainer";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 mb-16">
      <PageContainer className="py-6 text-sm grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
      
     
      <Link href="/" className="font-americana text-[18px] md:text-[24px] hover:opacity-80">
        molly reed
      </Link>
      <div className="min-w-0">
        <h3 className="custom-h3 mb-6">Links</h3>
        <div className="flex flex-col gap-6">
        <Link href="/" className="hover:underline">Work</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/art" className="hover:underline">Art</Link>
        <Link href="/" className="hover:underline">Journal</Link>
    </div>        
      </div>
      <div className="min-w-0">
        <h3 className="custom-h3 mb-4">Connect</h3>
        <div className="flex flex-col gap-4">
          <a href="https://www.linkedin.com/in/mollyreeddesign/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="mailto:mollyreeddesign@gmail.com" className="hover:underline">Email</a>
          <a href="https://www.behance.net/MollyReed" className="hover:underline">Behance</a>
        </div>
      </div>
      <div className="min-w-0">
        <h3 className="custom-h3 mb-4">Credits</h3>
        <p className="mb-4 !text-sm">
          The typefaces on this site are set in Americana by Richard Isbell and Work Sans by Wei Huang.
        </p>
        <p className="!text-sm">
          This site was written and built by me using Cursor, Lottie and Jitter.
        </p>
      </div>
      </PageContainer>
    </footer>
  );
}


