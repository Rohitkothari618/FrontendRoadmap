import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Sidebar = (props) => {
  return (
    <div className="relative   ">
      <div className="fixed top-0 left-0 right-0 bottom-0 transition-all ease-in-out duration-700 bg-black ">
        <AiOutlineClose
          className="right-14 top-7 absolute font-[22px] border  font-bold hover:text-red-400"
          onClick={props.oncancel}
        />
        <ul className="flex flex-col items-center justify-center h-screen text-white gap-6 z-[3] absoulte ">
          <li
            className="hover:bg-pink-400 w-[90%] text-center"
            onClick={props.oncancel}
          >
            <Link href={"/roadmap"}>RoadMap</Link>
          </li>
          <li
            className="hover:bg-pink-400 w-[90%]  text-center"
            onClick={props.oncancel}
          >
            <Link href={"/tutorial"}>Tutorial</Link>
          </li>
          <li
            className="hover:bg-pink-400 w-[90%]  text-center"
            onClick={props.oncancel}
          >
            <Link href={"/tutorial"}>Course</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
