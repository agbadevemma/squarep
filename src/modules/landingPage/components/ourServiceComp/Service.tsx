import Image, { StaticImageData } from "next/image";
import React from "react";

import servicebg from "../../../../../public/images/bgs/bg4.svg";
import { ServiceProps } from "@/lib/data";

const Service = ({ title, description, icon }: ServiceProps) => {
  return (
    <div>
      <div className="w-full px-12 p-2 pb-6 flex flex-col gap-4 text-white border-r border-tinted-black ">
        <div
          style={{ backgroundImage: `url(${servicebg.src})` }}
          className=" text-white bg-cover  t flex items-center justify-center h-[88px] w-[88px] mt-10 "
        >
          <Image src={icon} alt={title} />
        </div>
        <span className="text-xl mt-4 font-semibold">{title}</span>
        <p className="text-sm text-white w-full">{description}</p>
        <button className="bg-tinted-black w-full mt-10 p-2 rounded-lg text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Service;
