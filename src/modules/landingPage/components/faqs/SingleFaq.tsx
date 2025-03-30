import { SingleFaqProp } from "@/lib/data";
import faqbg from "../../../../../public/images/bgs/bg8.svg";
import cross from "../../../../../public/images/bgs/plus.svg";
import cancel from "../../../../../public/images/bgs/cancel.svg";
import React from "react";
import Image from "next/image";

const SingleFaq = ({
  description,
  title,
  id,
  setSelectedIndex,
  selectedIndex,
  index,
}: SingleFaqProp & {
  className?: string;
  index: number;
  selectedIndex: number | null;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <div>
      <div
        className={`flex   ${
          index === selectedIndex ? "items-start " : "items-center"
        }  justify-between p-10 px-6 gap-4   ${
          index % 2 === 0 ? "border-r" : ""
        } 
        ${index % 2 !== 0 && index === selectedIndex  ? "border border-y-0 " : ""}
        ${index < 8 ? "border-b" : ""}    border-tinted-black  `}
      >
        {/* ${id === 10 || id === 20 ? "hidden" : "block"} */}
        <div
          className={`w-full gap-4 flex ${
            id === 10 || id === 20 ? "hidden" : "block"
          }`}
        >
          <div
            style={{ backgroundImage: `url(${faqbg.src})` }}
            className={`   bg-contain bg-no-repeat  t flex items-center justify-center h-[88px] w-[88px] ${
              index === selectedIndex ? "text-brand-color " : "text-white"
            }`}
          >
            0{id}
          </div>
          <div
            className={`w-full flex justify-between items-start ${
              index === selectedIndex ? "mt-2" : "mt-0"
            }`}
          >
            <div className="flex flex-col">
              <span
                className={`text-lg max-w-[400px] ${
                  index === selectedIndex ? "text-brand-color " : "text-white"
                } `}
              >
                {title}
              </span>
              <p
                className={` text-sm max-w-[400px] font-extralight text-[#E6E6E6] mt-4 ${
                  index === selectedIndex ? "block" : "hidden"
                }`}
              >
                {description}
              </p>
            </div>
            {index === selectedIndex ? (
              <Image
                src={cancel}
                className=""
                alt=""
                onClick={() => setSelectedIndex(null)}
              />
            ) : (
              <Image
                src={cross}
                className=""
                alt=""
                onClick={() => setSelectedIndex(index)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFaq;
