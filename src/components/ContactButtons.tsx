"use client";
import Link from "next/link";
import { ArrowUpRight, Download, Copy } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ContactButtons() {
  return (
    <div className="w-full md:max-w-[40rem] md:mx-auto">
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-stretch md:items-center">
        <Reveal delayMs={240} className="w-full md:w-auto">
          <Link 
            href="https://www.linkedin.com/in/mollyreeddesign/" 
            className="btn btn--secondary inline-flex w-full md:w-auto justify-center"
            onClick={() => {
              if (typeof window !== 'undefined' && window.mixpanel) {
                window.mixpanel.track('LinkedIn Button Clicked', {
                  location: 'Contact Buttons',
                  url: 'https://www.linkedin.com/in/mollyreeddesign/',
                  timestamp: new Date().toISOString(),
                });
              }
            }}
          >
            LinkedIn
            <ArrowUpRight />
          </Link>
        </Reveal>
        <Reveal delayMs={360} className="w-full md:w-auto my-4 md:mx-4 md:my-0">
          <a 
            href="/MollyReed-ProductDesigner-CV.pdf" 
            download="MollyReed-ProductDesigner-CV.pdf" 
            className="btn btn--secondary inline-flex w-full md:w-auto justify-center"
            onClick={() => {
              if (typeof window !== 'undefined' && window.mixpanel) {
                window.mixpanel.track('CV Downloaded', {
                  location: 'Contact Buttons',
                  filename: 'MollyReed-ProductDesigner-CV.pdf',
                  timestamp: new Date().toISOString(),
                });
              }
            }}
          >
            Download CV
            <Download />
          </a>
        </Reveal>
        <Reveal delayMs={480} className="w-full md:w-auto">
          <button
            type="button"
            className="btn btn--secondary inline-flex w-full md:w-auto justify-center md:justify-start"
            onClick={() => {
              const email = "mollyreeddesign@gmail.com";
              
              // Track the copy email action
              if (typeof window !== 'undefined' && window.mixpanel) {
                window.mixpanel.track('Email Copied', {
                  location: 'Contact Buttons',
                  email: email,
                  timestamp: new Date().toISOString(),
                });
              }
              
              if (navigator?.clipboard?.writeText) {
                navigator.clipboard.writeText(email);
              } else {
                // Fallback if clipboard API not available
                const textarea = document.createElement("textarea");
                textarea.value = email;
                textarea.style.position = "fixed";
                textarea.style.opacity = "0";
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
              }
            }}
          >
            Copy Email
            <Copy />
          </button>
        </Reveal>
      </div>
    </div>
  );
}

