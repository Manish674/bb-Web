import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Card = ({ heading, para, bg }) => {
  return (
    <div
      className={`mx-auto flex flex-row bg-grey-400  ${bg} pl-2 lg:flex-col items-center justify-between lg:items-start  lg:p-8 w-4/5 lg:h-96 h-16`}
    >
      <h3 className="text-2xl font-semibold lg:mb-8">{heading}</h3>
      <p className="hidden lg:inline lg:max-w-1/18">{para}</p>
      <div className="flex justify-end lg:w-full ">
        <BiRightArrowAlt className="text-4xl lg:mt-16 cursor-pointer " />
      </div>
    </div>
  );
};

export default Card;
