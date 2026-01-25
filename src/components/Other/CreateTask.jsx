import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

   const [userData,setUserData] = useContext(AuthContext)
  

   const [taskTitle, setTaskTitle] = useState('')
   const [taskDescription, setTaskDescription] = useState('')
   const [taskDate, setTaskDate] = useState('')
   const [assignto, setAssignto] = useState('')
   const [category, setCategory] = useState('') 
   const [newTask, setNewTask] = useState({})

   const submitHandler =(e)=>{
       e.preventDefault()
      setNewTask({taskTitle,taskDate,taskDescription,category,active:false,newTask:true,failed:false,completed:false})

      userData.forEach((elem)=>{
          if(assignto == elem.firstName){
            elem.tasks.push(newTask)
           elem.taskCount.newTask = elem.taskCount.newTask+1          }
      })
     
      setUserData(userData)
      console.log(userData)

      setAssignto('')
      setCategory('')
      setTaskDate('')
      setTaskDescription('')
      setTaskTitle('')
   }

  return (
     <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }} className='flex flex-wrap items-start justify-between w-full ' >
         <div className='w-1/2'>
          <div><h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
             <input 
             value={taskTitle}
             onChange={(e)=>{
               setTaskTitle(e.target.value)
             }}
             className='border-amber-100 text-gray-200 rounded text-sm py-1 px-2 w-4/5 outline-none bg-transparent border' type="text" placeholder='Make UI design' /></div>
            <div >
             <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
             <input 
              value={taskDate}
             onChange={(e)=>{
               setTaskDate(e.target.value)
             }}
             className='border-amber-100 rounded text-gray-200 text-sm py-1 px-2 w-4/5 outline-none bg-transparent border'  type="date" /></div>

            <div>
             <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
             <input 
                value={assignto}
             onChange={(e)=>{
               setAssignto(e.target.value)
             }}
             className='border-amber-100 rounded text-gray-200 text-sm py-1 px-2 w-4/5 outline-none bg-transparent border' type="text" placeholder='employee name' /></div>
             <div>
             <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
             <input 
                value={category}
             onChange={(e)=>{
               setCategory(e.target.value)
             }}
             className='border-amber-100 rounded text-gray-200 text-sm py-1 px-2 w-4/5 outline-none bg-transparent border'  type="text" placeholder='design,dev,etc' /></div>
             </div>
             <div className='w-2/5 flex flex-col items-start'><h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
             <textarea
              value={taskDescription}
             onChange={(e)=>{
               setTaskDescription(e.target.value)
             }}
             className=' rounded text-sm text-gray-200 py-2 px-4 w-full h-44 outline-none bg-transparent border border-amber-100'  name="" id="" cols="30" rows='10'></textarea>
             <button className='bg-emerald-500 text-white py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button></div> 
          </form>
       </div>
  )
}

export default CreateTask
