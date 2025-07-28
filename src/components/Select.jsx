import React from "react";

const Select = ({ placeholder, label, options, ref }) => {
  return (
    <div className="w-full">
      <label className="block mb-1 text-sm font-medium text-white/70">
        {label}
      </label>
      <select
      ref={ref}
        className="
      w-full
      px-4
      py-2.5
      rounded-lg
      bg-gray-900/80
      border
      border-gray-800
      outline-none
      focus:ring-2
      focus:ring-teal-500
      text-white/90
      placeholder-gray-300/0
      transition
      duration-300
      shadow-md
      focus:shadow-md
      appearance-none
    "
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
