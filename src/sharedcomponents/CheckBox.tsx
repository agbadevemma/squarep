import Image from 'next/image';
import mark from "../../public/images/arrow.svg";
import React from 'react'


type CustomCheckboxProps = {
  checked: boolean;
  onChange?: () => void;
};
const CheckBox: React.FC<CustomCheckboxProps> = ({   onChange, checked }) => {
    return (
      <div
        className={`h-5 w-5 border  bg-[#262626] flex items-center justify-center border-[#333333] rounded-[4px] cursor-pointer ${checked ? 'bg-gray-200' : ''}`}
        onClick={onChange}
      >
        {checked && <Image src={mark} alt={"mark"} className="w-[10px]" />}
      </div>
    );
  };

export default CheckBox