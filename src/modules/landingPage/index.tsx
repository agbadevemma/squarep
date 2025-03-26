import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Taper from "./components/Taper";
import OurService from "./components/ourServiceComp";
import WhyChooseUs from "./components/whyChooseUs";


type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="bg-[#1A1A1A] ">
      <div className=" border-b-[#262626] px-4 lg:px-20 xl:px-24  border-b">
        <Header />
      </div>
      <div className="w-full  px-4 lg:px-20 xl:px-24">
        <Hero />
      </div>
      <div className="px-4 lg:px-20 xl:px-24 ">
        <Taper />
      </div>

      <div className="px-4 lg:px-20 xl:px-24 ">
        <OurService />
      </div>

      <div className="px-4 lg:px-20 xl:px-24 ">
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default LandingPage;
