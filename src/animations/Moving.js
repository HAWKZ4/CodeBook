import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Moving = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: -10 }}
        exit={{ background: "red" }}
        transition={{ delay: 0.5, transition: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
