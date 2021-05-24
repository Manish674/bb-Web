import React, { useState } from "react";

const Faq = ({ que, bg, ans }) => {
  const [drop, setDrop] = useState(false);
  const displayValue = drop ? "opacity-100" : "hidden opacity-0";
  const handleDrop = () => {
    setDrop(!drop);
  };

  return (
    <>
      <div
        className={`p-4 ${bg} w-full flex flex-col space-y-3 lg:w-4/5 mx-auto `}
      >
        <h3
          onClick={() => handleDrop()}
          className="text-2xl font-bold cursor-pointer  "
        >
          {que}
        </h3>
        <p className={`${displayValue} text-lg lg:max-w-md `}>{ans}</p>
      </div>
    </>
  );
};
export default Faq;
