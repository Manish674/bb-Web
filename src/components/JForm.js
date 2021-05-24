import React from "react";

const JoinForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col w-4/5 mx-auto"
    >
      <label htmlFor="name">Name</label>
      <input
        name="name "
        id="name"
        placeholder="Name"
        className="p-2 mb-4 text-white bg-black border border-white"
      />

      <label htmlFor="email">E-mail</label>
      <input
        name="email"
        id="email"
        placeholder="E-mail"
        className="p-2 text-white bg-black border border-white"
      />

      <span>
        <h1 className="my-4 text-xl font-bold">
          Grade level 2020-2021 School Year
        </h1>
        <span className="flex flex-col mt-4 space-y-2">
          <span className="space-x-4">
            <input type="radio" value=">9" name="grade" id=">9" />
            <label htmlFor=">9">below 9 grade</label>
          </span>
          <span className="space-x-4">
            <input type="radio" value="9" name="grade" id="9" />
            <label htmlFor="9">Grade 9</label>
          </span>
          <span className="space-x-4">
            <input type="radio" value="10" name="grade" id="10" />
            <label htmlFor="10">Grade 10</label>
          </span>
          <span className="space-x-4">
            <input type="radio" value="11" name="grade" id="11" />
            <label htmlFor="11">Grade 11</label>
          </span>
          <span className="space-x-4">
            <input type="radio" value="12" name="grade" id="12" />
            <label htmlFor="12">Grade 12</label>
          </span>
          <span className="space-x-4">
            <input type="radio" value="gap year" name="grade" id="gap year" />
            <label htmlFor="gap year">Gap year</label>
          </span>
          <span className="space-x-4">
            <input
              type="radio"
              value="university"
              name="grade"
              id="university"
            />
            <label htmlFor="university">University</label>
          </span>
          <span className="space-x-4">
            <input type="radio" value="other" name="grade" id="other" />
            <label htmlFor="other">other</label>
          </span>
        </span>
      </span>
      <label htmlFor="city" className="mt-4">
        City, Country
      </label>
      <input
        name="city"
        id="city"
        placeholder="City, Country"
        className="p-2 text-white bg-black border border-white"
      />
      <span className="">
        <h1 className="font-bold text-xl ">
          What position you are intrested in?
        </h1>
        <span className="flex flex-col"></span>
      </span>
    </form>
  );
};

export default JoinForm;
