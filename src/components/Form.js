import React from "react";

const Form = () => {
  return (
    <div className="mx-auto mt-20 border-2 lg:w-4/5 lg:py-12">
      <h1 className="mb-12 text-6xl font-bold lg:w-4/5 lg:mx-auto">
        Contact us
      </h1>
      <div className="flex flex-col w-4/5 mx-auto lg:space-x-4 lg:flex-row lg:justify-around ">
        <div className="mb-4 lg:w-2/4 lg:my-auto">
          <input
            name="name"
            placeholder="Name"
            className="w-full p-4 mb-4 bg-black border"
          />
          <input
            name="email"
            placeholder="E-mail"
            className="w-full p-4 bg-black border"
          />
        </div>
        <textarea
          className="p-8 bg-black border lg:w-2/4 "
          name="message"
          placeholder="message"
        ></textarea>
      </div>
      <div className="flex  lg:justify-end  w-4/5 mx-auto mt-4 ">
        <button className="hover:bg-blue-400 duration-200  w-full h-12 bg-redi lg:w-36">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
