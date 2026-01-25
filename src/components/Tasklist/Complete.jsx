import React from 'react'

const Complete = ({data}) => {
  return (
    <div className='shrink-0 p-5 h-full w-86 bg-blue-400 rounded-xl'>
              <div className='flex justify-between items-center'> 
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
           <h4 className='text-sm'>{data.date}</h4>
           </div>
               <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
             <p className='text- mt-2'>{data.description}
             </p>
             <div className='mt-2'>
                <button className='bg-gray-700 mt-30 py-1 px-1 rounded w-[50%]'>Complete</button>
             </div>
       </div>
  )
}

export default Complete
