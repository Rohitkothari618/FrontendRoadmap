import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";
import Roadmap from "./Roadmap";
import { useScroll } from "framer-motion";

const Main = () => {
  return (
    <div className="w-full">
      <div>
        <div className=" mt-4 h-fit md:h-[70vh] flex flex-col-reverse md:flex-row p-2 md:p-14 px-16">
          <div className="flex flex-1 gap-6 flex-col">
            <h2 className="font-logo text-[34px]">Front End Web Developer</h2>
            <p className="text-[20px]">
              Learn how to build high quality websites and dynamic applications
              to create stunning user experiences for the web.
            </p>
            <a class="relative inline-block px-4 py-2 w-fit md:w-full text-center  font-medium group">
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white text-center w-screen">
                Getting Start
              </span>
            </a>
          </div>
          {/* <div className="h-[75vh] border-[1px] border-black mx-4 hidden md:block"></div> */}
          <div className="flex-1 text-[32px] ml-4 flex items-center justify-center ">
            <img
              src="./1.jpg"
              alt="logo"
              className="w-[300px] md:w-[500px] mt-0 md:mt-4"
            />
          </div>
        </div>
        <div className="flex items-center justify-end md:justify-start">
          <button className=" rounded-full border-2 mr-6 md:mr-0 border-black md:p-4 p-2 ml-14">
            <motion.div
              whileHover={{ y: 5, scale: 1.5 }}
              animate={{ y: 5 }}
              transition={{ duration: 0.2, type: "spring" }}
            >
              <AiOutlineArrowDown className="text-[22px]" />
            </motion.div>
          </button>
          <span className="ml-2 hidden md:block">See the Roadmap</span>
        </div>
      </div>

      <Roadmap />
    </div>
  );
};

export default Main;
