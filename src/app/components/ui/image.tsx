// components/ui/image.tsx
import ImageNext from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function Image({ src, alt, width, height, className }: ImageProps) {
  return (
    <ImageNext
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
