import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Art | Portfolio",
  description: "Selected artwork and experiments.",
};

export default function ArtPage() {
  return (
    <main className="min-h-[60vh] py-8 sm:py-12">
      <PageContainer>
      <h1 className="text-3xl font-semibold mb-4">Art</h1>
      <p className="text-base/7 text-foreground/80">
        This is the art page. Showcase your visual work here. You can add a
        grid of images, captions, and links to high-resolution versions.
      </p>
      </PageContainer>
    </main>
  );
}


