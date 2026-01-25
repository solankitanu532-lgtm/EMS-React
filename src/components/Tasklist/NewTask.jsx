import React from 'react'

const NewTask = ({data}) => {
  return (
     <div className='shrink-0 p-5 h-full w-86 bg-green-400 rounded-xl'>
          <div className='flex justify-between items-center'> 
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
           <h4 className='text-sm'>{data.date}</h4>
           </div>
                 <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
                <p className='text- mt-2'>{data.description}
                </p>
                 <div className='mt-4'>
                    <button className='bg-gray-700 mt-45 py-1 w-[50%] rounded'>Accept Task</button>
                 </div>
       </div>
  )
}

export default NewTask
