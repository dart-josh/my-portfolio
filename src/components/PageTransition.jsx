// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setShowChildren(false);

    const timeout = setTimeout(() => {
      setShowChildren(true);
    }, 1400); // 1s delay + 0.4s animation duration

    return () => clearTimeout(timeout);
  } , [pathname]);

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed z-40 bg-slate-900 top-0 pointer-events-none"
        />

        {showChildren && children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
