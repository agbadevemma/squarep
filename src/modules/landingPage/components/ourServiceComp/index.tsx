import React from "react";
import bg from "../../../../../public/images/bgs/bg2.svg";
import Image from "next/image";
import Service from "./Service";
import { services } from "@/lib/data";
const OurService = () => {
  return (
    <div className="">
      <div className="border border-tinted-black w-full">
        <div
          style={{ backgroundImage: `url(${bg.src})` }}
          className="w-full h-64  "
        >
          <div className="w-full h-64 bg-black/60 text-white flex  flex-col items-center justify-center">
            <span className="text-4xl font-semibold">Our Services</span>
            <p className="text-sm mt-2">
              Transform your brand with our innovative digital solutions that
              captivate and engage your audience.
            </p>
          </div>
        </div>
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
