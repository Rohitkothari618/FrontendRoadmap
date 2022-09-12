import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bottom-0">
      <div className=" md:h-fit flex-col md:flex-row py-14 md:p-14 px-4 md:px-32 flex w-[100%] gap-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <div className="flex flex-col w-[100%] md:w-[50%] ">
          <span className="text-[22px] font-logo">ClubOfCoders</span>
          <p className="w-[80%] mt-4 text-gray-500">
            Club of Coders is a platform that helps anyone learn how to code,
            whether you are a budding developer or an entrepreneur or even just
            curious about full-stack development.
          </p>
        </div>
        <div className="flex flex-1 gap-10 w-screen md:w-full md:flex-nowrap flex-wrap ">
          <div className="w-[40%]">
            <span className="font-semibold">SUPPORT</span>
            <ul className="mt-4 text-gray-500">
              <li className="hover:text-black cursor-pointer">Contact us</li>
              <li className="hover:text-black cursor-pointer">
                Create a free account
              </li>
            </ul>
          </div>
          <div className="w-[50%]">
            <span className="font-semibold">SOLUTIONS</span>
            <ul className="mt-4 text-gray-500">
              <li className="hover:text-black cursor-pointer">
                Learning paths
              </li>
              <li className="hover:text-black cursor-pointer">
                Become a FrontEnd web developer
              </li>
            </ul>
          </div>
          <div className=" w-[20%]">
            <span className="font-semibold">LEGAL</span>
            <ul className="mt-4 text-gray-500 ">
              <li className="hover:text-black cursor-pointer">Privacy</li>
              <li className="hover:text-black cursor-pointer">Terms</li>
              <li className="hover:text-black cursor-pointer">About us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" py-10  md:px-32 flex-col md:flex-row flex items-center justify-between text-gray-500">
        <span>© Copyright 2022 | All rights reserved.</span>
        <div className="flex mt-4 items-center gap-5 text-gray-500">
          <FaTwitter className="text-[22px] hover:text-black cursor-pointer" />
          <AiOutlineYoutube className="text-[32px] hover:text-black cursor-pointer" />
          <BsInstagram className="text-[22px] hover:text-black cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
