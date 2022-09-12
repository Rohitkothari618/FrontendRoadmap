import React from "react";
import { motion } from "framer-motion";

const index = () => {
  return (
    <div className="h-[50vh] flex items-center justify-center text-[32px] cursor-pointer">
      <motion.div
        animate={{
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        initial={{ opacity: 0, scale: 1.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 2 }}
      >
        Coming Soon.....
      </motion.div>
    </div>
  );
};

export default index;
