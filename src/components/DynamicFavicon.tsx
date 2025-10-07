"use client";

import { useEffect } from 'react';

export default function DynamicFavicon() {
  useEffect(() => {
    const updateFavicon = () => {
      // Remove existing dynamic favicon links
      const existingLight = document.querySelector('link[rel="icon"][media*="light"]');
      const existingDark = document.querySelector('link[rel="icon"][media*="dark"]');
      
      if (existingLight) existingLight.remove();
      if (existingDark) existingDark.remove();

      // Create new favicon link based on current theme
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const faviconHref = isDarkMode ? '/favicon-dark.svg' : '/favicon-light.svg';
      
      // Create and add the new favicon link
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = faviconHref;
      link.type = 'image/svg+xml';
      link.media = isDarkMode ? '(prefers-color-scheme: dark)' : '(prefers-color-scheme: light)';
      
      document.head.appendChild(link);
    };

    // Initial check
    updateFavicon();

    // Listen for changes in color scheme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateFavicon);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', updateFavicon);
    };
  }, []);

  return null; // This component doesn't render anything
}
