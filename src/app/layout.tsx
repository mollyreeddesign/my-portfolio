import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import Nav from "@/app/nav";
import Footer from "@/components/Footer";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import CaseStudyBodyClass from "@/components/CaseStudyBodyClass";
import DynamicFavicon from "@/components/DynamicFavicon";
import MixpanelPageView from "@/components/MixpanelPageView";
import { Analytics } from '@vercel/analytics/react';

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Molly Reed | Product Designer",
  description: "Product designer portfolio showcasing case studies in UX design, AI interfaces, and digital product design",
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
        {/* Mixpanel Analytics */}
        <Script
          id="mixpanel-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(e,c){if(!c.__SV){var l,h;window.mixpanel=c;c._i=[];c.init=function(q,r,f){function t(d,a){var g=a.split(".");2==g.length&&(d=d[g[0]],a=g[1]);d[a]=function(){d.push([a].concat(Array.prototype.slice.call(arguments,0)))}}var b=c;"undefined"!==typeof f?b=c[f]=[]:f="mixpanel";b.people=b.people||[];b.toString=function(d){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);d||(a+=" (stub)");return a};b.people.toString=function(){return b.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders start_session_recording stop_session_recording people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
              for(h=0;h<l.length;h++)t(b,l[h]);var n="set set_once union unset remove delete".split(" ");b.get_group=function(){function d(p){a[p]=function(){b.push([g,[p].concat(Array.prototype.slice.call(arguments,0))])}}for(var a={},g=["get_group"].concat(Array.prototype.slice.call(arguments,0)),m=0;m<n.length;m++)d(n[m]);return a};c._i.push([q,r,f])};c.__SV=1.2;var k=e.createElement("script");k.type="text/javascript";k.async=!0;k.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===
              e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=e.getElementsByTagName("script")[0];e.parentNode.insertBefore(k,e)}})(document,window.mixpanel||[]);
              
              mixpanel.init('ee6288af340a17c15afd7c59f77fdd8a', {
                autocapture: true,
                record_sessions_percent: 0,
              });
              
              // Debug logging (remove in production)
              // console.log('Mixpanel initialized successfully');
            `,
          }}
        />
        
        {/* Dynamic favicon component */}
        <DynamicFavicon />
        {/* Mixpanel Page View Tracking */}
        <Suspense fallback={null}>
          <MixpanelPageView />
        </Suspense>
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
