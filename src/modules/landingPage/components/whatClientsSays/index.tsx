import BannerSection from "@/sharedcomponents/BannerSection";
import bg from "../../../../../public/images/bgs/bg6.svg";
import profile from "../../../../../public/images/profiles/profile1.svg";
import React from "react";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import { testimonals } from "@/lib/data";

type Props = {};

const WhatClientSays = (props: Props) => {
  return (
    <div>
      <div className="">
        <BannerSection
          bg={bg}
          description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
          title="What our Clients say About us"
        />

        <div className="w-full  border border-tinted-black grid lg:grid-cols-2  ">
          {testimonals.map((item, index) => (
            <TestimonialCard
            key={index}
              {...item}
             index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatClientSays;
