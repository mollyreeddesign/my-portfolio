import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import MediaFrame from "@/components/MediaFrame";

export const metadata: Metadata = {
  title: "Art | Portfolio",
  description: "Selected artwork and experiments.",
};

export default function ArtPage() {
  const artImages = [
    { src: "/images/art/art-vortex.png", alt: "Vortex" },
    { src: "/images/art/art-alien.png", alt: "Alien" },
    { src: "/images/art/art-owl.png", alt: "Owl" },
    { src: "/images/art/art-vegetation.png", alt: "Vegetation" },
    { src: "/images/art/art-boot.png", alt: "Boot" },
    { src: "/images/art/art-girlfly.png", alt: "Girl in the Air" },
    { src: "/images/art/art-handball.png", alt: "Hand Holding Ball" },
    { src: "/images/art/art-handball_2.png", alt: "Hand Holding Ball 2" },
  ];
  return (
    <main className="min-h-[60vh] py-8 sm:py-12">
      <PageContainer>
      <h1 className="custom-h1 text-white">Art</h1>
      <p className="text-base/7 text-foreground/80">
        Work I've done for fun, school and for clients.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {artImages.map((img, idx) => (
          <MediaFrame
            key={`${img.src}-${idx}`}
            aspectRatio="1 / 1"
            backgroundClassName="bg-white"
            roundedClassName="rounded-lg"
            className="mb-0 transition-transform duration-200 hover:scale-[1.02] hover:shadow-md"
            enableModal
            modalAriaLabel={`Artwork ${idx + 1}`}
          >
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
          </MediaFrame>
        ))}
      </div>
      </PageContainer>
    </main>
  );
}


