import React from "react";

import { TaskInterface } from "@/interfaces";

const TaskForm = ({ task, setTask }: { task: TaskInterface, setTask: React.Dispatch<React.SetStateAction<TaskInterface>> }) => {
    return (
        <>
            <div className="grid grid-cols-3 mt-5">
                <div className="col-span-3">
                    <label htmlFor="title" className="block text-sm font-medium text-blue-800">Title</label>
                    <input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} name="title" id="title" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div className="col-span-3">
                    <label htmlFor="description" className="block text-sm font-medium text-blue-800">Description</label>
                    <textarea value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} name="description" id="description" rows={3} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                </div>
            </div>
        </>
    );
};

export default TaskForm;