import Image from "next/image";

type GridImage = {
  src: string;
  alt: string;
};

type ImageShowcaseGridProps = {
  images: GridImage[]; // Expected order: [topLeft, topMiddle, topRight, row2Left, row2Middle, rightTall, bottomWide]
  className?: string;
  rightTallBgClass?: string; // optional custom bg for the right tall tile
};

export default function ImageShowcaseGrid({ images, className, rightTallBgClass = "bg-white" }: ImageShowcaseGridProps) {
  const [topLeft, topMiddle, topRight, row2Left, row2Middle, rightTall, bottomWide] = images;

  return (
    <div className={("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.7fr] gap-4 mt-4 bg-gray-100 " + (className || "")).trim()}>
      {/* Row 1 */}
      <div className="group relative w-full rounded-lg overflow-hidden border border-gray-200 bg-white shadow-lg lg:col-start-1 lg:row-start-1 lg:row-span-2 aspect-[5/2.3] lg:aspect-[5/2.3]">
        <Image src={topLeft.src} alt={topLeft.alt} fill className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
      </div>
      <div className="group relative w-full rounded-lg overflow-hidden border border-gray-200 bg-white shadow-lg lg:col-start-2 lg:row-start-1 aspect-[4/1] lg:aspect-[4/1]">
        <Image src={topMiddle.src} alt={topMiddle.alt} fill className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
      </div>
      <div className="group relative w-full rounded-lg overflow-hidden border border-gray-200 bg-white shadow-lg lg:col-start-3 lg:row-start-1 lg:row-span-4 aspect-[4/4] lg:aspect-[4/4]">
        <Image src={topRight.src} alt={topRight.alt} fill className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
      </div>

      {/* Row 2 */}
      <div className="group relative w-full rounded-lg overflow-hidden border border-gray-200 bg-white shadow-lg lg:col-start-1 lg:row-start-3 lg:row-span-2 aspect-[5/2] lg:aspect-[5/2]">
        <Image src={row2Left.src} alt={row2Left.alt} fill className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
      </div>
      <div className="group relative w-full rounded-lg overflow-hidden border border-gray-200 bg-white shadow-lg lg:col-start-2 lg:row-start-2 lg:row-span-3 aspect-[5/3] lg:aspect-[5/3]">
        <Image src={row2Middle.src} alt={row2Middle.alt} fill className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
      </div>
      <div className={("group relative w-full rounded-lg overflow-hidden border border-gray-200 shadow-lg lg:col-start-3 lg:row-start-4 lg:row-span-3 aspect-[1/1.4] lg:aspect-[1/1.4] " + rightTallBgClass).trim()}>
        <Image src={rightTall.src} alt={rightTall.alt} fill className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
      </div>

      {/* Bottom-left spanning two columns and two rows */}
      <div className="group relative w-full rounded-lg overflow-hidden border border-gray-200 bg-white shadow-lg lg:col-start-1 lg:col-span-2 lg:row-start-5 lg:row-span-2 aspect-[11/4] lg:aspect-[11/4]">
        <Image src={bottomWide.src} alt={bottomWide.alt} fill className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]" sizes="(min-width:1024px) 66vw, (min-width:640px) 50vw, 100vw" />
      </div>
    </div>
  );
}


