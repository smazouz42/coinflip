import Image from "next/image";
import { ReactNode } from "react";

interface BackgroundImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspect : number;
  children: ReactNode;
}

export const BackgroundImage = ({ src, alt, width, height, children, aspect }: BackgroundImageProps) => {
  return (
    <div className="relative">
      <Image src={src} width={width} height={height} alt={alt} className="w-full" />
      <div className="absolute top-0 left-0 w-screen  flex flex-col" style={{ aspectRatio: aspect }}>
        {children}
      </div>
    </div>
  );
};