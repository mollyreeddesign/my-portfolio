'use client';

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

type LottieCoverProps = {
  src: string; // path under /public, e.g., /animations/foo.json
  className?: string;
  fit?: 'cover' | 'contain';
};

export default function LottieCover({ src, className, fit = 'cover' }: LottieCoverProps) {
  const [data, setData] = useState<object | null>(null);

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

  const objectFit = fit === 'contain' ? ('contain' as const) : ('cover' as const);
  const preserveAspectRatio = fit === 'contain' ? 'xMidYMid meet' : 'xMidYMid slice';

  return (
    <div className={`absolute inset-0 ${className ?? ''}`}>
      {data && (
        <Lottie
          animationData={data}
          loop
          autoplay
          style={{ width: '100%', height: '100%', objectFit: objectFit }}
          rendererSettings={{ preserveAspectRatio }}
        />
      )}
    </div>
  );
}
