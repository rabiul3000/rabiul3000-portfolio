import { motion } from "motion/react";

export default function PageTransitionOverlay() {
  return (
    <motion.div
      className='fixed top-0 left-0 w-full h-full bg-black z-50'
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    ></motion.div>
  );
}
