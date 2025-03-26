import React from "react";
import bg from "../../../../../public/images/bgs/bg2.svg";
import Image from "next/image";
import Service from "./Service";
import { services } from "@/lib/data";
import BannerSection from "@/sharedcomponents/BannerSection";
const OurService = () => {
  return (
    <div className="">
      <div className="border border-tinted-black w-full">
        <BannerSection
          bg={bg}
          description="Transform your brand with our innovative digital solutions that
              captivate and engage your audience."
          title="Our Services"
        />
        <div className="flex items-center">
          {services.map((item, index) => (
            <div key={index} className="w-full">
              <Service {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
