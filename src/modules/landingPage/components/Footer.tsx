import Image from "next/image";
import logo from "../../../../public/images/Logo.svg";
import facebook from "../../../../public/images/icons/facebook.svg";
import twitter from "../../../../public/images/icons/twitter.svg";
import linkedin from "../../../../public/images/icons/linkedin.svg";
import bgimg from "../../../../public/images/bgs/bgimg.svg";
import mail from "../../../../public/images/icons/mail.svg";
import phone from "../../../../public/images/icons/phone.svg";
import location from "../../../../public/images/icons/location.svg";

import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" px-4 lg:px-20 xl:px-24 border-t border-t-tinted-black mb-0 mt-20 ">
      <div className=" w-full flex items-center py-10 justify-between border-b border-b-tinted-black">
        <Image src={logo} alt="logo" className="w-32" />
        <div className="flex items-center gap-8">
          <span>Home</span>
          <span>Services</span>
          <span>Work</span>
        </div>
        <div className="flex items-center gap-4 p-2 rounded-lg  border border-tinted-black">
          <span>Stay Connected</span>
          <div
            className="h-16 w-16 flex items-center justify-center"
            style={{ backgroundImage: `url(${bgimg.src})` }}
          >
            <Image src={facebook} alt="logo" className="" />
          </div>
          <div
            className="h-16 w-16 flex items-center justify-center"
            style={{ backgroundImage: `url(${bgimg.src})` }}
          >
            <Image src={twitter} alt="logo" className="" />
          </div>
          <div
            className="h-16 w-16 flex items-center justify-center"
            style={{ backgroundImage: `url(${bgimg.src})` }}
          >
            <Image src={linkedin} alt="logo" className="" />
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center py-10 justify-between mt-6">
        <div className="flex gap-6">
          <div className="flex items-center gap-2 pb-2 border-b border-b-tinted-black ">
            <Image src={mail} alt="mail" />
            <span>hello@squareup.com</span>
          </div>
          <div className="flex items-center gap-2 pb-2 border-b border-b-tinted-black ">
            <Image src={phone} alt="phone" />
            <span>+91 91813 23 2309</span>
          </div>
          <div className="flex items-center gap-2 pb-2 border-b border-b-tinted-black ">
            <Image src={location} alt="location" />
            <span>remote</span>
          </div>
        </div>
      <span className="text-[#98989A] text-xs">© 2025 SquareUp. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
