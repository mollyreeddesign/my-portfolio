'use client';

import Lottie from 'lottie-react';

type LottieCoverProps = {
  src: string; // path under /public, e.g., /animations/foo.json
  className?: string;
};

export default function LottieCover({ src, className }: LottieCoverProps) {
  return (
    <div className={`absolute inset-0 ${className ?? ''}`}>
      <Lottie
        animationData={undefined as unknown as object}
        path={src}
        loop
        autoplay
        style={{ width: '100%', height: '100%', objectFit: 'cover' as const }}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
    </div>
  );
}
