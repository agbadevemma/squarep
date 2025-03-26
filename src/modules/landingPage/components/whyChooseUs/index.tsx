import { reasons } from "@/lib/data";
import bg from "../../../../../public/images/bgs/bg5.svg";
import Whychoose from "./Whychoose";
import BannerSection from "@/sharedcomponents/BannerSection";

type Props = {};

const WhyChooseUs = (props: Props) => {
  return (
    <div>
      <div className="border border-tinted-black w-full ">
        <BannerSection
          bg={bg}
          description=" Experience excellence in digital craftsmanship with our team of
              skilled professionals dedicated to delivering exceptional results."
          title="Why Choose SquareUp?"
        />
      </div>
      <div className="w-full  border-t-0 border border-tinted-black grid   grid-cols-2 grid-rows-2 ">
        {reasons.map((item, index) => (
          <Whychoose
            key={index}
            {...item}
            className={`
              ${index % 2 === 0 ? "border-r" : ""} 
              ${index < 2 ? "border-b" : ""}         
              border-tinted-black
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
