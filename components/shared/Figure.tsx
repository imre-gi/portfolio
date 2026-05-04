import Image from "next/image";
import { ReactNode } from "react";

interface FigureProps {
  src?: string;
  alt: string;
  caption?: ReactNode;
  ratio?: "auto" | "wide" | "tall" | "square" | "square-3-4";
  background?: string;
  duotone?: boolean;
  priority?: boolean;
  fill?: boolean;
  className?: string;
}

const ratioClass: Record<NonNullable<FigureProps["ratio"]>, string> = {
  auto: "",
  wide: "aspect-[16/9]",
  tall: "aspect-[3/4]",
  square: "aspect-square",
  "square-3-4": "aspect-[4/3]",
};

export default function Figure({
  src,
  alt,
  caption,
  ratio = "square-3-4",
  background,
  duotone = false,
  priority = false,
  className = "",
}: FigureProps) {
  return (
    <figure className={`flex flex-col gap-3 ${className}`}>
      <div
        className={`relative w-full overflow-hidden ${ratioClass[ratio]}`}
        style={background ? { background } : undefined}
      >
        {src && (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className={`object-cover ${duotone ? "duotone-paper-ink" : ""}`}
            priority={priority}
          />
        )}
      </div>
      {caption && <figcaption className="t-figure-caption">{caption}</figcaption>}
    </figure>
  );
}
