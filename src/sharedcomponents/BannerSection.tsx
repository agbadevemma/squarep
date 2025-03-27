import React from "react";

type BannerSectionProps = {
  bg: { src: string };
  title: string;
  description: string;
};
const BannerSection = ({ bg, title, description }: BannerSectionProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="w-full h-64 bg-cover bg-center border border-t-0 border-b-0 border-tinted-black"
    >
      <div className="w-full h-64 bg-black/60 text-white flex flex-col items-center justify-center">
        <span className="text-4xl font-semibold">{title}</span>
        <p className="text-sm mt-2 text-center max-w-4xl">{description}</p>
      </div>
    </div>
  );
};

export default BannerSection;
