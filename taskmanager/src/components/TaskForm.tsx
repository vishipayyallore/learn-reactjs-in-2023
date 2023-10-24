import React from "react";

import { TaskInterface } from "@/interfaces";

const TaskForm = ({ task, setTask }: { task: TaskInterface, setTask: React.Dispatch<React.SetStateAction<TaskInterface>> }) => {
    return (
        <>
            <div className="grid grid-cols-3 mt-5 gap-5">
                <div className="col-span-3">
                    <label htmlFor="title" className="block text-sm font-medium text-blue-800">Title</label>
                    <input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} name="title" id="title" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div className="col-span-3">
                    <label htmlFor="description" className="block text-sm font-medium text-blue-800">Description</label>
                    <textarea value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} name="description" id="description" rows={3} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                </div>

                <div className="col-span-3">
                    <label htmlFor="status" className="block text-sm font-medium text-blue-800">Status</label>
                    <select value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })} id="status" name="status" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        <option value="open">Open</option>
                        <option value="in-progress">In Progress</option>
                        <option value="closed">Closed</option>
                        <option value="archived">Archived</option>
                    </select>
                </div>

                <div className="col-span-3">
                    <label htmlFor="category" className="block text-sm font-medium text-blue-800">Category</label>
                    <select value={task.category} onChange={(e) => setTask({ ...task, category: e.target.value })} id="category" name="category" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="shopping">Shopping</option>
                        <option value="others">Others</option>
                    </select>
                </div>

            </div>
        </>
    );
};

export default TaskForm;