import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

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
    </div>
  );
};

export default LandingPage;
