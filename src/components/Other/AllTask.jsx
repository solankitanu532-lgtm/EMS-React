import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <div className='bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] p-6 rounded-2xl mt-2 shadow-xl'>

      <h2 className='text-2xl font-semibold text-white mb-4'>Employee Task Overview</h2>

      {/* Header */}
      <div className='hidden md:flex bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold'>
        <h2 className='w-1/5'>Employee</h2>
        <h2 className='w-1/5 text-center'>New</h2>
        <h2 className='w-1/5 text-center'>Active</h2>
        <h2 className='w-1/5 text-center'>Completed</h2>
        <h2 className='w-1/5 text-center'>Failed</h2>
      </div>

      {/* Data */}
      <div className='mt-2 space-y-2 max-h-64 overflow-auto'>

        {userData.map((elem, index) => {
          return (
            <div
              key={index}
              className='flex flex-col md:flex-row md:items-center justify-between bg-[#121212] px-4 py-3 rounded-lg shadow '
            >
              <h2 className='md:w-1/5 font-medium text-white mb-2 md:mb-0'>
                {elem.firstName}
              </h2>

              <div className='flex justify-between md:w-4/5 text-sm md:text-base'>

                <span className='text-yellow-400 w-1/5 text-center'>
                  {elem.taskCount.newTask}
                </span>

                <span className='text-blue-400 w-1/5 text-center'>
                  {elem.taskCount.active}
                </span>

                <span className='text-green-400 w-1/5 text-center'>
                  {elem.taskCount.completed}
                </span>

                <span className='text-red-400 w-1/5 text-center'>
                  {elem.taskCount.failed}
                </span>

              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default AllTask