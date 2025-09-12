'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';
import HorizontalPanImage from '@/components/HorizontalPanImage';

export default function FeaturesImageBlock() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  return (
    <>
      <div className="relative flex flex-col h-full">
        <button
          type="button"
          onClick={open}
          className="absolute cursor-pointer top-2 right-2 inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/90 hover:bg-white text-gray-800 text-sm shadow-sm border border-gray-200 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 group"
        >
          
          <span className="group-hover:translate-x-0 transition-transform">Expand</span>
          <Maximize2 size={12} className="transition-transform group-hover:scale-110" />
        </button>

        <Image
          src="/images/jam-features-title.png"
          alt="Features title"
          width={900}
          height={160}
          className="w-2/3 md:w-1/2 h-auto mb-2"
        />

        <div className="flex-1 relative">
          <HorizontalPanImage src="/images/jam-features.png" alt="Full Fidelity Features" />
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] flex items-center justify-center p-4 md:p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded features image"
        >
          <div
            className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl border border-gray-200 p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
              <h3 className="custom-h3 m-0">Add Event User Flow - Focus on Features</h3>
              <p>Hover to zoom</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex cursor-pointer items-center justify-center p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 shadow-sm border border-gray-200"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            <MagnifyContainer />
          </div>
        </div>
      )}
    </>
  );
}

function MagnifyContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursor({ x, y });
    setIsHovering(true);
  }, []);

  const onLeave = useCallback(() => setIsHovering(false), []);

  const width = containerRef.current?.clientWidth ?? 1;
  const height = containerRef.current?.clientHeight ?? 1;
  const posX = Math.max(0, Math.min(100, (cursor.x / width) * 100));
  const posY = Math.max(0, Math.min(100, (cursor.y / height) * 100));
  const zoomFactor = 16; // 16x zoom

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[60vh] md:h-[70vh] rounded-lg overflow-hidden bg-white"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <Image
        src="/images/jam-features-large.png"
        alt="Full Fidelity Features Large"
        fill
        unoptimized
        sizes="100vw"
        className="object-contain"
      />

      {/* Magnifier Lens (desktop only) */}
      {isHovering && (
        <div
          className="pointer-events-none absolute hidden md:block w-40 h-40 md:w-56 md:h-56 rounded-full ring-1 ring-black/10 shadow-xl"
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
            transform: 'translate(-50%, -50%)',
            backgroundImage: "url('/images/jam-features-large.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `${posX}% ${posY}%`,
            backgroundSize: `${zoomFactor * 100}% auto`,
          }}
          role="img"
          aria-label="Magnified preview"
        />
      )}
    </div>
  );
}


