import React from 'react'

const TextArea = ({placeholder, label, rows = 6, ref}) => {
  return (
    <div className="w-full">
  <label className="block mb-1 text-sm font-medium text-white/70">
    {label}
  </label>
  <textarea
    rows={rows}
    ref={ref}
    placeholder={placeholder}
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
      placeholder-gray-300/70
      transition
      duration-300
      shadow-md
      focus:shadow-md
      resize-none
    "
  />
</div>

  )
}

export default TextArea