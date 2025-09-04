import Image from "next/image";

type MasonryImage = {
  src: string;
  alt: string;
};

type MasonryGridProps = {
  images: MasonryImage[];
  className?: string;
};

export default function MasonryGrid({ images, className }: MasonryGridProps) {
  return (
    <div className={"columns-1 sm:columns-2 lg:columns-4 gap-x-4 " + (className || "")}> 
      {images.map((img) => (
        <div key={img.src} className="mb-4 break-inside-avoid rounded-lg overflow-hidden border border-gray-200 bg-white group">
          <Image
            src={img.src}
            alt={img.alt}
            width={1200}
            height={800}
            className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            priority={false}
          />
        </div>
      ))}
    </div>
  );
}


