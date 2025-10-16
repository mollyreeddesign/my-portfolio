"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Helper function to convert pathname to readable page name
function getPageName(pathname: string): string {
  if (pathname === '/') return 'Home';
  if (pathname === '/about') return 'About';
  if (pathname === '/art') return 'Art Gallery';
  if (pathname.startsWith('/case-studies/')) {
    const slug = pathname.replace('/case-studies/', '');
    // Convert slug to title case
    const titles: { [key: string]: string } = {
      'jamfamilycalendar': 'Jam Family Calendar',
      'hiltonpropertypages': 'Hilton Property Pages',
      'uoselfcheckout': 'UO Self Checkout',
      'valeriejurado': 'Valerie Jurado'
    };
    return titles[slug] || 'Case Study';
  }
  return pathname;
}

export default function MixpanelPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Add a small delay to ensure Mixpanel is fully initialized
    const timeoutId = setTimeout(() => {
      if (typeof window !== 'undefined' && window.mixpanel) {
        // Get the full URL
        const url = window.location.href;
        const pageName = getPageName(pathname);
        
        // Debug logging (remove in production)
        // console.log('Mixpanel Page View Tracking:', {
        //   pathname,
        //   pageName,
        //   url,
        //   title: document.title
        // });
        
        // Track the page view
        window.mixpanel.track('Page Viewed', {
          page_name: pageName,
          page_path: pathname,
          page_url: url,
          page_title: document.title,
          referrer: document.referrer,
          timestamp: new Date().toISOString(),
        });
      } else {
        // console.log('Mixpanel not available or window not defined');
      }
    }, 100); // 100ms delay

    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  return null;
}

