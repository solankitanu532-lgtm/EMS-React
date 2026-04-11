const TaskNumber = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">

      {/* New Task */}
      <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md hover:scale-105 transition">
        <h2 className="text-3xl font-bold text-yellow-400">
          {data.taskCount.newTask}
        </h2>
        <p className="text-gray-400 mt-2">New Task</p>
      </div>

      {/* Active Task */}
      <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md hover:scale-105 transition">
        <h2 className="text-3xl font-bold text-blue-400">
          {data.taskCount.active}
        </h2>
        <p className="text-gray-400 mt-2">Active Task</p>
      </div>

      {/* Completed */}
      <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md hover:scale-105 transition">
        <h2 className="text-3xl font-bold text-green-400">
          {data.taskCount.completed}
        </h2>
        <p className="text-gray-400 mt-2">Completed Task</p>
      </div>

      {/* Failed */}
      <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md hover:scale-105 transition">
        <h2 className="text-3xl font-bold text-red-400">
          {data.taskCount.failed}
        </h2>
        <p className="text-gray-400 mt-2">Failed Task</p>
      </div>

    </div>
  )
}

export default TaskNumber