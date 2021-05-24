import React from "react";
import bg from "../assets/bg.jpg";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col w-full mx-auto mt-20 lg:flex-row lg:w-4/5">
        <img
          className="w-40 mx-auto lg:max-w-sm lg:object-fill lg:w-2/4"
          src={bg}
          alt="bg"
        />
        <div className="flex justify-center space-x-4 lg:w-3/5">
          <div className="flex flex-col items-center w-1/2 text-center lg:justify-around lg:items-center lg:flex-row ">
            <ul className="">
              <li>
                <a href="#" className="hover:underline ">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Summer Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Test Preparation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tutoring
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-around w-1/2 lg:justify-start">
            <div className="flex justify-around w-full max-w-sm text-2xl lg:mb-3 lg:w-4/5 lg:mx-auto ">
              <span className="p-2 rounded-full hover:bg-transi">
                <FiInstagram className="cursor-pointer " />
              </span>
              <span className="p-2 rounded-full hover:bg-transi">
                <FiFacebook className="cursor-pointer" />
              </span>
              <span className="p-2 rounded-full hover:bg-transi">
                <FiLinkedin className="cursor-pointer" />
              </span>
            </div>
            <ul>
              <li>
                <a href="#" className="hover:underline text-redi">
                  Become a student
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-greeni">
                  Voluteer as student
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-bluei">
                  Join BB team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between mx-auto mt-4 mb-4 lg:flex-row lg:w-4/5">
        <ul className="flex flex-row justify-around w-full lg:max-w-2xl mt-2 ">
          <li>
            <a href="#" className="hover:underline">
              Cookie policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Copyright
            </a>
          </li>
        </ul>
        <span className="flex justify-center w-full mt-2 lg:justify-end lg:max-w-2xl ">
          <a href="#">Copyright © Brooks Brainery. All Rights Reserved.</a>
        </span>
      </div>
    </>
  );
};

export default Footer;
