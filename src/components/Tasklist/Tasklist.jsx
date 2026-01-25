import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import Complete from './Complete'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10'>
      {data.tasks.map((elem,idx) =>{
          if(elem.active){
            return <AcceptTask key={idx} data={elem}/>
          }
          if(elem.newTask){
            return <NewTask key={idx} data={elem}/>
          }
          if(elem.completed){
            return <Complete key={idx} data={elem}/>
          }
          if(elem.failed){
            return <FailedTask key={idx} data={elem}/>
          }
      })}
    </div>
  )
}

export default Tasklist
