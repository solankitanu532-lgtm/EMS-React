import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className="shrink-0 w-[300px] p-5 bg-[#1f1f1f] rounded-2xl shadow-md hover:scale-105 transition">

      {/* Top */}
      <div className="flex justify-between items-center">
        <span className="bg-yellow-500 text-xs px-3 py-1 rounded-full text-white">
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

      {/* Action Button */}
      <div className="mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg w-full transition">
          Accept Task
        </button>
      </div>

    </div>
  )
}

export default NewTask