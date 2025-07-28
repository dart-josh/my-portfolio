
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const typeStyles = {
  success: {
    icon: <AiFillCheckCircle className="text-white" size={22} />,
    bg: "bg-teal-500",
  },
  error: {
    icon: <MdError className="text-white" size={22} />,
    bg: "bg-red-500",
  },
};

const NotificationBar = ({ visible, type = "success", message, onClose }) => {
  const { icon, bg } = typeStyles[type] || typeStyles.success;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 ${bg} text-white px-3 sm:px-6 py-3 rounded-lg shadow-md`}
        >
          <div className="flex items-center gap-3 w-full">
            {icon}
            <span className="text-sm">{message}</span>
            <button onClick={onClose}>
              <IoMdClose className="text-white text-lg hover:opacity-70" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBar;
