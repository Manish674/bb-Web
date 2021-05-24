import React from "react";
import Hero from "../components/Hero";
import RunningText from "../imgs/RunningText";
import Faq from "../components/Faq";

const faqs = [
  {
    que: "What is the cost of Brooks of Brainery program?",
    ans:
      "None! It's absolutely FREE! No strings attached! Brooks Brainery is a student-led organization with the aim of providing quality courses and opportunities to all high-schoolers without charging a single penny.",
    bg: "bg-redi",
  },
  {
    que: "What is the duration of Brooks of Brainery Summer Program ?",
    ans:
      "The Brooks Brainery Summer Program is a 4-week remote summer program.",
    bg: "bg-orangei",
  },
  {
    que: "When is the Brooks of Brainery Summer Program scheduled to begin?",
    ans:
      "The Brooks Brainery Summer Program is scheduled to begin early to mid-June. By registering beforehand, you will receive the exact dates emailed to you as soon as it is officially published.",
    bg: "bg-yellowi",
  },
  {
    que: "How many courses can I opt for?",
    ans:
      "Every applicant can opt for at most 2 courses as part of their curriculum for the Brooks Brainery Summer Program.",
    bg: "bg-greeni",
  },

  {
    que:
      "How many hours per week would I have to contribute during the Summer Program?",
    ans:
      "One would have to contribute a maximum of 6-7 hours per week for the Summer program.",
    bg: "bg-bluei",
  },
  {
    que: "Can I switch my courses after the Summer Program has started?",
    ans:
      "Yes, one can switch courses, but only before the first week of the program. All you need to do is reach out to us at BrooksBrainery@outlook.com with a valid reason for switching.",
    bg: "bg-lightbluei",
  },
  {
    que: "Can I quit the Brooks Brainery Summer Program mid-way?",
    ans:
      "Yes, of course you can! All you have to do is reach out to us at BrooksBrainery@outlook.com, and state your reasons. Please note that leaving the program mid-way will not fetch any certifications of completion.",
    bg: "bg-purplei",
  },
];

const About = () => {
  return (
    <>
      <h1 className="w-4/5 mt-32 mb-8 text-5xl font-extrabold  lg:mx-auto">
        About us
      </h1>
      <Hero />
      <span className="flex items-center justify-center">
        <marquee
          className="mx-auto my-20 lg:w-4/5"
          scrollAmount="7"
          direction="left"
        >
          {RunningText}
        </marquee>
      </span>
      {faqs.map((el, i) => (
        <Faq key={i} bg={el.bg} ans={el.ans} que={el.que} />
      ))}
    </>
  );
};

export default About;
