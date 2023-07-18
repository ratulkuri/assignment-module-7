import { useState } from 'react';
import './App.css'
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList'

const tasks = [
  // {
  //   id: "1",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae necessitatibus omnis commodi!",
  //   status: false,
  // },
  // {
  //   id: "1",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae necessitatibus omnis commodi!",
  //   status: false,
  // },
  // {
  //   id: "1",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae necessitatibus omnis commodi!",
  //   status: false,
  // },
]

function App() {
  const [taskList, setTaskList] = useState(tasks);

  return (
    <>
      <section className='page-wrap min-h-screen bg-slate-50 py-4'>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <h1 className='text-white text-3xl lg:text-5xl font-bold tracking-[10px] mt-2 mb-3 lg:mb-6 px-4'>TODO</h1>
          <AddTaskForm setTaskList={setTaskList} />
          <TaskList tasks={taskList} setTaskList={setTaskList} />
        </div>
      </section>
    </>
  )
}

export default App
