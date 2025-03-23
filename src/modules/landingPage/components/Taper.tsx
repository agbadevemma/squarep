import React from "react";
import img1 from "../../../../public/images/logos/img1.svg";
import img2 from "../../../../public/images/logos/img2.svg";
import img3 from "../../../../public/images/logos/img3.svg";
import img4 from "../../../../public/images/logos/img4.svg";
import img5 from "../../../../public/images/logos/img5.svg";
import img6 from "../../../../public/images/logos/img6.svg";
import bg from "../../../../public/images/bgs/bg2.svg";
import Image from "next/image";
type Props = {};

const Taper = (props: Props) => {
  return (
    <div>
      <div className="mt-0 flex items-center justify-around py-10 border border-tinted-black bg-[#24242433]/[20%] border-t-0 pt-12  ">
        <Image src={img1} alt="zapier" />
        <Image src={img2} alt="spotify" />
        <Image src={img3} alt="zoom" />
        <Image src={img4} alt="slack" />
        <Image src={img5} alt="amazon" />
        <Image src={img6} alt="adobe" />
      </div>
    </div>
  );
};

export default Taper;
