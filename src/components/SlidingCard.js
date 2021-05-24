import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const offerData = [
  {
    heading: "Summer Program",
    para:
      "The Brooks Brainery Summer Program is a four-week long remote program for High Schoolers.",
    month: "June - July",
    bgColor: "bg-gray-400",
  },
  {
    heading: "Tutoring",
    para:
      "This not only personalizes a student’s learning path, but also caters their specific needs and requirements. This program is taught by handpicked tutors and available on-demand.",
    bgColor: "bg-yellow-400",
  },
  {
    heading: "Test Preparation",
    para:
      "Brooks Brainery FREE SAT/ACT Prep is a tailored small-group course for students, delivered live and online, to achieve the perfect test scores.",
    bgColor: "bg-blue-400",
  },
];

const SlidingCard = () => {
  const mappedData = offerData.map((el, i) => {
    return (
      <>
        <div key={i} className={`mx-auto h-full w-4/5 ${el.bgColor} p-8`}>
          <h3 className="mb-8 text-2xl font-semibold">{el.heading}</h3>
          <p className="mx-auto mb-4 max-w-1/18">{el.para}</p>
          <span className="text-2xl">{el.month}</span>
          <div className="flex justify-end w-full ">
            <BiRightArrowAlt className="mt-12 text-4xl cursor-pointer " />
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="w-full mx-auto mt-20 md:w-4/5 lg:hidden">
        <Carousel emulateTouch="true" className="">
          {mappedData}
        </Carousel>
      </div>
      <div className="hidden w-4/5 mx-auto mt-12 lg:flex space-x-4">
        {offerData.map((el, i) => {
          return (
            <div
              key={i}
              className={`mx-auto flex flex-row ${el.bgColor} pl-2 lg:flex-col items-center justify-between lg:items-start  lg:p-8 w-4/5  h-96`}
            >
              <h3 className="text-2xl font-semibold lg:mb-8">{el.heading}</h3>
              <p className="hidden lg:inline lg:max-w-1/18">{el.para}</p>
              <div className="flex justify-end lg:w-full ">
                <BiRightArrowAlt className="text-4xl cursor-pointer lg:mt-16 " />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SlidingCard;
