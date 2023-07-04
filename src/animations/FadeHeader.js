import { AnimatePresence, motion } from "framer-motion";

export const FadeHeader = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        exit={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 , type:"spring" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
