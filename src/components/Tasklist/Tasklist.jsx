import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import Complete from './Complete'
import FailedTask from './FailedTask'

const Tasklist = ({ data }) => {
  return (
    <div className="mt-8">

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-white mb-4">
        Your Tasks
      </h2>

      {/* Scroll Container */}
      <div
        id="tasklist"
        className="flex gap-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
      >

        {data.tasks.length === 0 ? (
          <p className="text-gray-400">No tasks available</p>
        ) : (
          data.tasks.map((elem, idx) => {
            if (elem.active) {
              return <AcceptTask key={idx} data={elem} />
            }
            if (elem.newTask) {
              return <NewTask key={idx} data={elem} />
            }
            if (elem.completed) {
              return <Complete key={idx} data={elem} />
            }
            if (elem.failed) {
              return <FailedTask key={idx} data={elem} />
            }
          })
        )}

      </div>
    </div>
  )
}

export default Tasklist