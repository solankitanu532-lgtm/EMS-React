import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div className="shrink-0 w-[300px] p-5 bg-[#1f1f1f] rounded-2xl shadow-md ">

      {/* Top */}
      <div className="flex justify-between items-center">
        <span className="bg-blue-600 text-xs px-3 py-1 rounded-full text-white">
          {data.category}
        </span>
        <span className="text-sm text-gray-400">
          {data.date}
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-xl font-semibold text-white">
        {data.title}
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-2 line-clamp-3">
        {data.description}
      </p>

      {/* Buttons */}
      <div className="flex justify-between mt-6 gap-2">
        <button className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-2 rounded-lg w-full transition">
          Complete
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-2 rounded-lg w-full transition">
          Fail
        </button>
      </div>

    </div>
  )
}

export default AcceptTask