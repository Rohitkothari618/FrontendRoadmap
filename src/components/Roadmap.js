import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";

const Roadmap = () => {
  return (
    <div className="h-fit shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-3 flex items-center justify-center flex-col  mt-7">
      <h2 className="text-[32px] text-center font-bold md:p-4">
        FrontEnd Roadmap
      </h2>
      <div className="flex   ">
        <div className="flex-1 flex  md:items-end md:mr-14 mt-4 flex-col w-fit ">
          <div className="border-2 rounded-md border-black w-[130px] h-[150px] md:w-[250px] md:h-[150px]  mt-4 flex items-center gap-2 flex-col md:flex-row">
            <AiFillHtml5 className="text-[100px] text-orange-700" />
            <span className="text-[22px] font-bold">HTML</span>
          </div>
          <div className="w-[150px] md:w-[250px] h-[150px] mt-4"></div>
          <div className="border-2 rounded-md border-black w-[130px] h-[150px] md:w-[250px] md:h-[150px]  mt-4 flex items-center gap-2 flex-col md:flex-row ">
            <TbBrandJavascript className="text-[100px] text-yellow-400" />
            <span className="text-[22px] font-bold">JAVASCRIPT</span>
          </div>
          <div className=" w-[150px] md:w-[250px]  h-[150px] mt-4"></div>
          <div className="border-2 rounded-md border-black w-[130px] h-[150px] mt-4 flex items-center gap-2 md:w-[250px] md:h-[150px] flex-col md:flex-row">
            <TbBrandNextjs className="text-[100px] text-black" />
            <span className="text-[22px] font-bold">Next Js</span>
          </div>
        </div>
        <div className="h-100% border-[1px] hidden md:block  border-black"></div>
        <div className="flex-1 flex md:items-start md:ml-14 mt-4 w-fit flex-col">
          <div className=" w-[150px] md:w-[250px]  h-[150px] mt-4"></div>
          <div className="border-2 rounded-md border-black w-[130px] h-[150px] md:w-[250px] md:h-[150px] mt-4 flex items-center gap-2 flex-col md:flex-row">
            <FaCss3Alt className="text-[100px] text-blue-700" />
            <span className="text-[22px] font-bold">CSS</span>
          </div>
          <div className=" w-[150px] md:w-[250px]  h-[150px] mt-4"></div>
          <div className="flex items-center gap-2 border-2 rounded-md border-black w-[130px] h-[150px] md:w-[250px] md:h-[150px] mt-4 flex-col md:flex-row">
            <FaReact className="text-[100px] text-blue-500" />
            <span className="text-[22px] font-bold">React</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
