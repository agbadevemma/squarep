"use client"
import BannerSection from "@/sharedcomponents/BannerSection";
import bg from "../../../../../public/images/bgs/bg7.svg";
import React, { useState } from "react";
import SingleFaq from "./SingleFaq";
import { faqs } from "@/lib/data";

type Props = {};

const Faqs = (props: Props) => {
    const [selectedIndex, setSelectedIndex] = useState<number|null>(null)
  return (
    <div>
      <div >
        <BannerSection
          bg={bg}
          title="Frequently Asked Questions"
          description="Still you have any questions? Contact our Team via hello@squareup.com"
        />
      
          <div className="w-full  border border-tinted-black border-  grid lg:grid-cols-2 ">
            {faqs.map((item,index) => (
              <SingleFaq {...item} key={item.id} index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            ))}
       
        </div>
      </div>
    </div>
  );
};

export default Faqs;
