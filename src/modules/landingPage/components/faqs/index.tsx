import BannerSection from "@/sharedcomponents/BannerSection";
import bg from "../../../../../public/images/bgs/bg7.svg";
import React from "react";

type Props = {};

const Faqs = (props: Props) => {
  return (
    <div>
      <div className="mb-32">
        <BannerSection
          bg={bg}
          title="Frequently Asked Questions"
          description="Still you have any questions? Contact our Team via hello@squareup.com"
        />
        <div className="border border-tinted-black ">
          <div className="w-full  border border-tinted-black grid lg:grid-cols-2 "></div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
