import React from "react";

import { TaskInterface } from "@/interfaces";

const TaskForm = ({ task, setTask }: { task: TaskInterface, setTask: React.Dispatch<React.SetStateAction<TaskInterface>> }) => {
    return (
        <>
            <div className="grid grid-cols-3 mt-4 gap-4">
                <div className="col-span-3">
                    <label htmlFor="title" className="block text-sm font-medium text-blue-800">Title</label>
                    <input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} name="title" id="title" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div className="col-span-3">
                    <label htmlFor="description" className="block text-sm font-medium text-blue-800">Description</label>
                    <textarea value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} name="description" id="description" rows={3} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="status" className="block text-sm font-medium text-blue-800">Status</label>
                    <select value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })} id="status" name="status" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        <option value="open">Open</option>
                        <option value="in-progress">In Progress</option>
                        <option value="closed">Closed</option>
                        <option value="archived">Archived</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="category" className="block text-sm font-medium text-blue-800">Category</label>
                    <select value={task.category} onChange={(e) => setTask({ ...task, category: e.target.value })} id="category" name="category" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="shopping">Shopping</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="priority" className="block text-sm font-medium text-blue-800">Priority</label>
                    <select value={task.priority} onChange={(e) => setTask({ ...task, priority: e.target.value })} id="priority" name="priority" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="dateToStart" className="block text-sm font-medium text-blue-800">Date to Start</label>
                    <input type="date" value={task.dateToStart} onChange={(e) => setTask({ ...task, dateToStart: e.target.value })} name="dateToStart" id="dateToStart" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="dateToEnd" className="block text-sm font-medium text-blue-800">Date to End</label>
                    <input type="date" value={task.dateToEnd} onChange={(e) => setTask({ ...task, dateToEnd: e.target.value })} name="dateToEnd" id="dateToEnd" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div className="col-span-3">
                    <label htmlFor="reference" className="block text-sm font-medium text-blue-800">Reference</label>
                    <input type="text" value={task.reference} onChange={(e) => setTask({ ...task, reference: e.target.value })} name="reference" id="reference" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

            </div>
        </>
    );
};

export default TaskForm;