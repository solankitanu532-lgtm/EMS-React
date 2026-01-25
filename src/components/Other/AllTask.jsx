import { useContext } from 'react'
// import {AuthContext} from '/components/Other/CreateTask.jsx'
import { AuthContext } from '../../context/AuthProvider'


const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext)
  return (
    <div id='task' className='bg-[#1c1c1c] p-5 rounded mt-5 h-60 overflow-auto'>
        <div className='bg-red-400 mb-2 py-2 px-4 text-white flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
        </div>
        <div >
        {userData.map(function(elem){
           return  <div className='border-emerald-400 border-2 mb-2 py-2 px-4 text-white flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 text-white-600'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCount.active}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.newTask}</h5>
            <h5 className='text-lg font-medium w-1/5 text-pink-600'>{elem.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-purple-600'>{elem.taskCount.failed}</h5>
            </div>
            })}
         </div>
    </div>
  )
}

export default AllTask 