import React from "react";

const ContactBg = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full ${className}  border border-tinted-black p-3 px-6 pb-4  rounded-md bg-[#242424]/[50%]`}
    >
      {children}
    </div>
  );
};

export default ContactBg;
