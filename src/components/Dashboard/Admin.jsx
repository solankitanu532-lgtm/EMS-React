import AllTask from '../Other/AllTask'
import CreateTask from '../Other/CreateTask'
import Header from '../Other/Header'

const Admin = (props) => {
  return (
    <div className='h-screen w-full p-7'>
       <Header changeUser={props.changeUser} />
       <CreateTask />
       <AllTask />
    </div>
  )
}

export default Admin
