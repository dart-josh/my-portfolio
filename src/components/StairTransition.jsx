// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Stairs from "./Stairs";

const StairTransition = () => {
    const location = useLocation();
  const pathname = location.pathname;

  return (
    <AnimatePresence mode="wait">
        <div key={pathname}>
            <div className="h-screen w-screen fixed z-50 top-0 left-0 right-0 pointer-events-none flex">
                <Stairs />
            </div>

            <motion.div className="h-screen w-screen fixed z-30 top-0 bg-slate-900 pointer-events-none" initial={{opacity: 1}} animate={{opacity: 0, 
              transition: {delay: 1, duration: 0.4, ease: 'easeInOut'}
            }} />
        </div>
    </AnimatePresence>
  )
}

export default StairTransition