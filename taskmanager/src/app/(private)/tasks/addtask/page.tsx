'use client';

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import TaskForm from "@/components/TaskForm";
import { TaskInterface } from "@/interfaces";
import { setLoading } from "@/redux/loadersSlice";
import toast from "react-hot-toast";

const AddTask = () => {

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
    const dispatch = useDispatch();

    const onSave = async () => {
        // e.preventDefault();
        try {
            dispatch(setLoading(true));

            await axios.post('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            toast.success('Task added successfully!');

            router.push('/tasks');
        } catch (error: any) {
            console.log(error.message);
            toast.error('Add Task Failed!. Please try again.', error.message || error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className=" w-[100%]">
            <div className="flex justify-between items-center w-[100%]">
                <h1 className="text-2xl font-bold text-primary">Add Task</h1>
                <button className="btn-outlined rounded-sm shadow-sm"
                    onClick={() => router.push('/tasks')}>Back</button>
            </div>

            <TaskForm task={task} setTask={setTask} onSave={onSave} />
        </div>
    );
};

export default AddTask;