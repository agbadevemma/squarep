"use client";

import React from "react";
import Image from "next/image";
import { TestimonialProps } from "@/lib/data";

const TestimonialCard = ({
  name,
  position,
  profile,
  testimonial,
  highlight,
  websiteUrl,
  className,
  index,
}: TestimonialProps & { className?: string; index: number }) => {
  return (
    <div
      className={` p-10  ${index % 2 === 0 ? "border-r" : ""} 
              ${index < 4 ? "border-b" : ""}    border-tinted-black  `}
    >
      <h3 className="text-[#D8FF99] text-2xl">{highlight}</h3>
      <p className="mt-4 text-base font-light">{testimonial}</p>
      <div
        className={`w-full p-4 border border-tinted-black rounded-lg flex items-center justify-between bg-[#242424]/[20%] mt-8 `}
      >
        <div className="flex items-center gap-2">
          <Image src={profile} alt={name} />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">{name}</span>
            <span className="text-sm">{position}</span>
          </div>
        </div>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          <button className="bg-[#262626] px-6 py-4 text-sm rounded-lg">
            Open Website
          </button>
        </a>
      </div>
    </div>
  );
};

export default TestimonialCard;
