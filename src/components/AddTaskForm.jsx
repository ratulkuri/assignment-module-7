import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddTaskForm = ({setTaskList}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [desc, setDesc] = useState("");

    const resetForm = () => {
        setIsChecked(false);
        setDesc("");
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        if(!!desc) {
            const item = {
                id: crypto.randomUUID(),
                status: isChecked,
                desc
            }
            setTaskList((prevList) => [...prevList, item])
            resetForm();
        }
    }

    return (
        <>
            <form onSubmit={handleAddTask} className="z-10 relative p-2 lg:p-4">
                <div className="task-item flex items-center flex-shrink-0 gap-3 lg:gap-4 bg-slate-700 rounded-md p-3 lg:p-6">
                    <div className="checkbox">
                        <input onChange={(e) => setIsChecked(e.target.checked)} type="checkbox" id={`task-check`} className="checkbox-item peer hidden" checked={isChecked} />
                        <label
                            htmlFor={`task-check`}
                            className="relative flex w-5 h-5 bg-slate-200 peer-checked:bg-gradient-to-r peer-checked:from-violet-500 peer-checked:to-fuchsia-500 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-slate-200 after:rotate-45"
                        >
                        </label>
                    </div>
                    <div className="desc flex-grow text-white">
                        <input
                            className="w-full px-3 py-2 text-gray-500 bg-slate-800 outline-none focus:ring focus:ring-gray-600 focus:border-gray-600 shadow-sm rounded-lg"
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder="Create a new todo..."
                            value={desc}
                            type="text"
                        />
                    </div>
                    <div className="action flex-shrink-0">
                        <button type="submit" className='p-1.5 lg:p-2 text-sm lg:text-lg border rounded-full text-slate-200' title="Add Task"><FaPlus /></button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddTaskForm