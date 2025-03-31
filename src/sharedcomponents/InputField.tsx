import React from "react";

type Props = {};

const InputField = (props: Props) => {
  return (
    <div>
    
      <input
        type="text"
        placeholder="Type here"
        className="border-b border-[#333333] w-full text-sm focus:outline-none outline-none placeholder:text-xs placeholder:text-[#656567]"
      />

    </div>
  );
};

export default InputField;
