import { motion, AnimatePresence } from "framer-motion";

export const ProductFade = ({ children, isActive = true, direction = 1 }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          exit={{ opacity: 1, x: 0, y: 0 }}
          initial={{ opacity: 0, x: -200, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ type: "spring" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
