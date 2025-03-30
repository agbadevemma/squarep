import Image from "next/image";
import React from "react";
import singleLogo from "../../public/images/singleLogo.svg";

type BannerSectionProps = {
  bg: { src: string };
  title: string;
  description: string;
};
const BannerSection = ({
  bg,
  title,
  description,
  leadCapture = false,
}: BannerSectionProps & { leadCapture?: boolean }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={`w-full ${
        leadCapture ? "min-h-[500px]" : "min-h-64"
      } bg-cover bg-center border bg-no-repeat border-t-0 border-b-0 border-tinted-black`}
    >
      {leadCapture ? (
        <div className="w-full min-h-[500px] bg-black/60 text-white flex  flex-col items-center justify-center">
          <Image src={singleLogo} alt="logo" className="" />
          <span className="text-4xl font-semibold mt-8">{title}</span>
          <p className="text-sm text-center max-w-4xl mt-2">{description}</p>
          <button className="bg-brand-color rounded-md p-3  px-4 mt-6 text-[#1A1A1A] text-sm">
            Start Project
          </button>
        </div>
      ) : (
        <div className="w-full h-64 bg-black/60 text-white flex flex-col items-center justify-center">
          <span className="text-4xl font-semibold">{title}</span>
          <p className="text-sm mt-2 text-center max-w-4xl">{description}</p>
        </div>
      )}
    </div>
  );
};

export default BannerSection;
