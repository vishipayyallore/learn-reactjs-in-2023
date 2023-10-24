'use client';

import { useRouter } from "next/navigation";
import React, { useState } from "react";

import TaskForm from "@/components/TaskForm";
import { TaskInterface } from "@/interfaces";

const EditTask = () => {

    const [task, setTask] = useState<TaskInterface>({
        id: '0',
        title: '',
        description: '',
        status: 'open',
        category: 'work',
        priority: 'low',
        dateToStart: '',
        dateToEnd: '',
        reference: '',
    });
    const router = useRouter();

    return (
        <div className=" w-[100%]">
            <div className="flex justify-between items-center w-[100%]">
                <h1 className="text-2xl font-bold text-primary">Edit Task</h1>
                <button className="btn-outlined rounded-sm shadow-sm"
                    onClick={() => router.push('/tasks')}>Back</button>
            </div>

            <TaskForm task={task} setTask={setTask} onSave={() => { }} />
        </div>
    );
};

export default EditTask;