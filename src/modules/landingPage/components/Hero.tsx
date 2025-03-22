import Image from "next/image";
import bg from "../../../../public/images/herobg.svg";
import graph from "../../../../public/images/graph.svg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div
        className="h-[40rem]  relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <p className="text-center text-[55px] font-semibold text-white pt-[110px]">
          A Digital Product Studio <br /> that will Work
        </p>
        <Image src={graph} alt="graph" className="absolute bottom-0" />
      </div>
    </div>
  );
};

export default Hero;
