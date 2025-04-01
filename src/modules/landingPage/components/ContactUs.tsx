"use client";
import React, { useState } from "react";
import ContactBg from "@/sharedcomponents/ContactBg";
import InputField from "@/sharedcomponents/InputField";
import CheckBox from "@/sharedcomponents/CheckBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

type Props = {};
type RangeEvent = {
  minValue: number;
  maxValue: number;
};

const ContactUs = (props: Props) => {
  const [range, setRange] = useState<[number, number]>([25, 75]);

  const handleRangeChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setRange([values[0], values[1]]);
    }
  };

  return (
    <div className="border border-tinted-black ">
      <div className="max-w-[1040px] mx-auto grid grid-cols-2 px-20  p-4 gap-8 border border-tinted-black pt-20">
        <ContactBg
          children={
            <div className="flex flex-col gap-4">
              <span className="text-base ">Full Name</span>
              <InputField />
            </div>
          }
        />
        <ContactBg
          children={
            <div className="flex flex-col gap-4">
              <span className="text-base ">Email</span>
              <InputField />
            </div>
          }
        />
        <ContactBg
          className="col-span-2"
          children={
            <div className="flex flex-col gap-8">
              <span className="text-base ">Why are you contacting us?</span>
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckBox checked={false} />
                  <span className="text-sm">Web Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckBox checked={false} />
                  <span className="text-sm">Collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckBox checked={false} />
                  <span className="text-sm">Mobile App Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckBox checked={false} />
                  <span className="text-sm">Others</span>
                </div>
              </div>
            </div>
          }
        />

        <ContactBg
          className="col-span-2"
          children={
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="text-base">Your Budget</span>
                <p className="text-[#E6E6E6] text-xs mt-1">
                  Slide to indicate your budget range
                </p>
              </div>
              <div className="my-6 w-full">
                {/* <input type="range" name="" id="" className="w-full" /> */}
                <Slider
                  className=""
                  range
                  min={0}
                  max={100}
                  step={5}
                  value={range}
                  onChange={handleRangeChange}
                  
                  styles={{
                    track: { backgroundColor: "#9EFF00", height: 6 }, // ✅ Fix: Single object instead of an array
                    rail: { backgroundColor: "#333333", height: 6 },
                    handle: {
                      backgroundColor: "#9EFF00",
                      borderColor: "#4C4C4D",
                    },
                  }}
               
                  handleRender={(handle, props) => {
                    return (
                      <Tooltip
                        overlay={props.value}
                        visible={props.dragging}
                        placement="top"
                    
                      >
                        {handle}
                      </Tooltip>
                    );
                  }}
                />
              </div>
            </div>
          }
        />

        <ContactBg
          className="col-span-2"
          children={
            <div className="flex flex-col gap-4 w-full">
              <span className="text-base ">Your Message</span>
              <InputField />
            </div>
          }
        />
        <button className="bg-brand-color w-fit mx-auto col-span-2 rounded-md p-3  px-8 mt-6 text-[#1A1A1A] text-sm">
          submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
