import React from "react";
import Items from "../../components/Data";
import { motion } from "framer-motion";

const index = () => {
  return (
    <div className="h-fit p-14  flex items-center flex-col justify-center">
      <h2 className="text-[32px] text-center p-4">FrontEnd Roadmap</h2>
      <div className="flex items-center flex-wrap justify-center ">
        {Items.map((item) => {
          return (
            <div
              key={item.id}
              className="h-[270px] border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-black w-[350px] mx-5 my-5 p-5 rounded-md"
            >
              <div className="flex flex-row-reverse justify-end items-center gap-5">
                <h2 className="text-[22px] font-bold">{item.title}</h2>
                <motion.img
                  src={item.icons}
                  alt={Items.title}
                  className="w-[115px] cursor-pointer"
                  initial={{
                    opacity: 0,
                    scale: 1.4,
                    x: 100,
                    rotate: [270, 270],
                  }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, rotate: [0, 0] }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 2 }}
                />
              </div>
              <div className="mt-4">
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
