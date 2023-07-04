import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

export const Position = ({ children, offsetY }) => {
  const { y } = useWindowScrollPosition({ throttle: 500 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (y >= offsetY) {
      setIsVisible(true);
    }
  }, [y,offsetY]);
  console.log(y);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
