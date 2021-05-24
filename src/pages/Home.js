import React from "react";
import bg from "../assets/bg.jpg";
import Card from "../components/Card";
import SlidingCard from "../components/SlidingCard";
import { Heading, ShortHeading } from "../imgs/Heading";

const cardData = [
  {
    heading: "Join as a student",
    para:
      "Brooks Brainery is going to provide students with a big bucket of programs to choose from. A student can even opt out of the program anytime, or switch programs. ",
    bgColor: "bg-red-600",
    month: "June - July",
  },
  {
    heading: "Volunteer as a teacher",
    para:
      "As the most important part of Brooks Brainery, we request you to volunteer as a teacher, to impart your knowledge and help shape the new generation of high-schoolers. ",
    bgColor: "bg-yellow-400",
  },
  {
    heading: "Join Brooks Brainery team",
    para:
      "We always welcome volunteers open-armingly. Anyone who is driven enough to help others are always invited.",
    bgColor: "bg-blue-400",
  },
];

const Home = () => {
  return (
    <>
      <div className="w-full h-8/screen">
        <img
          src={bg}
          className="w-full max-w-sm mx-auto mt-20 md:max-w-xl"
          alt="logo "
        />
        <ShortHeading />
        <Heading />
      </div>
      <div className="flex flex-col items-stretch items-center mx-auto lg:w-4/5 lg:flex-row lg:space-x-4 lg:space-y-0 space-y-3">
        {cardData.map((el, i) => (
          <Card heading={el.heading} bg={el.bgColor} para={el.para} key={i} />
        ))}
      </div>
      <SlidingCard />
    </>
  );
};

export default Home;
