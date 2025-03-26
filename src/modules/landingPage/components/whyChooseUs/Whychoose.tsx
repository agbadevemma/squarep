import React from "react";
import bg from "../../../../public/images/bgs/bg2.svg";
import servicebg from "../../../../../public/images/bgs/bg4.svg";
import Image from "next/image";
import { ServiceProps } from "@/lib/data";

const Whychoose = ({
  title,
  description,
  icon,
  className,
}: ServiceProps & { className: string }) => {
  return (
    <div>
      <div
        className={`w-full px-12 p-2 pb-10 flex flex-col gap-8 text-white ${className}`}
      >
        <div className="flex w-full items-center gap-4">
          <div
            style={{ backgroundImage: `url(${servicebg.src})` }}
            className=" text-white bg-cover  t flex items-center justify-center h-[88px] w-[88px] mt-10 "
          >
            <Image src={icon} alt={title} />
          </div>
          <span className="text-xl mt-4 font-medium">{title}</span>
        </div>
        <p className="text-sm font-normal text-white w-full">{description}</p>
      </div>
    </div>
  );
};

export default Whychoose;
