import { IoMdClose } from 'react-icons/io';

const TaskItem = ({task, onDelete, onChecked}) => {

  return (
    <>
        <div className="task-item flex items-center flex-shrink-0 gap-4 bg-slate-700 px-6 py-5">
            <div className="checkbox">
                <input onChange={(e) => onChecked(task.id, e.target.checked)} type="checkbox" id={`task-check-${task.id}`} className="checkbox-item peer hidden" checked={task.status} />
                <label
                    htmlFor={`task-check-${task.id}`}
                    className="relative flex w-5 h-5 bg-slate-200 peer-checked:bg-gradient-to-r peer-checked:from-violet-500 peer-checked:to-fuchsia-500 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-slate-200 after:rotate-45"
                >
                </label>
            </div>
            <div
                className={`${task.status ? "line-through text-slate-500" : "text-slate-200"} desc cursor-pointer flex-grow`}
                onClick={() => onChecked(task.id, !task.status)}
                title='Click to change status'
            >
                <span>{task.desc}</span>
            </div>
            <div className="action flex-shrink-0">
                <button onClick={() => onDelete(task.id)} className={`${task.status ? "text-slate-500 border-slate-500" : "text-slate-500 border-slate-500"} p-1 border rounded-full`}><IoMdClose /></button>
            </div>
        </div>
    </>
  )
}

export default TaskItem