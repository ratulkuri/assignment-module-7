import { useEffect, useState } from "react";
import TaskItem from "./TaskItem"

const TaskList = ({tasks, setTaskList}) => {
    const [totalLeft, setTotalLeft] = useState(0);

    useEffect(() => {
        const total = !!tasks ? tasks?.length : 0;
        if(total > 0) {
            let toatlLeft = tasks.reduce((initalTotal, task) => {
                if (!task.status) {
                    initalTotal++
                }
                return initalTotal
            }, 0)
            setTotalLeft(toatlLeft);
        }
    }, [tasks]);

    const handleOnDelete = (id) => {
        setTaskList((prevList) => prevList.filter((task) => task.id !== id))
    }

    const onChecked = (id, isChecked) => {
        setTaskList((prevList) => prevList.reduce((list, task) => {
            if (task.id === id) {
                task.status = isChecked;
            }
            return [...list, task]
        }, []))
    }

    const clearList = () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );
        if (confirmed) setTaskList([]);
    }

  return (
    <>
        <div className="task-wrap">
            {
                (tasks?.length > 0) ?
                <div className="task-list divide-y divide-slate-600 rounded-md">
                    <div className="list-wrap max-h-[calc(100vh-280px)] lg:max-h-[calc(100vh-330px)] overflow-y-auto">
                        {
                            tasks?.map((task) => {
                                return <TaskItem key={`task-${task.id}`} task={task} onDelete={handleOnDelete} onChecked={onChecked} />
                            })
                        }
                    </div>
                    <div className="list-footer">
                        <span className="stat flex-grow">{totalLeft} items left out of {tasks?.length}</span>
                        <div className="text-right flex-grow">
                            <button className="whitespace-nowrap uppercase px-2" onClick={clearList}>Clear List</button>
                        </div>
                    </div>
                </div> : <div className="flex flex-col gap-2 items-center rounded-md bg-slate-700 p-10 lg:p-24">
                    <span className="text-slate-400">No task yet</span>
                    <span className="text-slate-400 text-xl font-medium">Add New Task</span>
                </div>
            }
        </div>
    </>
  )
}

export default TaskList