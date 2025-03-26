import BannerSection from "@/sharedcomponents/BannerSection";
import bg from "../../../../../public/images/bgs/bg6.svg";
import React from "react";

type Props = {};

const WhatClientSays = (props: Props) => {
  return (
    <div>
      <div className="mb-32">
        <BannerSection
          bg={bg}
          description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
          title="What our Clients say About us"
        />
      </div>
    </div>
  );
};

export default WhatClientSays;
