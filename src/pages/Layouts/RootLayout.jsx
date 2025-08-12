import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { AnimatePresence, motion } from "motion/react";
import PageTransitionOverlay from "../../Components/PageTransitionOverlay/PageTransitionOverlay";
import { Outlet, useLocation } from "react-router";
import Footer from "../../Components/Footer/Footer";

const RootLayout = () => {
  const { pathname } = useLocation();
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    setShowOverlay(true);
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 700); // 👈 Match or slightly longer than motion duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Navbar />

      {/* Page loading overlay transition */}
      <AnimatePresence mode="wait">
        {showOverlay && <PageTransitionOverlay key="overlay" />}
      </AnimatePresence>

      {/* Page content animation */}
      <AnimatePresence mode="wait">
        {!showOverlay && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="lg:h-32 h-24"></div>
            <Outlet />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RootLayout;
