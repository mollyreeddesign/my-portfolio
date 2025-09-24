'use client';

import Lottie from 'lottie-react';
import { CSSProperties, useEffect, useRef, useState } from 'react';

type TiledLottieProps = {
  src: string;
  tileSize?: number; // px size of each tile visual
  overlapPercent?: number; // 0..1, how much tiles overlap (0.3 = 30%)
  overlapXPercent?: number; // optional override for X axis overlap
  overlapYPercent?: number; // optional override for Y axis overlap
  className?: string;
  style?: CSSProperties;
  preserveAspect?: 'contain' | 'cover';
};

export default function TiledLottie({ src, tileSize = 140, overlapPercent = 0, overlapXPercent, overlapYPercent, className = '', style, preserveAspect = 'contain' }: TiledLottieProps) {
  const [data, setData] = useState<object | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dims, setDims] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    let mounted = true;
    fetch(src)
      .then((r) => r.json())
      .then((json) => {
        if (mounted) setData(json);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, [src]);

  useEffect(() => {
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setDims({ w: rect.width, h: rect.height });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const clamp01 = (v: number) => Math.max(0, Math.min(0.95, v));
  const effectiveOverlapX = clamp01(overlapXPercent ?? overlapPercent);
  const effectiveOverlapY = clamp01(overlapYPercent ?? overlapPercent);
  const tileStepX = Math.max(1, Math.round(tileSize * (1 - effectiveOverlapX)));
  const tileStepY = Math.max(1, Math.round(tileSize * (1 - effectiveOverlapY)));
  const cols = Math.max(1, Math.ceil((dims.w + tileSize) / tileStepX));
  const rows = Math.max(1, Math.ceil((dims.h + tileSize) / tileStepY));
  const count = cols * rows;
  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, ${tileStepX}px)`,
    gridAutoRows: `${tileStepY}px`,
    width: '100%',
    height: '100%'
  };

  const preserveAspectRatio = preserveAspect === 'contain' ? 'xMidYMid meet' : 'xMidYMid slice';

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`} style={style}>
      <div style={gridStyle}>
        {data && Array.from({ length: count }).map((_, idx) => {
          const offsetX = Math.max(0, Math.round((tileSize - tileStepX) / 2));
          const offsetY = Math.max(0, Math.round((tileSize - tileStepY) / 2));
          return (
          <div key={idx} className="relative" style={{ width: tileStepX, height: tileStepY, overflow: 'visible' }}>
            <div style={{ position: 'absolute', left: -offsetX, top: -offsetY, width: tileSize, height: tileSize }}>
            <Lottie
              animationData={data}
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
              rendererSettings={{ preserveAspectRatio }}
            />
            </div>
          </div>
        );})}
      </div>
    </div>
  );
}


