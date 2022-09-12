import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";

const Header = () => {
  const [openSidebar, setSidebar] = useState(false);
  function sidebar() {
    openSidebar ? setSidebar(false) : setSidebar(true);
  }
  return (
    <div className="flex items-center sticky top-0 justify-between px-14 w-full md:px-24 transition ease-in-out duration-700 cursor-pointer  md:shadow-lg bg-white text-black mt-1  p-4 font-bold text-[22px]">
      <h1 className=" cursor-pointer hover:text-red-600 font-logo ">
        <Link href={"/"}> ClubOfCodders</Link>
      </h1>
      <div className="font-[32px] block md:hidden font-semibold cursor-pointer hover:scale-150">
        <FaBars onClick={sidebar} />
      </div>
      <div className="hidden md:block ">
        <ul className="flex gap-6  ">
          <li className="hover:scale-120">
            <Link href={"/roadmap"}>RoadMap</Link>
          </li>
          <li>
            <Link href={"/tutorial"}>Tutorial</Link>
          </li>
          <li>
            <Link href={"/tutorial/data"}>Course</Link>
          </li>
        </ul>
      </div>
      {openSidebar && <Sidebar oncancel={sidebar} />}
    </div>
  );
};

export default Header;
