import React from "react";
import { motion } from "framer-motion";

export const RoutesAnimations = ({ children , direction= 1 }) => {
  return (
    <motion.div
      initial={{ x: -800 * direction }}
      animate={{ x: 0 }}
      exit={{ x: 800 * direction}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
