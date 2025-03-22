import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/Logo.svg";
import { Button } from "@headlessui/react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full mt-2 py-4 flex items-center justify-between">
      <Image src={logo} alt="logo" className="w-32" />
      <div className="w-fit flex gap-4">
        <Button className=" btn text-white font-medium px-6 py-2 rounded-none shadow-none bg-transparent   ">
          Home
        </Button>
        <Button className=" btn text-white font-medium px-6 py-2 rounded-md shadow-none bg-transparent">
          About us
        </Button>
        <Button className=" btn text-white font-medium px-6 py-2 rounded-md shadow-none bg-transparent ">
          Services
        </Button>
      </div>

      <Button className=" btn  font-medium bg-brand-color rounded-md  text-tinted-black ">
      Contact Us
      </Button>
    </div>
  );
};

export default Header;
