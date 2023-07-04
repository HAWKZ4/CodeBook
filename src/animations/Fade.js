import { motion, AnimatePresence } from "framer-motion";

export const Fade = ({ children, isActive = true, direction = 1 }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          exit={{
            opacity: 1,
            y: -12,
            transition: { type: "spring", duration: 0.2 },
          }}
          initial={{ opacity: 0, y: 50  }}
          animate={{ opacity: 1, y: 0 , zIndex: 3 }}
          // layout
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
