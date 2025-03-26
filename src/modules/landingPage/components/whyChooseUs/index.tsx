import { reasons } from "@/lib/data";
import bg from "../../../../../public/images/bgs/bg5.svg";
import Whychoose from "./Whychoose";

type Props = {};

const WhyChooseUs = (props: Props) => {
  return (
    <div>
      <div className="mb-32">
        <div className="border border-tinted-black w-full ">
          <div
            style={{ backgroundImage: `url(${bg.src})` }}
            className="w-full h-64  "
          >
            <div className="w-full h-64 bg-black/60 text-white flex  flex-col items-center justify-center">
              <span className="text-4xl font-semibold">
                Why Choose SquareUp?
              </span>
              <p className="text-sm mt-2">
                Experience excellence in digital craftsmanship with our team of
                skilled professionals dedicated to delivering exceptional
                results.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full  border-t-0 border border-tinted-black grid   grid-cols-2 grid-rows-2 ">
          {reasons.map((item, index) => (
            <Whychoose
              key={index}
              {...item}
              className={`
              ${
                index % 2 === 0 ? "border-r" : ""
              } 
              ${
                index < 2 ? "border-b" : ""
              }         
              border-tinted-black
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
