'use client';

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

type LottieCoverProps = {
  src: string; // path under /public, e.g., /animations/foo.json
  className?: string;
};

export default function LottieCover({ src, className }: LottieCoverProps) {
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

  return (
    <div className={`absolute inset-0 ${className ?? ''}`}>
      {data && (
        <Lottie
          animationData={data}
          loop
          autoplay
          style={{ width: '100%', height: '100%', objectFit: 'cover' as const }}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
      )}
    </div>
  );
}
