import Image from "next/image";
import bg from "../../../../public/images/herobg.svg";
import graph from "../../../../public/images/graph.svg";
import { Button } from "@headlessui/react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div
        className="h-[42rem]  relative bg-cover bg-center border-x  border-tinted-black"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <p className="text-center text-[55px] font-semibold text-white pt-[104px]">
          A Digital Product Studio <br /> that will Work
        </p>
        <div className="card rounded-xl p-3 px-6 backdrop-blur-[12px] border w-fit mx-auto  z-10 bg-[#24242433]/20 border-tinted-black text-white">
          <div className="items-center  text-base flex w-full justify-between gap-3 text-[#98989A]">
            For
            <div className="flex gap-1 items-end">
              <span className="bg-tinted-black text-base  text-white p-2 rounded-lg w-fit ">
                Startups
              </span>
              ,
            </div>
            <div className="flex gap-1 items-end">
              <span className="bg-tinted-black text-base font-medium text-white p-2 rounded-lg w-fit ">
                Enterprise
              </span>
              ,
            </div>
            <span className="bg-tinted-black text-base font-medium text-white p-2 rounded-lg w-fit ">
              Media & Publishers
            </span>
            and
            <span className="bg-tinted-black text-base font-medium text-white p-2 rounded-lg w-fit ">
              Social Good
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 mx-auto w-fit  z-10">
          <Button
            className={
              "  rounded-md backdrop-blur-3xl text-sm z-10 text-white font-medium border border-[#333333] bg-[#24242433]/20 p-2 "
            }
          >
            Our Works
          </Button>
          <Button
            className={
              " rounded-md p-2 text-sm e z-10  bg-brand-color text-tinted-black font-medium"
            }
          >
            Contact Us
          </Button>
        </div>
        <div className="absolute font-medium rounded-full -bottom-12 px-5 py-2.5  w-fit  left-1/2 -translate-1/2  z-10  w-fist bg-[#1A1A1A] border border-tinted-black text-[#FDFFFA]">
          Trusted By 250+ Companies
        </div>
        <Image src={graph} alt="graph" className="absolute bottom-0 " />
      </div>
    </div>
  );
};

export default Hero;
