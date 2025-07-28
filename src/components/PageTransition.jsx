// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;

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

        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
