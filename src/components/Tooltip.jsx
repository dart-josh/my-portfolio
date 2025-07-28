

const Tooltip = ({ children, text, position = "bottom" }) => {
  return (
    <div className="relative group cursor-pointer inline-bloc">
      {children}
      <div
        className={`absolute z-10 px-2 py-1 text-sm text-white bg-gray-800 rounded-md whitespace-nowrap
          opacity-0 scale-80 pointer-events-none transition-all duration-500 ease-out
          group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
          ${position === "top" && "bottom-full left-1/2 -translate-x-1/2 mb-2"}
          ${position === "bottom" && "top-full left-1/2 -translate-x-1/2 mt-2"}
          ${position === "left" && "right-full top-1/2 -translate-y-1/2 mr-2"}
          ${position === "right" && "left-full top-1/2 -translate-y-1/2 ml-2"}
        `}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
