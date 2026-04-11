import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignto, setAssignto] = useState('')
  const [category, setCategory] = useState('')
  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    const task = {
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    userData.forEach((elem) => {
      if (assignto === elem.firstName) {
        elem.tasks.push(task)
        elem.taskCount.newTask += 1
      }
    })

    setUserData([...userData])

    // reset
    setAssignto('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('')
  }

  return (
    <div className='p-6 bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] mt-3 rounded-2xl shadow-xl'>
      
      <h2 className='text-2xl font-semibold text-white mb-6'>Create New Task</h2>

      <form onSubmit={submitHandler} className='flex flex-wrap justify-between gap-6'>

        {/* Left Section */}
        <div className='w-full md:w-[48%] space-y-4'>

          {/* Input Field */}
          <div>
            <label className='text-sm text-gray-400'>Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='w-full mt-1 px-3 py-2 rounded-lg bg-[#121212] border border-gray-600 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition'
              type="text"
              placeholder='Make UI design'
            />
          </div>

          <div>
            <label className='text-sm text-gray-400'>Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='w-full mt-1 px-3 py-2 rounded-lg bg-[#121212] border border-gray-600 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition'
              type="date"
            />
          </div>

          <div>
            <label className='text-sm text-gray-400'>Assign To</label>
            <input
              value={assignto}
              onChange={(e) => setAssignto(e.target.value)}
              className='w-full mt-1 px-3 py-2 rounded-lg bg-[#121212] border border-gray-600 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition'
              type="text"
              placeholder='Employee name'
            />
          </div>

          <div>
            <label className='text-sm text-gray-400'>Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full mt-1 px-3 py-2 rounded-lg bg-[#121212] border border-gray-600 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition'
              type="text"
              placeholder='Design, Dev, etc'
            />
          </div>

        </div>

        {/* Right Section */}
        <div className='w-full md:w-[48%] flex flex-col'>

          <label className='text-sm text-gray-400'>Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='mt-1 px-3 py-2 h-40 rounded-lg bg-[#121212] border border-gray-600 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition resize-none'
          ></textarea>

          <button className='mt-5 bg-indigo-600 hover:bg-indigo-700 transition-all text-white py-3 rounded-lg font-semibold shadow-md'>
            + Create Task
          </button>

        </div>

      </form>
    </div>
  )
}

export default CreateTask